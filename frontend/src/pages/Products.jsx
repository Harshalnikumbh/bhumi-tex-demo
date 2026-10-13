import { useNavigate } from 'react-router-dom';
import MagicBento from '../bits/MagicBento';
import { PageHero } from '../components/Layout';
import { Reveal } from '../components/hooks';
import useProducts from '../components/useProducts';
import { IMG } from '../data';

export default function Products() {
  const products = useProducts();
  const nav = useNavigate();
  const cards = products.map(p => ({ color: '#1a0c08', title: p.title, description: p.description, label: p.label, image: IMG[p.image], id: p.id }));
  return (
    <>
      <PageHero eyebrow="Products" title="Yarns and fabrics," accent="engineered for every end use." text="Select a product to see its specifications." image={IMG.cones} />
      <section className="sec soft">
        <div className="wrap">
          <Reveal className="bento-wrap">
            <MagicBento cards={cards} onCardClick={c => nav(`/products/${c.id}`)} textAutoHide={false} enableStars={false} enableSpotlight enableBorderGlow enableTilt enableMagnetism={false} clickEffect spotlightRadius={280} glowColor="242, 92, 38" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
