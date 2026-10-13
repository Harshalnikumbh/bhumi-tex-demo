import { Routes, Route, useLocation } from 'react-router-dom';
import { Nav, Footer, ScrollToTop } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Process from './pages/Process';
import YarnFinder from './pages/YarnFinder';
import Infrastructure from './pages/Infrastructure';
import Global from './pages/Global';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main key={location.pathname} className="page">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/process" element={<Process />} />
          <Route path="/yarn-finder" element={<YarnFinder />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/global" element={<Global />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
