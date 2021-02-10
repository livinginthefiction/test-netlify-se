import React, { useState,useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../images/symbio-logo-2.png';

function Header() {
    const [scrollPosition, setQuotePosition] = useState('');
    const handleScroll = () => {
        if(window.pageYOffset <= 200) {setQuotePosition('none');}else{setQuotePosition('block');}
    };

    setTimeout(function () {
        closeCookie()
    }, 8000);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {window.removeEventListener('scroll', handleScroll);};
    }, []);

    function hamburgerClick() {
        let element = document.getElementById("slidingMenu");
        let bodyTag = document.getElementsByTagName("BODY")[0];
        let overlay = document.getElementById('overlayDiv');
        let hiddenSlider = document.getElementById('hiddenSlider');
        hiddenSlider.classList.add("w-100");
        element.classList.add("open");
        overlay.classList.add('d-block');
        setTimeout(function () {
            bodyTag.classList.add('open-menu');
        }, 50);
        let closeIcon = document.getElementById('closeIcon');
        closeIcon.classList.add("closeMenu");
    }

    const [cookieClose, setcookieClose] = useState({style:sessionStorage.getItem("cookieBanner")});
    function closeCookie(){
        sessionStorage.setItem("cookieBanner", "none");
        setcookieClose({style:'none'})
    }

    return (
        <>
            <header className="align-items-center d-flex px-4 py-3 pl-5 w-100">
                <div className="d-inline-flex flex-grow-1 flex-lg-grow-0 flex-xl-grow-0 justify-content-center justify-content-lg-start justify-content-xl-center logo">
                    <a href="/"><img src={logo} alt="Symbio Energy" title="Symbio Energy" /></a>
                </div>
                <div className="align-items-center d-flex flex-lg-grow-1 flex-xl-grow-1 justify-content-end navigation px-3 text-capitalize">
                    <div className="d-lg-flex d-none d-xl-flex px-2">
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" role="button" id="connectWithUs" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <span>CONNECT WITH US</span>
                                </a>
                                <span className="dropdown-menu" aria-labelledby="connectWithUs">
                                    <a className="dropdown-item" href="/residential">RESIDENTIAL ENERGY</a>
                                    <a className="dropdown-item" href="/business">BUSINESS ENERGY</a>
                                    {/* <a className="dropdown-item" href="/dual-fuel">Dual Fuel</a> */}
                                    {/* <a className="dropdown-item" href="/gas">Gas</a> */}
                                </span>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" role="button" id="whyUs" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <span>WHY US</span>
                                </a>
                                <span className="dropdown-menu" aria-labelledby="whyUs">
                                    <a className="dropdown-item" href="/about-symbio">ABOUT US</a>
                                    {/* <NavLink className="dropdown-item" to="/history">Our history</NavLink> */}
                                    <a className="dropdown-item" href="/why-symbio">WHY SYMBIO</a>
                                </span>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" role="button" id="support" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <span>SUPPORT</span>
                                </a>
                                <span className="dropdown-menu" aria-labelledby="support">
                                    <a className="dropdown-item" href="/faqs">FAQs</a>
                                    <a className="dropdown-item" href="/emergencies">EMERGENCIES</a>
                                    {/* <a className="dropdown-item" href="/guide">Guide</a> */}
                                    <a className="dropdown-item" href="/contact">CONTACT US</a>
                                    <a className="dropdown-item" href="/blog">BLOG</a>
                                </span>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" role="button" id="myAccount" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <span>MY ACCOUNT</span>
                                </a>
                                <span className="dropdown-menu" aria-labelledby="myAccount">
                                    <a className="dropdown-item"  href="https://symbiocustomersportal.co.uk/">CUSTOMER PORTAL</a>
                                    <a className="dropdown-item"  href="https://directdebit.symbioenergy.co.uk/">SETUP DIRECT DEBIT</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="buttonRect">
                        <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                        style={{enableBackground:"new 0 0 140 60"}} >
                            <defs>
                                <linearGradient id="id-light-1" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                    <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                    <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                    <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                    <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                </linearGradient>
                                <filter id="id-glow-1" x="-40%" y="-40%" width="180%" height="180%">
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"></feMergeNode>
                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                    </feMerge>
                                </filter>
                            </defs>
                            <g filter="url(#id-glow-1)">
                                <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-1)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                               
                            </g>
                        </svg>
                        <a className="link_button"  href="https://symbiogetquote.co.uk">Get Quote</a>
                    </div>

                </div>
                <div className="d-lg-none d-xl-none hamburger-box">
                    <span onClick={hamburgerClick} className="cursor-pointer">
                        <svg className="svg-32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g fillRule="evenodd">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path className="dot-fill"
                                    d="M12 17.333A1.333 1.333 0 1112 20a1.333 1.333 0 010-2.667zm6.667 0a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm-13.334 0a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zM12 10.667a1.333 1.333 0 110 2.666 1.333 1.333 0 010-2.666zm-6.667 0a1.333 1.333 0 110 2.666 1.333 1.333 0 010-2.666zm13.334 0a1.333 1.333 0 110 2.666 1.333 1.333 0 010-2.666zM12 4a1.333 1.333 0 110 2.667A1.333 1.333 0 0112 4zM5.333 4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm13.334 0a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667z">
                                </path>
                            </g>
                        </svg>

                    </span>
                </div>
            </header> 
            <div id="abc" className="cookieBanner px-1" style={{display:cookieClose.style, backgroundColor: '#000',color: 'white'}}><p className="text-center my-2">This site uses cookies for statistics and site optimization. By continuing to browse the site, you are agreeing to our use of cookies. <a href="/privacy-policy-cookies">Privacy Policy</a> <button onClick={closeCookie} type="button" className="mr-2 text-light" style={{backgroundColor:'#59BAB0 '}} aria-label="Close">OK</button></p></div>  
<div style={{width:'100%',zIndex:'4000',backgroundColor: '#3b4045',color: 'white',position:'fixed',bottom:'0',left:'0',display:scrollPosition}}><a href="https://symbiogetquote.co.uk/"  className="styled__StyledCtaLink-sc-1fh51j9-0 dWRkeg d-lg-none d-xl-none">Get a quote</a></div>
        </>
    )
}

export default Header
