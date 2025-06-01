// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

// Import your general page components
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Partners from './pages/Partners/Partners.js';
import Contact from './pages/Contact/Contact.js';
import Quote from './pages/Quote/Quote.js';

// Import the NEW main Services landing page
import Services from './pages/Services/Services.js';

// Import individual service detail pages (existing and new ones)
import DevOpsPage from './pages/Services/DevOpsPage/DevOpsPage.js';
import CloudPage from './pages/Services/CloudPage/CloudPage.js';
import AIPage from './pages/Services/AIPage/AIPage.js';
// NEW specific service pages
import WebDevPage from './pages/Services/WebDevPage/WebDevPage.js';
import SysAdminPage from './pages/Services/SysAdminPage/SysAdminPage.js';
import BlockchainPage from './pages/Services/BlockchainPage/BlockchainPage.js';

import ScrollToTop from './components/ScrollToTop/ScrollToTop.js'; // <--- ADDED THIS IMPORT

// Import the global App.css - .css imports typically don't need .js
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <--- ADDED THIS COMPONENT HERE */}
      <Header />
      <main className="app-main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />

          {/* Route for the NEW Services Landing Page */}
          <Route path="/services" element={<Services />} />

          {/* Routes for Individual Service Detail Pages */}
          <Route path="/services/devops" element={<DevOpsPage />} />
          <Route path="/services/cloud" element={<CloudPage />} />
          <Route path="/services/ai" element={<AIPage />} />
          {/* NEW Routes for specific services */}
          <Route path="/services/webdev" element={<WebDevPage />} />
          <Route path="/services/sysadmin" element={<SysAdminPage />} />
          <Route path="/services/blockchain" element={<BlockchainPage />} />

          {/* Add a Catch-all 404 page later if desired */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;