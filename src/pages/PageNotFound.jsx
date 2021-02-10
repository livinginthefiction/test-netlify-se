import React from 'react';
import { NavLink } from 'react-router-dom';


import '../css/style.css'
import '../css/menu.css'
import '../css/faq.css'
import '../css/pnf.css'
import '../css/footer.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';

function PageNotFound() {


    return (
        <>

            <Header />
            <SideMenu />
            <div className="container ">
                <section className="py-5">
                    <h1 className="font-weight-bolder text-center text-uppercase text-white font-family-san-serif font-size-3pt5rem px-3">Page Not Found</h1>
                </section> 
                <section className="py-3 row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pull-left" style={{float: 'inherit'}}>
                    <section className="page_404">
                        <div className="container">
                            <div className="row">	
                                <div className="col-sm-12 ">
                                    <div className="text-center">
                                        <div className="four_zero_four_bg"><h1 className="text-center ">404</h1></div>
                                        <div className="contant_box_404">
                                            <h3 className="h2">Look like you're lost</h3>
                                            <p>the page you are looking is not available!</p>

                                            <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                    style={{enableBackground:"new 0 0 140 60"}} >
                        <defs>
                            <linearGradient id="id-light-contactUS" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stopColor="rgba(69, 114, 211, 1)" stopOpacity="1"></stop>
                                <stop offset="10%" stopColor="rgba(69, 114, 211, 1)" stopOpacity="0"></stop>
                                <stop offset="90%" stopColor="rgba(69, 114, 211, 1)" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="rgba(69, 114, 211, 1)" stopOpacity="1"></stop>
                            </linearGradient>
                            <filter id="id-glow-contactUS" x="-40%" y="-40%" width="180%" height="180%">
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#id-glow-contactUS)">
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-contactUS)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                           
                        </g>
                    </svg>
                    <NavLink to="/" style={{background: 'transparent',borderColor: 'transparent'}} className="link_button" >Home</NavLink>
                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>      
                </section>
            </div>
            <Footer/>     
        </>
    )
}

export default PageNotFound
