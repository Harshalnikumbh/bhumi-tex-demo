import { useEffect, useState } from 'react';
import { PRODUCTS } from '../data';

// Products come from the Flask API; the local copy is used if the API is unavailable.
export default function useProducts() {
  const [products, setProducts] = useState(PRODUCTS);
  useEffect(() => {
    let alive = true;
    fetch('/api/products').then(r => (r.ok ? r.json() : Promise.reject())).then(d => alive && setProducts(d)).catch(() => {});
    return () => { alive = false; };
  }, []);
  return products;
}
