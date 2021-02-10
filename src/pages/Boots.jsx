import React,{useEffect,useState} from 'react'

import '../css/style.css'
import '../css/menu.css'
import '../css/blog.css'
import '../css/footer.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import BtSlider from '../components/newslider/BtSlider';

function Boots() {
    
    return (
        <>
        <Header />
        <SideMenu />
        <BtSlider />
        <Footer />
        </>
    );

}

export default Boots