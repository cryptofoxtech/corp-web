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

// Import the new service pages from the correct nested path
import DevOpsPage from './pages/Services/DevOpsPage/DevOpsPage'; // <--- UPDATED PATH
import CloudPage from './pages/Services/CloudPage/CloudPage';     // <--- UPDATED PATH
import AIPage from './pages/Services/AIPage/AIPage';             // <--- UPDATED PATH
import OtherServicesPage from './pages/Services/OtherServicesPage/OtherServicesPage'; // <--- UPDATED PATH

function App() {
  return (
    <Router>
      <Header />
      <main> {/* The 'main' tag is important for sticky footer */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />

          {/* Routes for Service Pages - paths remain the same, just the component import changed */}
          <Route path="/services/devops" element={<DevOpsPage />} />
          <Route path="/services/cloud" element={<CloudPage />} />
          <Route path="/services/ai" element={<AIPage />} />
          <Route path="/services/other" element={<OtherServicesPage />} />

          {/* Add a Catch-all 404 page later if desired */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;