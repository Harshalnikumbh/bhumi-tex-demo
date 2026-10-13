# Bhumi Tex Industries — demo website (React + Flask)

Light, interactive, multi-page demo site. No WebGL / 3D; native smooth scrolling.

- **frontend/** — React 18 + Vite + React Router. Separate pages:
  `/` Home, `/about`, `/products`, `/products/:id`, `/process`, `/yarn-finder`, `/infrastructure`, `/global`, `/contact`.
  Animations: page fade transitions, scroll reveals, counters, mouse-parallax hero,
  sticky stacking process cards, real world map with highlighted export countries and animated routes, plus React Bits SplitText, CurvedLoop, MagicBento,
  TiltedCard, FlowingMenu and LogoLoop.
- **backend/** — Flask. Serves the built site and a JSON API:
  - `GET /api/products`, `GET /api/yarns?machine=...`, `GET /api/company`
  - `POST /api/enquiry` — validates and saves enquiries to `backend/enquiries.json`

## Run (already built — only Python needed)
```powershell
cd backend; pip install -r requirements.txt; python app.py
```
Open http://127.0.0.1:5000

## Develop the frontend
```powershell
cd frontend; npm install; npm run dev      # http://localhost:5173 (API proxied to Flask on :5000)
npm run build                               # rebuilds frontend/dist, which Flask serves
```

## Content & images
- Text, products, yarn table, process steps and export countries: `frontend/src/data.js` (API copies in `backend/app.py`).
- Photos were generated in Higgsfield and load from its CDN. To host them yourself, save them in `frontend/public/img/` and update `IMG` in `frontend/src/data.js`.
