import React,{useEffect} from 'react';

function CustomerSupport(prop) {
    // console.log(prop.data);

     //ParallaxBox
   useEffect(() => {
    var parallaxBox = document.getElementById ( 'box3' );
    // var c1left = document.getElementById ( 'l7' ).offsetLeft,
    // c1top = document.getElementById ( 'l7' ).offsetTop,
    // c2left = document.getElementById ( 'l8' ).offsetLeft,
    // c2top = document.getElementById ( 'l8' ).offsetTop;
    
    parallaxBox.onmousemove = function ( event ) {
        event = event || window.event;
        // var x = event.clientX - parallaxBox.offsetLeft,
        // y = event.clientY - parallaxBox.offsetTop;
    
        //mouseParallax ( 'l7', c1left, c1top, x, y, 15 );
        //mouseParallax ( 'l8', c2left, c2top, x, y, 15 );
    }
    

});

    // function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
    //     var obj = document.getElementById ( id );
    //     var parentObj = obj.parentNode,
    //     containerWidth = parseInt( parentObj.offsetWidth ),
    //     containerHeight = parseInt( parentObj.offsetHeight );
    //     obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
    //     obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
    // }

    return(
        <>
            {/* <Helmet>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js'></script>
                <script src="js/mobile.js"></script>
            </Helmet> */}
        <section>
            <div className="highlight highlight--not-full-height queen-proof act3">
                <div className="container-fluid" id="box3">
                    <div className="row justify-content-center justify-content-lg-start">
                        <div className="col-11 col-lg-6 col-lg-6 col-xl-5 offset-xl-1">
                            <div className="highlight__text highlight__text--small">
        <h3 className="highlight__text-title font-family-san-serif font-size-3pt5rem font-weight-bolder">{prop.data.suportSectionTitle}</h3>
                                <div className="highlight__info font-family-san-serif">
        <p>{prop.data.suportText}</p>
                                    <div className="buttonRect">
                                        <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        style={{enableBackground:"new 0 0 140 60"}}>
                                            <defs>
                                                <linearGradient id="id-light-14" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                                    <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                                    <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                                    <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                                    <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                                </linearGradient>
                                                <filter id="id-glow-14" x="-40%" y="-40%" width="180%" height="180%">
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                                    <feMerge>
                                                        <feMergeNode in="coloredBlur"></feMergeNode>
                                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                                    </feMerge>
                                                </filter>
                                            </defs>
                                            <g filter="url(#id-glow-14)">
                                                <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                                <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-14)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                            </g>
                                        </svg>
        <a className="link_button" href={prop.data.suportButtonLink}>{prop.data.suportButtonText}</a>
                                    </div>
                                    <div id="onoffDrop"
                                        className="align-items-center cursor-pointer d-inline-flex flex-column mx-4 on-off-drop p-2 position-relative">
                                        <div className="align-items-center d-flex">
                                            <span className="signal-name text-on">Online</span>
                                            <span className="signal-dot on"></span>
                                        </div>
                                        <div id="signalDrop" className="d-flex flex-column mt-5 p-2 position-absolute signal-drop">
                                            <h5 className="pb-2 text-center">Customer Support</h5>
                                            <div className="d-flex flex-column font-size-0pt8rem mt-2">
                                                <div className="d-flex justify-content-between pb-2">
                                                    <span>Monday-Friday</span>
                                                    <span>9am - 6pm </span>
                                                </div>
                                                <div className="d-flex justify-content-between pb-2">
                                                    <span>Saturday</span>
                                                    <span>9am - 3pm</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span>Sunday</span>
                                                    <span>Closed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-11 col-lg-6 col-xl-5 order-first order-lg-0 order-xl-0">
                            <div className="pic_small-wrap-left text-center">

                                <div id="l7" data-parallax-background=""
                                        style={{transform: "rotateY(-1.7133deg) rotateX(2.6061deg) translateX(2.8555px) translateY(4.3435px) translateZ(-30px)"}}>
                                        <div className="pic_big-background"></div>
                                </div>
                                <img id="l8" src={localStorage.getItem('baseUrl')+prop.data.suportLink} alt={prop.data.suportAltText} className="pic_big" />
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
</section>
</>
    );
}

export default CustomerSupport