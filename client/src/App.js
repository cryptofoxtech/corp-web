// client/src/App.js
import React from 'react';
// Only import Route and Routes, BrowserRouter is in index.js
import { Route, Routes } from 'react-router-dom';

// Import your new Layout component
import Layout from './components/Layout/Layout.js'; // Make sure this path is correct!

// Import ScrollToTop (it will be rendered *inside* the Layout's main content area, for page-specific scroll)
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js';

// --- General Page Components ---
import Home from './pages/Home/Home.js';
import Blog from './pages/Blog/Blog.js';
import Partners from './pages/Partners/Partners.js';
import Quote from './pages/Quote/Quote.js';

// --- About Us and its Sub-Pages ---
import About from './pages/About/About.js';
import CaseStudiesPage from './pages/About/CaseStudiesPage/CaseStudiesPage.js';
import LegalPage from './pages/About/LegalPage/LegalPage.js';
import Contact from './pages/About/Contact/Contact.js';

// --- Services Pages (Consolidated) ---
import Services from './pages/Services/Services.js';
import DevelopmentServicesPage from './pages/Services/DevelopmentServicesPage/DevelopmentServicesPage.js';
// Corrected: Reverted to your original, correct path for OperationsServicesPage
import OperationsServicesPage from './pages/Services/OperationsServicesPage/OperationsServicesPage.js';

// Remove the import of App.css from here.
// Its global styles will be moved to index.css or Layout.css.
// import './App.css';

function App() {
    return (
        // Removed the <Router> wrapper here, as BrowserRouter is already in index.js
        <>
            {/* ScrollToTop component can stay here, as it operates globally on scroll behavior. */}
            <ScrollToTop />

            {/* Wrap the entire set of routes with the Layout component */}
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/*" element={<Blog />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/quote" element={<Quote />} />

                    {/* Services Pages (Consolidated) */}
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/development" element={<DevelopmentServicesPage />} />
                    <Route path="/services/operations" element={<OperationsServicesPage />} />

                    {/* About Us and its Sub-Pages */}
                    <Route path="/about" element={<About />} />
                    <Route path="/about/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/about/legal" element={<LegalPage />} />
                    <Route path="/about/contact" element={<Contact />} />

                    {/* Add a Catch-all 404 page later if desired */}
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </Layout>
        </>
    );
}

export default App;
