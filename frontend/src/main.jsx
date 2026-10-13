import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { gsap } from 'gsap';
import App from './App';
import './styles.css';

gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
