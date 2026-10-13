import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { COMPANY } from '../data';

export const LINKS = [
  ['/', 'Home'], ['/about', 'About'], ['/products', 'Products'], ['/process', 'Process'],
  ['/yarn-finder', 'Yarn Finder'], ['/infrastructure', 'Infrastructure'], ['/global', 'Global'], ['/contact', 'Contact']
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 30);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header className={`nav ${solid || pathname !== '/' ? 'solid' : ''} ${open ? 'open' : ''}`}>
      <div className="wrap nav-in">
        <Link to="/" className="brand"><img src="/logo-mark.svg" alt="" /><span><b>BHUMI</b><small>TEX INDUSTRIES</small></span></Link>
        <nav>{LINKS.slice(0, 7).map(([to, l]) => <NavLink key={to} to={to} end={to === '/'}>{l}</NavLink>)}</nav>
        <Link to="/contact" className="btn btn-sm nav-cta">Send enquiry</Link>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </div>
      <div className="mnav">{LINKS.map(([to, l], i) => <NavLink key={to} to={to} end={to === '/'} style={{ transitionDelay: `${0.04 * i}s` }}>{l}</NavLink>)}</div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <div className="brand"><img src="/logo-mark.svg" alt="" /><span><b>BHUMI</b><small>TEX INDUSTRIES</small></span></div>
          <p>Manufacturer and exporters of finest yarns and fabrics since 2004.</p>
        </div>
        <div><h4>Explore</h4>{LINKS.slice(1, 7).map(([to, l]) => <Link key={to} to={to}>{l}</Link>)}</div>
        <div><h4>Contact</h4><p>{COMPANY.address}</p><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
      </div>
      <div className="wrap foot-bot"><span>© {new Date().getFullYear()} {COMPANY.name}</span><span>Demo website</span></div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, accent, text, image }) {
  return (
    <section className="phero">
      <div className="phero-bg" style={{ backgroundImage: image ? `url(${image})` : undefined }} />
      <div className="phero-shade" />
      <svg className="phero-thread" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-20 220 C 200 120, 380 290, 620 170 S 1000 60, 1220 140" />
        <path d="M-20 250 C 240 170, 420 300, 640 210 S 1010 110, 1220 190" />
      </svg>
      <div className="wrap phero-in">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}{accent && <><br /><em>{accent}</em></>}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}
