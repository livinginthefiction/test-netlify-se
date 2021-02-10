import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';

function Comparison(prop) {
    // console.log(prop.data);
    const [visitClass, setVisitClass] = useState(''); 

    const handleScroll = () => {
        if(window.pageYOffset >= document.getElementById('comparisonSite').offsetTop) {setVisitClass('on-visit');}
        else{setVisitClass('');}
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {window.removeEventListener('scroll', handleScroll);};
    }, []);

    //ParallaxBox
    useEffect(() => {
        var parallaxBox = document.getElementById ( 'box' );
        var c1left = document.getElementById ( 'l1' ).offsetLeft,
        c1top = document.getElementById ( 'l1' ).offsetTop,
        c2left = document.getElementById ( 'l2' ).offsetLeft,
        c2top = document.getElementById ( 'l2' ).offsetTop;
        
        parallaxBox.onmousemove = function ( event ) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
            y = event.clientY - parallaxBox.offsetTop;
        
            //mouseParallax ( 'l1', c1left, c1top, x, y, 15 );
            //mouseParallax ( 'l2', c2left, c2top, x, y, 15 );
        }
        

    });
    
        function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
            var obj = document.getElementById ( id );
            var parentObj = obj.parentNode,
            containerWidth = parseInt( parentObj.offsetWidth ),
            containerHeight = parseInt( parentObj.offsetHeight );
            obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
            obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
        }
    return (
        <section id="comparisonSite" className="overflow-hidden pb-5">
            <div className="highlight highlight--not-full-height queen-proof act1">
                <div className="container-fluid" id="box">
                    <div className="row justify-content-center justify-content-lg-start">
                        <div className="col-11 col-lg-6 col-lg-6 col-xl-5 mb-5 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 offset-xl-1">
                            <div className="highlight__text highlight__text--small">
    <h3 className={`highlight__text-title font-family-san-serif font-size-3pt5rem font-weight-bolder span_title span_trans ${visitClass} `}>{prop.data.compSectionTitle}</h3>
                                <div className="highlight__info font-family-san-serif">
                                    <p className={`span_para span_trans ${visitClass} `}>
                                    {prop.data.compText}
                                    </p>
                                     <div className="buttonRect">
                                        <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                        style={{enableBackground:"new 0 0 140 60"}} >
                                            <defs>
                                                <linearGradient id="id-light-case-study" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                                    <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                        <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                        <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                        <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                                </linearGradient>
                                                <filter id="id-glow-case-study" x="-40%" y="-40%" width="180%" height="180%">
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                                    <feMerge>
                                                        <feMergeNode in="coloredBlur"></feMergeNode>
                                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                                    </feMerge>
                                                </filter>
                                            </defs>
                                            <g filter="url(#id-glow-case-study)">
                                                <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                                <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-case-study)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                               
                                            </g>
                                        </svg>
                                        <NavLink className="link_button" to={prop.data.compButtonLink}>{prop.data.compButtonText}</NavLink>
                                    </div>
                                    <div className="buttonRect">
                                        <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                        style={{enableBackground:"new 0 0 140 60"}} >
                                            <defs>
                                                <linearGradient id="id-light-11" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                                    <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                        <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                        <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                        <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                                </linearGradient>
                                                <filter id="id-glow-11" x="-40%" y="-40%" width="180%" height="180%">
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                                    <feMerge>
                                                        <feMergeNode in="coloredBlur"></feMergeNode>
                                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                                    </feMerge>
                                                </filter>
                                            </defs>
                                            <g filter="url(#id-glow-11)">
                                                <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                                <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-11)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                                
                                            </g>
                                        </svg>
                                        <NavLink className="link_button" to="/useful-link">Useful Links</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-11 col-lg-6 col-xl-5 order-first order-lg-0 order-xl-0">
                            <div className="pic_small-wrap-left text-center movingImg">
                                <div id="l1" data-parallax-background=""
                                        style={{transform: "rotateY(-1.7133deg) rotateX(2.6061deg) translateX(2.8555px) translateY(4.3435px) translateZ(-30px)"}}>
                                        <div className="pic_big-background"></div>
                                </div>
                                <img id="l2" src={localStorage.getItem('baseUrl')+prop.data.compLink} alt={prop.data.compAltText} className="pic_big"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comparison
