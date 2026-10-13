import { Link } from 'react-router-dom';
import { PageHero } from '../components/Layout';

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="This thread" accent="leads nowhere." />
      <section className="sec"><div className="wrap"><Link to="/" className="btn">Back to home</Link></div></section>
    </>
  );
}
