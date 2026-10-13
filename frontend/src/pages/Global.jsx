import { useState } from 'react';
import LogoLoop from '../bits/LogoLoop';
import { PageHero } from '../components/Layout';
import { Reveal } from '../components/hooks';
import { IMG, COUNTRIES } from '../data';

import { MAP_W as W, MAP_H as H, SHAPES, POINTS, HUB, ALIAS } from '../worldmap';

// Real country outlines (Natural Earth) — plain SVG, no WebGL.
const REGIONS = {
  'Asia': ['Bangladesh', 'Sri Lanka', 'Vietnam', 'Indonesia', 'Nepal'],
  'Middle East': ['UAE', 'Saudi Arabia', 'Iran', 'Turkey'],
  'Africa': ['Egypt', 'Morocco', 'Kenya', 'South Africa', 'Nigeria', 'Ethiopia'],
  'Europe': ['UK', 'Italy', 'Germany', 'Poland', 'Russia'],
  'Americas': ['USA', 'Mexico', 'Brazil', 'Colombia', 'Argentina']
};

const byAtlas = Object.fromEntries(COUNTRIES.map(([n]) => [ALIAS[n] || n, n]));

export default function Global() {
  const [region, setRegion] = useState('All');
  const [hover, setHover] = useState(null);
  const shown = COUNTRIES.filter(([n]) => region === 'All' || REGIONS[region].includes(n));
  const shownSet = new Set(shown.map(([n]) => n));
  const logos = COUNTRIES.map(([n]) => ({ node: <span className="ctry">{n}</span>, title: n }));
  return (
    <>
      <PageHero eyebrow="Global reach" title="From Silvassa to" accent="25+ countries." text="One of India's largest exporters of draw textured yarn." image={IMG.export} />
      <section className="sec dark">
        <div className="wrap">
          <div className="tabs dark-tabs">{['All', ...Object.keys(REGIONS)].map(r => <button key={r} className={region === r ? 'on' : ''} onClick={() => setRegion(r)}>{r}</button>)}</div>
          <Reveal className="map">
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="World map of Bhumi export markets">
              <defs><pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="rgba(255,255,255,.07)" /></pattern></defs>
              <rect width={W} height={H} fill="url(#dots)" />
              <g className="land">
                {SHAPES.map(c => {
                  const name = byAtlas[c.n];
                  const cls = c.n === 'India' ? 'home' : name ? (shownSet.has(name) ? (hover === name ? 'mkt on' : 'mkt') : 'mkt dim') : '';
                  return <path key={c.n} d={c.d} className={cls} onMouseEnter={name ? () => setHover(name) : undefined} onMouseLeave={name ? () => setHover(null) : undefined}><title>{name || c.n}</title></path>;
                })}
              </g>
              {shown.map(([n]) => {
                const [x, y] = POINTS[n];
                const mx = (HUB[0] + x) / 2, my = Math.min(HUB[1], y) - Math.abs(x - HUB[0]) * 0.22 - 18;
                const on = hover === n;
                return (
                  <g key={n} onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(null)} className={`route ${on ? 'on' : ''}`}>
                    <path d={`M${HUB[0]} ${HUB[1]} Q ${mx} ${my} ${x} ${y}`} />
                    <circle cx={x} cy={y} r={on ? 6.5 : 4} />
                    {(on || region !== 'All') && <text x={x} y={y - 11} textAnchor="middle">{n}</text>}
                  </g>
                );
              })}
              <circle cx={HUB[0]} cy={HUB[1]} r="7" className="hub" />
              <text x={HUB[0] + 10} y={HUB[1] + 20} className="hub-t">India · Mumbai</text>
            </svg>
          </Reveal>
          <div className="chips">{shown.map(([n]) => <button key={n} onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(null)} className={hover === n ? 'on' : ''}>{n}</button>)}</div>
        </div>
        <div className="loop"><LogoLoop logos={logos} speed={60} direction="left" logoHeight={34} gap={46} hoverSpeed={10} scaleOnHover fadeOut fadeOutColor="#140806" ariaLabel="Export markets" /></div>
      </section>
    </>
  );
}
