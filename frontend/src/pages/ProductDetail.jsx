import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../components/Layout';
import { Reveal } from '../components/hooks';
import useProducts from '../components/useProducts';
import { IMG } from '../data';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { id } = useParams();
  const products = useProducts();
  const p = products.find(x => x.id === id);
  if (!p) return <NotFound />;
  const others = products.filter(x => x.id !== id);
  return (
    <>
      <PageHero eyebrow={p.label} title={p.title} text={p.description} image={IMG[p.image]} />
      <section className="sec">
        <div className="wrap split top">
          <Reveal className="pd-img"><img src={IMG[p.image]} alt={p.title} /></Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Specifications</span>
            <h2>{p.title}</h2>
            <table className="spec"><tbody>{p.specs.map(([k, v], i) => <tr key={k} style={{ animationDelay: `${0.1 + i * 0.07}s` }}><th>{k}</th><td>{v}</td></tr>)}</tbody></table>
            <div className="pd-btns"><Link to={`/contact?product=${encodeURIComponent(p.title)}`} className="btn">Enquire about this product</Link><Link to="/products" className="btn btn-line dark">← All products</Link></div>
          </Reveal>
        </div>
      </section>
      <section className="sec soft">
        <div className="wrap">
          <Reveal className="sec-head"><span className="eyebrow">Explore more</span><h2>Other products</h2></Reveal>
          <div className="mini-grid">
            {others.map((o, i) => (
              <Reveal key={o.id} delay={i * 0.06}>
                <Link to={`/products/${o.id}`} className="mini"><img src={IMG[o.image]} alt="" /><div><span>{o.label}</span><b>{o.title}</b></div></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
