// client/src/components/Layout/Layout.js
import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './Layout.css'; // Import its own CSS

function Layout({ children }) {
    return (
        <div className="app-layout">
            <Header />
            {/* CRITICAL FIX: Add the header-spacer div here */}
            <div className="header-spacer"></div> {/* <--- ADD THIS LINE */}
            <main className="app-main-content">
                {children} {/* This is where your page content will be rendered */}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;