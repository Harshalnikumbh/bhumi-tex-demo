import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHero } from '../components/Layout';
import { Reveal } from '../components/hooks';
import useProducts from '../components/useProducts';
import { IMG, COMPANY } from '../data';

export default function Contact() {
  const products = useProducts();
  const [params] = useSearchParams();
  const [f, setF] = useState({ name: '', company: '', email: '', phone: '', country: '', product: params.get('product') || 'Polyester Texturised Yarn', quantity: '', message: '' });
  const [st, setSt] = useState({ state: 'idle', msg: '' });
  const set = k => e => setF({ ...f, [k]: e.target.value });
  const submit = async e => {
    e.preventDefault();
    if (!f.name || !(f.email || f.phone)) { setSt({ state: 'err', msg: 'Please enter your name and an email or phone number.' }); return; }
    setSt({ state: 'busy', msg: '' });
    try {
      const r = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
      const d = await r.json();
      if (!r.ok || !d.ok) throw new Error(d.error || 'Something went wrong');
      setSt({ state: 'ok', msg: d.message });
      setF({ ...f, message: '', quantity: '' });
    } catch (err) { setSt({ state: 'err', msg: err.message || 'Could not send right now.' }); }
  };
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's spin" accent="your next order." image={IMG.export} />
      <section className="sec">
        <div className="wrap split top">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h2>Talk to our<br /><em>export team.</em></h2>
            <div className="cinfo">
              <div><b>Head office</b><span>{COMPANY.address}</span></div>
              <div><b>Email</b><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
              <div><b>Plants</b><span>Silvassa, Dadra & Nagar Haveli · Bhiwandi, Maharashtra</span></div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="form">
            <form onSubmit={submit} noValidate>
              <div className="row2"><label>Name *<input value={f.name} onChange={set('name')} /></label><label>Company<input value={f.company} onChange={set('company')} /></label></div>
              <div className="row2"><label>Email<input type="email" value={f.email} onChange={set('email')} /></label><label>Phone<input value={f.phone} onChange={set('phone')} /></label></div>
              <div className="row2"><label>Country<input value={f.country} onChange={set('country')} /></label><label>Product<select value={f.product} onChange={set('product')}>{products.map(p => <option key={p.id}>{p.title}</option>)}<option>Trading / imported yarn</option></select></label></div>
              <label>Quantity (kg / month)<input value={f.quantity} onChange={set('quantity')} /></label>
              <label>Requirement<textarea rows="4" value={f.message} onChange={set('message')} placeholder="Denier / count, luster, colour, packing…" /></label>
              {st.msg && <div className={`flash ${st.state}`}>{st.msg}</div>}
              <button className="btn btn-block" disabled={st.state === 'busy'}>{st.state === 'busy' ? 'Sending…' : 'Send enquiry'}</button>
            </form>
          </Reveal>
        </div>
      </section>
      <section className="map-embed">
        <iframe title="Head office" loading="lazy" src="https://maps.google.com/maps?q=Peninsula%20Centre%2C%20Dr%20S%20S%20Rao%20Road%2C%20Parel%20East%2C%20Mumbai&z=15&output=embed" />
      </section>
    </>
  );
}
