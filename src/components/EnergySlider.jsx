import React,{useState} from 'react'

function EnergySlider(prop) {
    // console.log(prop.data);
    const [splitClass, setSplitClass] = useState('')
    function setSplitOverOne() {setSplitClass("quote-split--over1")}
    function setSplitOverTwo() {setSplitClass("quote-split--over2")}
    function unsetSplitOver() {setSplitClass("")}
    
    function business(){
        window.location='/business';
    }
    
    function residence(){
        window.location='/residential';
    }
    return (
        <section className="py-5">
            <div className={`quote-split ${splitClass}`}>
    <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3">{prop.data.sectionTitle}</h1>
                <h3 className="quote-split__options">
                    <span
                        className="quote-split__options__helmet quote-split__options__title quote-split__options__title--left">
                        {prop.data.primary.chooseTitleText}
                    </span> 
                    <span style={{fontSize:'70px'}}>OR</span> 
                    <span className="quote-split__options__game quote-split__options__title">
                    {prop.data.secondary.chooseTitleText}
                    </span></h3>
                <div className="d-flex justify-content-center justify-content-lg-start">
                    <div className="col-11 col-lg-12">
                        <div onMouseEnter={setSplitOverOne} onMouseLeave={unsetSplitOver} className="quote-split__home quote-split__slide">
                            <div className="quote-split__home__back quote-split__back">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 67 67">
                                    <g transform="translate(-1274 -654)">
                                        <g transform="translate(1274 654)" opacity=".298" fill="none">
                                            <circle cx="33.5" cy="33.5" r="33.5"></circle>
                                            <circle stroke="#FFF" cx="33.5" cy="33.5" r="33"></circle>
                                        </g>
                                        <circle opacity=".297" fill="#FFF" cx="1307.5" cy="687.5" r="24.5"></circle>
                                        <path fill="#FFF"
                                            d="M1311.5 680.2c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l5.5 5.5h-18.1c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h18.1l-5.5 5.5c-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0l6.8-6.8c.3-.3.3-.8 0-1.1l-6.8-6.9z">
                                        </path>
                                    </g>
                                </svg></div>
                            <div className="container-fluid quote-split__container">
                                <div className="quote-split__home__image quote-split__image">
                                <picture>
                                        <source media="(min-width: 992px)"
                                            srcSet={localStorage.getItem('baseUrl')+prop.data.primary.chooseImage}/>
                                        <source media="(min-width: 768px)"
                                            srcSet={localStorage.getItem('baseUrl')+prop.data.primary.chooseImageMobile} />
                                        <source media="(min-width: 0px)"
                                            srcSet={localStorage.getItem('baseUrl')+prop.data.primary.chooseImageMobile} /> 
                                            <img alt={prop.data.primary.chooseAltText} src={localStorage.getItem('baseUrl')+prop.data.primary.chooseImage}/>
                                        </picture>
                                  
                                </div>
                                <div className="quote-split__home__copy quote-split__copy text-dark">
                                    <h2>
                                        <strong>{prop.data.primary.chooseTitleText}</strong></h2>
                                    {/* <p className="d-md-block">
                                        Lorem Ipmsum
                                    </p>  */}
                                    <div className="buttonRect">
                                        <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                        style={{enableBackground:"new 0 0 140 60"}}>
                                            <defs>
                                                <linearGradient id="id-light-9" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                                    <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                                    <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                                    <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                                    <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                                </linearGradient>
                                                <filter id="id-glow-9" x="-40%" y="-40%" width="180%" height="180%">
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                                    <feMerge>
                                                        <feMergeNode in="coloredBlur"></feMergeNode>
                                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                                    </feMerge>
                                                </filter>
                                            </defs>
                                            <g filter="url(#id-glow-9)">
                                                <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                                <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-9)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                               
                                            </g>
                                        </svg>
                                        <a className="link_button" href={prop.data.primary.chooseTextLink}>Get Quote</a>
                                    </div>
                                </div>
                                <div className="quote-split-container-helper" onClick={residence}></div>
                            </div>
                        </div>
                        <div onMouseEnter={setSplitOverTwo} onMouseLeave={unsetSplitOver} className="quote-split__business quote-split__slide">
                            <div className="quote-split__business__back quote-split__back"><svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 67 67">
                                    <g transform="rotate(180 670.5 360.5)">
                                        <g transform="translate(1274 654)" opacity=".298" fill="none">
                                            <circle cx="33.5" cy="33.5" r="33.5"></circle>
                                            <circle stroke="#FFF" cx="33.5" cy="33.5" r="33"></circle>
                                        </g>
                                        <circle opacity=".297" fill="#FFF" cx="1307.5" cy="687.5" r="24.5"></circle>
                                        <path fill="#FFF"
                                            d="M1311.5 680.2c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l5.5 5.5h-18.1c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h18.1l-5.5 5.5c-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0l6.8-6.8c.3-.3.3-.8 0-1.1l-6.8-6.9z">
                                        </path>
                                    </g>
                                </svg></div>
                            <div className="container-fluid quote-split__container pr-0 pr-md-auto">
                                <div className="quote-split__business__image quote-split__image">
                                    <picture>
                                        <source media="(min-width: 992px)"
                                            srcSet={localStorage.getItem('baseUrl')+prop.data.secondary.chooseImage}/>
                                        <source media="(min-width: 768px)"
                                            srcSet={localStorage.getItem('baseUrl')+prop.data.secondary.chooseImageMobile} />
                                        <source media="(min-width: 0px)"
                                            srcSet={localStorage.getItem('baseUrl')+prop.data.secondary.chooseImageMobile} /> 
                                            <img alt={prop.data.secondary.chooseAltText} src={localStorage.getItem('baseUrl')+prop.data.secondary.chooseImage}/></picture>
                                   
                                </div>
                                <div className="quote-split-container-helper-right" onClick={business}></div>
                                <div className="quote-split__business__copy quote-split__copy text-dark">
                                    <h2><strong>{prop.data.secondary.chooseTitleText}</strong></h2>
                                    {/* <p className="d-md-block">
                                        Lorem Ipsum
                                        </p>  */}
                                        <div className="buttonRect">
                                            <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                        style={{enableBackground:"new 0 0 140 60"}}>
                                                <defs>
                                                    <linearGradient id="id-light-10" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                                        <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                                        <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                                        <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                                        <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                                    </linearGradient>
                                                    <filter id="id-glow-10" x="-40%" y="-40%" width="180%" height="180%">
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                                        <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                                        <feMerge>
                                                            <feMergeNode in="coloredBlur"></feMergeNode>
                                                            <feMergeNode in="SourceGraphic"></feMergeNode>
                                                        </feMerge>
                                                    </filter>
                                                </defs>
                                                <g filter="url(#id-glow-10)">
                                                    <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                                    <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-10)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                                    
                                                </g>
                                            </svg>
                                            <a className="link_button" href={prop.data.secondary.chooseTextLink}>Get Quote</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EnergySlider
