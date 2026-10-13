import FlowingMenu from '../bits/FlowingMenu';
import { PageHero } from '../components/Layout';
import { Counter, Reveal } from '../components/hooks';
import { IMG, FACILITIES } from '../data';

export default function Infrastructure() {
  const items = FACILITIES.map(f => ({ ...f, link: '#', image: IMG[f.image] }));
  return (
    <>
      <PageHero eyebrow="Infrastructure" title="Built for scale," accent="tuned for quality." image={IMG.plant} />
      <section className="sec dark flush">
        <div className="wrap"><Reveal className="sec-head"><span className="eyebrow">Our facilities</span><h2>Hover a row to look inside.</h2></Reveal></div>
        <div className="flow-wrap"><FlowingMenu items={items} /></div>
      </section>
      <section className="sec">
        <div className="wrap fac-grid">
          {[[40000, ' TPA', 'Polyester texturised yarn capacity'], [2500, ' TPA', 'Twisted yarn capacity'], [3, '', 'Automated units in Silvassa'], [1200, '', 'Shuttle looms in Bhiwandi']].map(([v, s, l], i) => (
            <Reveal key={l} delay={i * 0.08} className="fac"><b><Counter to={v} suffix={s} /></b><span>{l}</span></Reveal>
          ))}
        </div>
        <div className="wrap split" style={{ marginTop: 80 }}>
          <Reveal className="pd-img"><img src={IMG.factory} alt="Texturising floor" /></Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Technology</span>
            <h2>Automation where<br /><em>it matters.</em></h2>
            <p>Advanced texturising and twisting machinery, with high-tech centrifugal air compressors for quality intermingling yarn.</p>
            <p>Circular knitting runs on Taiwan-made Fukuhama machines, producing fabric up to 36 inches wide in different GSM.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
