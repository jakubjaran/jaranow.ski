import React from 'react';

import { Link } from 'gatsby';

const Navbar = () => {

    const toggleMenu = () => {
        const navbarMenu = document.getElementById('navbarMenu');
        const navbarBurger = document.querySelector('.navbar-burger');
        navbarMenu.classList.toggle('is-active');
        navbarBurger.classList.toggle('is-active');
    }

    return (
        <nav className="navbar is-black px-3 py-2 is-fixed-top">
            <div className="container is-max-desktop">
                <div className="navbar-brand">
                    <Link className="navbar-item has-text-weight-bold has-text-light" to="/">jaranow<span className="has-text-primary">.</span>ski</Link>
                    <button className="navbar-burger button is-black" aria-label="menu" aria-expanded="false" data-target="navbarMenu" onClick={toggleMenu}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbarMenu" className="navbar-menu has-background-black">
                    <div className="navbar-end">
                        <a className="navbar-item has-text-weight-medium has-text-light" href="https://github.com/jakubjaran">github</a>
                        <Link className="navbar-item has-text-weight-medium has-text-light" to="/omnie">o mnie</Link>
                        <Link className="navbar-item has-text-weight-medium has-text-light" to="/kontakt">kontakt</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;