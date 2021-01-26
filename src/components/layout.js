import React from 'react';

import Navbar from './navbar';
import Footer from './footer';

import '../index.scss';

const Layout = ({ children }) => {

    document.body.classList.add('has-navbar-fixed-top');

    return (
        <div>
            <Navbar />
            <div></div>
            <div className="py-6">
                <div className="container is-max-desktop px-3" style={{ minHeight: '90vh' }}>
                    {children}
                </div>
            </div >
            <Footer />
        </div >
    );
};

export default Layout;