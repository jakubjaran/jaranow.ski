import React from 'react';

import Navbar from './navbar';
import Footer from './footer';

import '../index.scss';

const Layout = ({ children }) => (
    <div>
        <Navbar />
        <div></div>
        <div className="has-background-dark has-text-light">
            <div className="container is-max-desktop" style={{ minHeight: '90vh' }}>
                {children}
            </div>
        </div>
        <Footer />
    </div>
);

export default Layout;