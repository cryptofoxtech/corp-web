// client/src/index.js
import React from 'react'; // Re-import React
import ReactDOM from 'react-dom/client'; // Re-import ReactDOM
import './index.css';
import App from './App';

// Import Bootstrap CSS for global styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Get the root element from your HTML (public/index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);