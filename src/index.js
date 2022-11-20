import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <HelmetProvider>
        <App />
    </HelmetProvider>
    </HashRouter>
  </React.StrictMode>
);
