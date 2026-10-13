import { Link } from 'react-router-dom';
import TiltedCard from '../bits/TiltedCard';
import { PageHero } from '../components/Layout';
import { Counter, Reveal } from '../components/hooks';
import { IMG, STATS } from '../data';

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Two decades in polyester." accent="Four decades in textiles." image={IMG.factory} />
      <section className="sec">
        <div className="wrap split">
          <Reveal className="about-media">
            <TiltedCard imageSrc={IMG.plant} altText="Bhumi plant, Silvassa" captionText="Silvassa, Dadra & Nagar Haveli" containerHeight="460px" containerWidth="100%" imageHeight="460px" imageWidth="100%" rotateAmplitude={10} scaleOnHover={1.04} showMobileWarning={false} showTooltip displayOverlayContent overlayContent={<p className="tilt-badge">Since 2004</p>} />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Who we are</span>
            <h2>One of India's leading<br /><em>polyester yarn makers.</em></h2>
            <p>Bhumi is engaged in manufacturing polyester texturised yarn, air texturising, twisted yarn and knitted fabrics since 2004, and has become one of the pioneers and leading manufacturers of polyester texturised yarn in India, with over 15 years of experience in synthetic yarn processing.</p>
            <p>Our manufacturing division in Silvassa, Dadra & Nagar Haveli has a production capacity of around 40,000 tonnes per annum across three units, with a primary focus on quality production through automation and quality raw material.</p>
            <p>Today Bhumi is one of the largest exporters of draw textured yarn from India, exporting to more than 25 countries.</p>
          </Reveal>
        </div>
      </section>
      <section className="sec dark">
        <div className="wrap stats-light">{STATS.map((s, i) => <Reveal key={s.label} delay={i * 0.08}><b><Counter to={s.value} suffix={s.suffix} /></b><span>{s.label}</span></Reveal>)}</div>
      </section>
      <section className="sec">
        <div className="wrap split top">
          <Reveal>
            <span className="eyebrow">History</span>
            <h2>Our journey</h2>
            <p className="muted">Although we set foot in manufacturing in 2004, we come from a long and illustrious lineage of textile indenting and trading that goes back about 40 years.</p>
          </Reveal>
          <div className="tl">
            {[['1980s', 'Textile indenting & trading', 'The family business begins in textile indenting and trading.'], ['2004', 'Bhumi is incorporated', 'Manufacturing of polyester texturised yarn begins.'], ['Expansion', 'Three units in Silvassa', 'Automated texturising and twisting, ~40,000 TPA capacity.'], ['Diversification', 'Fabrics & trading', 'Knitted fabrics, 1,200 shuttle looms in Bhiwandi, and trading of imported yarns.'], ['Today', 'Global exporter', 'Draw textured yarn exported to 25+ countries.']].map(([y, t, d], i) => (
              <Reveal key={y} delay={i * 0.08} className="tl-item"><span className="tl-y">{y}</span><div><h3>{t}</h3><p>{d}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="sec soft">
        <div className="wrap split top">
          <Reveal><span className="eyebrow">Vision</span><h2>Yarn to finished<br /><em>product, in-house.</em></h2></Reveal>
          <Reveal delay={0.1}>
            <p>To become one of the leading players in polyester yarns with an in-house turnkey solution — forward and backward integration, right from producing raw materials to finished products.</p>
            <p>We are committed to enhancing customer satisfaction in quality and delivery across our entire range, with continual improvement in our Quality Management System, and aim to further expand our production capacity.</p>
            <Link to="/products" className="btn">See our products</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
