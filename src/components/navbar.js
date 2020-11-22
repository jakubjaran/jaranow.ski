import React from 'react';
import style from './navbar.module.scss';
import {Link} from 'gatsby';

const Navbar = () => (
    <nav className={style.navbar}>
        <Link to="/" className={style.logo}>jaranow<span>.</span>ski</Link>
        <div>
            <a href="https://github.com/jakubjaran">github</a>
            <Link to="/omnie">o mnie</Link>
            <Link to="/kontakt">kontakt</Link>
        </div>
    </nav>
);

export default Navbar