import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/Layout';
import { Reveal } from '../components/hooks';
import { IMG, YARNS } from '../data';

export default function YarnFinder() {
  const [rows, setRows] = useState(YARNS);
  const [m, setM] = useState('All');
  const [q, setQ] = useState('');
  useEffect(() => { fetch('/api/yarns').then(r => (r.ok ? r.json() : Promise.reject())).then(setRows).catch(() => {}); }, []);
  const machines = ['All', ...new Set(rows.map(r => r.machine))];
  const list = rows.filter(r => (m === 'All' || r.machine === m) && (r.type + ' ' + r.count).toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHero eyebrow="Trading & imported yarn" title="Find the right" accent="count, fast." text="Spun polyester, viscose, 100% cotton and blended yarns — stocked in our Bhiwandi & Surat warehouses." image={IMG.cones} />
      <section className="sec soft">
        <div className="wrap">
          <Reveal className="finder">
            <div className="finder-top">
              <div className="tabs">{machines.map(x => <button key={x} className={m === x ? 'on' : ''} onClick={() => setM(x)}>{x}</button>)}</div>
              <input className="search" placeholder="Search e.g. combed, viscose, Ne 40" value={q} onChange={e => setQ(e.target.value)} />
            </div>
            <div className="ytable" key={m + q}>
              <div className="yrow yh"><span>Machine type</span><span>Yarn type</span><span>Count range</span></div>
              {list.map((r, i) => <div className="yrow" key={r.machine + r.type} style={{ animationDelay: `${i * 0.035}s` }}><span>{r.machine}</span><b>{r.type}</b><span className="cnt">{r.count}</span></div>)}
              {!list.length && <p className="muted pad">No match — <Link to="/contact">tell us what you need</Link>.</p>}
            </div>
            <p className="muted small">{list.length} of {rows.length} yarns shown</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
