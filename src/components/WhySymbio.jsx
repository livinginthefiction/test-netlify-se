import React,{useEffect,useState} from 'react'
import ReactHtmlParser from 'react-html-parser'

function WhySymbio(prop) {
    const [philosophy__circle__style, set__philosophy__circle__style] = useState({
        'willChange': 'transform',
        'transformStyle': 'preserve-3d'
    });

    const [philosophy__item, set__philosophy__item] = useState({
        'willChange': 'transform',
        'transformStyle': 'preserve-3d'
    });

function getRandomInt(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}


const handleScroll = () => {
var abc = getRandomInt(20, -20);

    set__philosophy__circle__style ((preData)=>{
    return{...preData,
    transform:'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ('+abc+'deg) skew(0deg, 0deg)'
    }
    });

    set__philosophy__item ((preData)=>{
    return{...preData,
    transform:'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ('+(-1*abc)+'deg) skew(0deg, 0deg)'
    }
    });

};

useEffect(() => {
window.addEventListener('scroll', handleScroll, { passive: true });

return () => {
window.removeEventListener('scroll', handleScroll);
};
}, []);
    return (
        <section id="whySection" className="container-box overflow-hidden">
            <h1 className="font-family-san-serif font-size-3pt5rem font-weight-bolder mb-4 text-center text-capitalize text-dark px-3">Why Choose Symbio?</h1>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="col-12 col-lg-8 col-md-12 col-sm-12 col-xl-8 font-size-1pt2rem m-auto text-center text-dark">
                    {ReactHtmlParser(prop.data.pillarSectionDesc)}
                </div>
            </div>
            <div className="threePillars-block">
                <div className="label">THE THREE PILLARS OF</div>
                <h3 className="reset-spacing">SYMBIO ENERGY</h3>
                <div className="threePillars-circle" style={philosophy__circle__style}>
                    <div className="threePillars-item item3">
                        <div className="threePillars-dot dot3"></div>
                        <div className="w-hidden-small d-none d-md-block d-lg-block d-lx-block" style={philosophy__item}>
                        <h4 className="abc">{prop.data.pillarData[0].pillarTitle}</h4>
                        {ReactHtmlParser(prop.data.pillarData[0].pillarText)}
                            <div className="buttonRect">
                                <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                style={{enableBackground:"new 0 0 140 60"}} >
                                    <defs>
                                        <linearGradient id="id-light-3" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                            <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                            <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                            <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                            <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                        </linearGradient>
                                        <filter id="id-glow-3" x="-40%" y="-40%" width="180%" height="180%">
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                            <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"></feMergeNode>
                                                <feMergeNode in="SourceGraphic"></feMergeNode>
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    <g filter="url(#id-glow-3)">
                                        <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                        <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-3)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                     
                                    </g>
                                </svg>
                                {prop.status === "true" ? 
                                <a className="link_button" href={prop.data.pillarData[0].pillarButtonLink}>Know More</a>
                                    : "" }
                            </div>
                        </div>
                    </div>
                    <div className="threePillars-item item2">
                        <div className="threePillars-dot dot-2"></div>
                        <div className="w-hidden-small d-none d-md-block d-lg-block d-lx-block" style={philosophy__item}>
                        <h4 className="abc">{prop.data.pillarData[1].pillarTitle}</h4>
                        {ReactHtmlParser(prop.data.pillarData[1].pillarText)}
                            <div className="buttonRect">
                                <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                style={{enableBackground:"new 0 0 140 60"}} >
                                    <defs>
                                        <linearGradient id="id-light-4" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                            <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                            <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                            <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                            <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                        </linearGradient>
                                        <filter id="id-glow-4" x="-40%" y="-40%" width="180%" height="180%">
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                            <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"></feMergeNode>
                                                <feMergeNode in="SourceGraphic"></feMergeNode>
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    <g filter="url(#id-glow-4)">
                                        <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                        <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-4)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                        
                                    </g>
                                </svg>
                                {prop.status === "true" ? 
                                <a className="link_button" href={prop.data.pillarData[1].pillarButtonLink}>Know More</a>
                                    : "" }
                            </div>
                        </div>
                    </div>
                    <div className="threePillars-item">
                        <div className="w-hidden-small d-none d-md-block d-lg-block d-lx-block" style={philosophy__item}>
                        <h4 className="abc">{prop.data.pillarData[2].pillarTitle}</h4>
                        {ReactHtmlParser(prop.data.pillarData[2].pillarText)}
                            <div className="buttonRect">
                                <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                style={{enableBackground:"new 0 0 140 60"}} >
                                    <defs>
                                        <linearGradient id="id-light-5" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                            <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                            <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                            <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                            <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                        </linearGradient>
                                        <filter id="id-glow-5" x="-40%" y="-40%" width="180%" height="180%">
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                            <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"></feMergeNode>
                                                <feMergeNode in="SourceGraphic"></feMergeNode>
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    <g filter="url(#id-glow-5)">
                                        <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                        <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-5)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                        
                                    </g>
                                </svg>
                                {prop.status === "true" ? 
                                <a className="link_button" href={prop.data.pillarData[2].pillarButtonLink}>Know More</a>
                                    : "" }
                            </div>
                        </div>
                        <div className="threePillars-dot"></div>
                    </div>
                </div>
            </div>
            <div className="px-4 margin-bottom-34 d-block d-md-none d-lg-none d-lx-none">
            <h4 className="abc">{prop.data.pillarData[2].pillarTitle}</h4>
            {ReactHtmlParser(prop.data.pillarData[2].pillarText)}
                <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                style={{enableBackground:"new 0 0 140 60"}} >
                        <defs>
                            <linearGradient id="id-light-6" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                            </linearGradient>
                            <filter id="id-glow-6" x="-40%" y="-40%" width="180%" height="180%">
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#id-glow-6)">
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-6)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            
                        </g>
                    </svg>
                    {prop.status === "true" ? 
                    <a className="link_button" href={prop.data.pillarData[2].pillarButtonLink}>Know More</a>
                        : "" }
                </div>
            </div>
            <div className="px-4 margin-bottom-34 d-block d-md-none d-lg-none d-lx-none">
            <h4 className="abc">{prop.data.pillarData[0].pillarTitle}</h4>
            {ReactHtmlParser(prop.data.pillarData[0].pillarText)}
                <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                style={{enableBackground:"new 0 0 140 60"}} >
                        <defs>
                            <linearGradient id="id-light-7" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                            </linearGradient>
                            <filter id="id-glow-7" x="-40%" y="-40%" width="180%" height="180%">
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#id-glow-7)">
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-7)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            
                        </g>
                    </svg>
                    {prop.status === "true" ? 
                    <a className="link_button" href={prop.data.pillarData[0].pillarButtonLink}>Know More</a>
                        : "" }
                </div>
            </div>
            <div className="px-4 d-block d-md-none d-lg-none d-lx-none">
            <h4 className="abc">{prop.data.pillarData[1].pillarTitle}</h4>
            {ReactHtmlParser(prop.data.pillarData[1].pillarText)}
                <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                style={{enableBackground:"new 0 0 140 60"}} >
                        <defs>
                            <linearGradient id="id-light-8" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                            </linearGradient>
                            <filter id="id-glow-8" x="-40%" y="-40%" width="180%" height="180%">
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#id-glow-8)">
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-8)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            
                        </g>
                    </svg>
                    {prop.status === "true" ? 
                    <a className="link_button" href={prop.data.pillarData[1].pillarButtonLink}>Know More</a>
                        : "" }
                </div>
            </div>
        </section>
    )
}

export default WhySymbio
