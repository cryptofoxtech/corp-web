// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
// Import your main layout CSS - THIS IS THE MISSING PIECE!
import './components/Layout/Layout.css'; // <--- ADD THIS LINE

// Import Bootstrap CSS for global styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Import HelmetProvider for managing document head
import { HelmetProvider } from 'react-helmet-async';

// Import BrowserRouter for client-side routing
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);