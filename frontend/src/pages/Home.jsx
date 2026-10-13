import { useState } from 'react';
import { Link } from 'react-router-dom';
import SplitText from '../bits/SplitText';
import CurvedLoop from '../bits/CurvedLoop';
import TiltedCard from '../bits/TiltedCard';
import { Counter, Reveal } from '../components/hooks';
import useProducts from '../components/useProducts';
import { IMG, STATS } from '../data';

export default function Home() {
  const products = useProducts();
  const [m, setM] = useState({ x: 0, y: 0 });
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setM({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
  };
  return (
    <>
      <section className="hero">
        <svg className="hero-threads" viewBox="0 0 1440 800" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-40 620 C 300 480, 520 760, 820 560 S 1260 360, 1500 460" />
          <path d="M-40 660 C 320 520, 560 800, 860 600 S 1280 400, 1500 500" />
          <path d="M-40 140 C 260 260, 540 40, 880 180 S 1240 300, 1500 200" />
        </svg>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="chip">Since 2004 · Mumbai · Silvassa</span>
            <SplitText tag="h1" text="Threads that travel the world." className="hero-h1" delay={30} duration={0.8} splitType="words, chars" textAlign="left" from={{ opacity: 0, y: 50 }} to={{ opacity: 1, y: 0 }} />
            <p className="lead">Manufacturer and exporter of polyester texturised yarn, air texturised yarn, twisted yarn and knitted fabrics — from three automated units in Silvassa to buyers in 25+ countries.</p>
            <div className="hero-btns"><Link to="/products" className="btn">Explore products</Link><Link to="/contact" className="btn btn-line">Request a quote</Link></div>
          </div>
          <div className="hero-art" onMouseMove={onMove} onMouseLeave={() => setM({ x: 0, y: 0 })}>
            <img className="ha ha1" src={IMG.factory} alt="" style={{ transform: `translate(${m.x * -24}px, ${m.y * -18}px)` }} />
            <img className="ha ha2" src={IMG.fabrics} alt="" style={{ transform: `translate(${m.x * 30}px, ${m.y * 22}px)` }} />
            <div className="ha-badge" style={{ transform: `translate(${m.x * -12}px, ${m.y * -8}px)` }}><b>25+</b><span>countries</span></div>
          </div>
        </div>
        <div className="wrap stats">{STATS.map((s, i) => <Reveal key={s.label} delay={i * 0.08}><b><Counter to={s.value} suffix={s.suffix} /></b><span>{s.label}</span></Reveal>)}</div>
      </section>

      <div className="curve"><CurvedLoop marqueeText="Polyester Texturised Yarn ✦ Air Texturised Yarn ✦ Twisted Yarn ✦ Lycra Cover Yarn ✦ Knitted Fabrics ✦ Weaving Fabrics ✦ " speed={1.4} curveAmount={160} direction="left" interactive className="curve-text" /></div>

      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head row-head"><div><span className="eyebrow">What we make</span><h2>Yarns and fabrics,<br /><em>engineered for every end use.</em></h2></div><Link to="/products" className="btn btn-line dark">All products →</Link></Reveal>
          <div className="tcards">
            {products.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <Link to={`/products/${p.id}`} className="tcard">
                  <TiltedCard imageSrc={IMG[p.image]} altText={p.title} captionText={p.title} containerHeight="340px" containerWidth="100%" imageHeight="340px" imageWidth="100%" rotateAmplitude={10} scaleOnHover={1.05} showMobileWarning={false} showTooltip={false} displayOverlayContent overlayContent={<div className="tc-over"><span>{p.label}</span><b>{p.title}</b></div>} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec soft">
        <div className="wrap">
          <Reveal className="sec-head"><span className="eyebrow">Why Bhumi</span><h2>Scale, consistency<br /><em>and export know-how.</em></h2></Reveal>
          <div className="why">
            {[['40,000 TPA', 'Texturising capacity across three automated units in Silvassa.'], ['Automation first', 'High-tech centrifugal air compressors for consistent intermingling.'], ['Yarn to fabric', 'Texturising, twisting, knitting and 1,200 shuttle looms under one group.'], ['Export ready', 'Packing, documentation and shipping for buyers in 25+ countries.']].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08} className="why-card"><span className="why-n">0{i + 1}</span><h3>{t}</h3><p>{d}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-in">
          <Reveal><h2>Need a reliable yarn partner?</h2><p>Tell us the denier, luster and quantity — our export team replies within one working day.</p></Reveal>
          <Link to="/contact" className="btn btn-white">Send an enquiry</Link>
        </div>
      </section>
    </>
  );
}
