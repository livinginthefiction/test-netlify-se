import React,{useState} from 'react'

function DualFuel(prop) {
    // console.log(prop.data);

    const [dualQuote, setdualQuote] = useState('https://symbiogetquote.co.uk/?utility=DualFuelh&postcode=');

    function getPincode(params) {setdualQuote ('https://symbiogetquote.co.uk/?utility=DualFuelh&postcode='+params.target.value);}

    return(
    <section className="overflow-hidden py-5">
        <div className="highlight highlight--not-full-height queen-proof">
            <div className="container-fluid" id="box1">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-11 col-lg-6 col-lg-6 col-xl-5 offset-xl-1 mb-5 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0">
                        <div className="highlight__text highlight__text--small">
    <h3 className="highlight__text-title font-family-san-serif font-size-3pt5rem font-weight-bolder text-capitalize">{prop.data.dualSectionTitle}</h3>
                            <div className="highlight__info font-family-san-serif">
    <p>{prop.data.dualText}</p>
                                <div className="align-items-center d-flex">
                                    <input type="text" placeholder="Pin Code" onChange={getPincode} className="pincode-text" /> 
                                    <div className="buttonRect">
                                        <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        style={{enableBackground:"new 0 0 140 60"}}>
                                            <defs>
                                                <linearGradient id="id-light-dualfuel" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                                    <stop offset="0" stopColor="rgba(244, 78, 58, 1)" stopOpacity="1"></stop>
                                                    <stop offset="10%" stopColor="rgba(244, 78, 58, 1)" stopOpacity="0"></stop>
                                                    <stop offset="90%" stopColor="rgba(244, 78, 58, 1)" stopOpacity="0"></stop>
                                                    <stop offset="100%" stopColor="rgba(244, 78, 58, 1)" stopOpacity="1"></stop>
                                                </linearGradient>
                                                <filter id="id-glow-dualfuel" x="-40%" y="-40%" width="180%" height="180%">
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                                    <feMerge>
                                                        <feMergeNode in="coloredBlur"></feMergeNode>
                                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                                    </feMerge>
                                                </filter>
                                            </defs>
                                            <g filter="url(#id-glow-dualfuel)">
                                                <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                                <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-dualfuel)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                            </g>
                                        </svg>
                                        <a className="link_button" target="_target" href={dualQuote}>Get Quote</a>
                                    </div>
                                </div>
                                
                            </div> 
                            
                        </div>
                    </div>
                    <div className="col-11 col-lg-6 col-xl-5 order-first order-lg-0 order-xl-0">
                        <svg className="dual-fuel-svg mt-0 mt-lg-5 mt-xl-5" version="1.1" x="0px" y="0px" viewBox="0 0 438.1 200.8" style={{enableBackground:"new 0 0 438.1 200.8"}}>
                            <g>
                                <g id="Flame">
                                    <polygon points="99.8,30.9 66.9,35.2 39.6,116 82.6,107.5 55.3,169.1 112.9,87.2 67.7,93.7    "/>
                                    <polygon points="99.8,30.9 66.9,35.2 39.6,116 82.6,107.5 55.3,169.1 112.9,87.2 67.7,93.7    "/>
                                </g>
                                <g id="Plus">
                                    <line x1="199" y1="87.8" x2="199" y2="106.9"/>
                                    <line x1="189.7" y1="97.4" x2="208.5" y2="97.4"/>
                                    <line x1="199" y1="87.8" x2="199" y2="106.9"/>
                                    <line x1="189.7" y1="97.4" x2="208.5" y2="97.4"/>
                                </g>
                                <g id="Gas">
                                    <path d="M309.6,160.9c0,0-77-79.3,44.3-129.2c1-0.4,1.9,0.5,1.6,1.5c-2,6.2-6.8,21.4,3.7,39.1     c15.8,26.7,37.9,79.6-16.5,96.1c-1.3,0.4-3.3-0.6-2.1-1.2c15-7.9,38.8-47.5-4.6-70c-1-0.5-2.1,0.4-1.8,1.4     c1.9,6.9,5.5,24.6-5.4,30.5c-13.6,7.3-10,21.3-1,28.6"/>
                                    <path d="M309.6,160.9c0,0-77-79.3,44.3-129.2c1-0.4,1.9,0.5,1.6,1.5c-2,6.2-6.8,21.4,3.7,39.1     c15.8,26.7,37.9,79.6-16.5,96.1c-1.3,0.4-3.3-0.6-2.1-1.2c15-7.9,38.8-47.5-4.6-70c-1-0.5-2.1,0.4-1.8,1.4     c1.9,6.9,5.5,24.6-5.4,30.5c-13.6,7.3-10,21.3-1,28.6"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    
                </div>
            </div>
        </div>
</section>

);
}

export default DualFuel