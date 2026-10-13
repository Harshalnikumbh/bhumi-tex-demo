import { PageHero } from '../components/Layout';
import { Reveal } from '../components/hooks';
import { IMG, PROCESS } from '../data';

// Cards stack using CSS position: sticky — smooth, native scrolling, no JS scroll library.
export default function Process() {
  return (
    <>
      <PageHero eyebrow="From POY to port" title="How a Bhumi yarn" accent="is made." image={IMG.bobbin} />
      <section className="sec">
        <div className="wrap">
          <div className="stack">
            {PROCESS.map((p, i) => (
              <article key={p.step} className="scard" style={{ top: `${100 + i * 18}px`, zIndex: i + 1 }}>
                <div className="scard-txt"><span className="pstep">{p.step}</span><h3>{p.title}</h3><p>{p.text}</p></div>
                <img src={IMG[p.image]} alt={p.title} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec soft">
        <div className="wrap">
          <Reveal className="sec-head"><span className="eyebrow">At a glance</span><h2>The Bhumi value chain</h2></Reveal>
          <div className="flow">
            {['POY', 'Texturising', 'Twisting', 'Knitting & weaving', 'QC', 'Export'].map((s, i) => (
              <Reveal key={s} delay={i * 0.1} className="flow-step"><span>{String(i + 1).padStart(2, '0')}</span><b>{s}</b></Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
