import React from 'react';
import '../normalize.css';
import style from './layout.module.scss';
import Navbar from "./navbar";
import "fontsource-open-sans"
import '../global.scss';
import Footer from './footer';


const Layout = ({children}) => (
    <div className={style.layout}>
        <Navbar />
        <div className={style.background}></div>
        <div className={style.inner}>
            {children}
        </div>
        <Footer />
    </div>
);

export default Layout