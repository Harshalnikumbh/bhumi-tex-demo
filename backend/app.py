"""Bhumi Tex Industries — demo website backend (Flask).

Serves the built React app from ../frontend/dist and a small JSON API.

Run:
    pip install -r requirements.txt
    python app.py            ->  http://127.0.0.1:5000
"""
import json
import os
import re
from datetime import datetime

from flask import Flask, jsonify, request, send_from_directory

BASE = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(BASE, "..", "frontend", "dist")
ENQ_FILE = os.path.join(BASE, "enquiries.json")

app = Flask(__name__, static_folder=None)  # the SPA route below serves the React build

COMPANY = {
    "name": "Bhumi Tex Industries Pvt. Ltd.",
    "since": 2004,
    "email": "bhumi@bhumitex.com",
    "website": "www.bhumitex.com",
    "address": "Unit No. 06/07, Peninsula Centre, Dr. S.S. Rao Road, Parel (East), Mumbai, Maharashtra 400012",
    "plants": "3 automated units, Silvassa, Dadra & Nagar Haveli",
}

STATS = [
    {"value": 40000, "suffix": " TPA", "label": "Texturised yarn capacity"},
    {"value": 25, "suffix": "+", "label": "Export countries"},
    {"value": 3, "suffix": "", "label": "Automated units, Silvassa"},
    {"value": 1200, "suffix": "", "label": "Shuttle looms, Bhiwandi"},
]

PRODUCTS = [
    {
        "id": "dty", "title": "Polyester Texturised Yarn", "label": "DTY / PTY",
        "image": "factory",
        "description": "Draw textured yarn from POY for suiting, shirting, dress materials, saris, hosiery and knitted fabrics.",
        "specs": [["Capacity", "~40,000 tonnes per annum, 3 units"], ["Process", "Draw texturising of POY with intermingling"],
                  ["End use", "Suiting, shirting, dress materials, saris, hosiery, knitted fabrics"], ["Export", "25+ countries"]],
    },
    {
        "id": "aty", "title": "Air Texturised Yarn", "label": "ATY",
        "image": "bobbin",
        "description": "Mechanically bulked with a cold-air stream — the touch and warmth of cotton with the strength of polyester.",
        "specs": [["Types", "Air covered yarn (polyester & nylon filament)"], ["Count range", "60 Denier – 450 Denier"],
                  ["Luster", "Semi Dull, Full Dull, Bright"], ["End use", "Knitting & weaving"]],
    },
    {
        "id": "twisted", "title": "Twisted Yarn", "label": "2,500 TPA",
        "image": "qc",
        "description": "Precision twisted yarns for zipper fasteners, curtains, industrial cloth and fancy yarns for high-value dress materials.",
        "specs": [["Capacity", "2,500 tonnes per annum"], ["End use", "Zippers, curtains, industrial fabrics, upholstery"]],
    },
    {
        "id": "lycra", "title": "Lycra Cover Yarn", "label": "Stretch",
        "image": "cones",
        "description": "Spandex covered yarns that bring comfort stretch to sportswear, ladies wear and hosiery.",
        "specs": [["Construction", "Spandex core with filament cover"], ["End use", "Sportswear, hosiery, ladies wear"]],
    },
    {
        "id": "knit", "title": "Knitted Fabrics", "label": "Up to 36\"",
        "image": "fabrics",
        "description": "Circular knit polyester fabrics on Taiwan-made Fukuhama machines, exported around the globe.",
        "specs": [["Fabric", "100% polyester base, with / without spandex"], ["Count range", "60 – 150 Denier (DTY & poly spun)"],
                  ["Knit type", "Interlock & Sinker"], ["Width", "Up to 36 inches, various GSM"], ["End use", "Menswear, ladies wear, baby wear, sportswear"]],
    },
    {
        "id": "weave", "title": "Weaving Fabrics", "label": "1,200 looms",
        "image": "looms",
        "description": "PC, PV and 100% cotton fabrics woven on 1,200 shuttle looms in Bhiwandi, Maharashtra.",
        "specs": [["Looms", "1,200 shuttle looms, Bhiwandi"], ["Fabrics", "PC, PV, 100% cotton"], ["Market", "Domestic & export"]],
    },
]

TRADING_YARNS = [
    {"machine": "Open End Yarn", "type": "100% Cotton Carded", "count": "Ne 6/1 – Ne 24/1"},
    {"machine": "Open End Yarn", "type": "Synthetic & Blended", "count": "Ne 6/1 – Ne 30/1"},
    {"machine": "Ring Spun Yarn", "type": "100% Cotton Carded", "count": "Ne 8/1 – Ne 60/1"},
    {"machine": "Ring Spun Yarn", "type": "100% Cotton Combed", "count": "Ne 10/1 – Ne 100/1"},
    {"machine": "Ring Spun Yarn", "type": "100% Cotton Compact", "count": "Ne 30/1 – Ne 120/1"},
    {"machine": "Ring Spun Yarn", "type": "100% Polyester Spun", "count": "Ne 20/1 – Ne 80/1"},
    {"machine": "Ring Spun Yarn", "type": "100% Viscose Spun", "count": "Ne 20/1 – Ne 40/1"},
    {"machine": "Ring Spun Yarn", "type": "Poly–Cotton Blended", "count": "Ne 20/1 – Ne 80/1"},
    {"machine": "Ring Spun Yarn", "type": "Poly–Viscose Blended", "count": "Ne 20/1 – Ne 80/1"},
    {"machine": "TFO Yarn", "type": "100% Cotton Carded", "count": "Ne 8/2 – Ne 60/2"},
    {"machine": "TFO Yarn", "type": "100% Cotton Combed", "count": "Ne 10/2 – Ne 100/2"},
    {"machine": "TFO Yarn", "type": "100% Cotton Compact", "count": "Ne 30/2 – Ne 120/2"},
    {"machine": "TFO Yarn", "type": "Synthetic & Blended", "count": "Ne 20/2 – Ne 80/2"},
]


@app.get("/api/company")
def api_company():
    return jsonify({"company": COMPANY, "stats": STATS})


@app.get("/api/products")
def api_products():
    return jsonify(PRODUCTS)


@app.get("/api/yarns")
def api_yarns():
    machine = request.args.get("machine")
    rows = [r for r in TRADING_YARNS if not machine or r["machine"] == machine]
    return jsonify(rows)


@app.post("/api/enquiry")
def api_enquiry():
    d = request.get_json(silent=True) or {}
    name = (d.get("name") or "").strip()
    email = (d.get("email") or "").strip()
    phone = (d.get("phone") or "").strip()
    if not name or not (email or phone):
        return jsonify({"ok": False, "error": "Please enter your name and an email or phone number."}), 400
    if email and not re.match(r"[^@\s]+@[^@\s]+\.[^@\s]+$", email):
        return jsonify({"ok": False, "error": "Please enter a valid email address."}), 400
    entry = {k: (d.get(k) or "").strip()[:500] for k in ("name", "company", "email", "phone", "country", "product", "quantity", "message")}
    entry["received_at"] = datetime.now().isoformat(timespec="seconds")
    data = []
    if os.path.exists(ENQ_FILE):
        with open(ENQ_FILE, encoding="utf-8") as f:
            try:
                data = json.load(f)
            except json.JSONDecodeError:
                data = []
    data.append(entry)
    with open(ENQ_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    return jsonify({"ok": True, "message": f"Thank you, {name}. Our export team will reply within one working day."})


# --- React app (single-page) ---
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def spa(path):
    full = os.path.join(DIST, path)
    if path and os.path.isfile(full):
        return send_from_directory(DIST, path)
    if not os.path.exists(os.path.join(DIST, "index.html")):
        return ("Frontend not built yet. Run:  cd frontend; npm install; npm run build", 500)
    return send_from_directory(DIST, "index.html")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
