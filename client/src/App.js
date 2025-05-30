// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import your general page components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Partners from './pages/Partners/Partners';
import Contact from './pages/Contact/Contact';
import Quote from './pages/Quote/Quote';

// Import the NEW main Services landing page
import Services from './pages/Services/Services';

// Import individual service detail pages (existing and new ones)
import DevOpsPage from './pages/Services/DevOpsPage/DevOpsPage';
import CloudPage from './pages/Services/CloudPage/CloudPage';
import AIPage from './pages/Services/AIPage/AIPage';
// NEW specific service pages
import WebDevPage from './pages/Services/WebDevPage/WebDevPage';
import SysAdminPage from './pages/Services/SysAdminPage/SysAdminPage';
import BlockchainPage from './pages/Services/BlockchainPage/BlockchainPage';

// Import the global App.css - we will create/add to this in the next step
import './App.css'; // Make sure this import is present

function App() {
  return (
    <Router>
      <Header />
      {/* --- ADDED className="app-main-content" HERE --- */}
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