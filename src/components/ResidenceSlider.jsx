import React from 'react'
import {Helmet} from "react-helmet"

function ResidenceSlider(props){
    console.log(props);
    return(
        <>
       		<section className="py-5 px-3 padding-left-responsive px-lg-5 pl-xl-5 overflow-hidden">
   			 <ul id="elasticstack" className="elasticstack">
            {props.data.map((value,key)=>{
                return(
            <li key={key}>
            <img src={localStorage.getItem('baseUrl')+value.sliderLink} alt={value.sliderAltText}/>
            <div className="slider-cap mt-3 align-items-center d-flex justify-content-between">
                <h5>{value.sliderTitleText}</h5>
                <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" >
                        <defs>
                            <linearGradient id="id-light-slide-1" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                            </linearGradient>
                            <filter id="id-glow-slide-1" x="-40%" y="-40%" width="180%" height="180%">
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#id-glow-slide-1)">
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-slide-1)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                        </g>
                    </svg>
                    <a className="link_button slider-btn" href={value.sliderButtonLink}>{value.sliderButtonText}</a>
                </div>
            </div>
        </li>
            )})}
        {/* <li>
            <img src="./assets/img/2.jpg" alt="02"/>
            <div className="slider-cap mt-3 align-items-center d-flex justify-content-between">
                <h5>Tuqburni</h5>
                <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" >
                        <defs>
                            <linearGradient id="id-light-slide-2" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                            </linearGradient>
                            <filter id="id-glow-slide-2" x="-40%" y="-40%" width="180%" height="180%">
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#id-glow-slide-2)">
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-slide-2)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                        </g>
                    </svg>
                    <a className="link_button slider-btn" href="#">Get Quote</a>
                </div>
            </div>
        </li>
        <li>
            <img src="./assets/img/3.jpg" alt="03"/>
            <div className="slider-cap mt-3 align-items-center d-flex justify-content-between">
                <h5>Retrouvailles</h5>
                <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" >
                        <defs>
                            <linearGradient id="id-light-slide-3" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                            </linearGradient>
                            <filter id="id-glow-slide-3" x="-40%" y="-40%" width="180%" height="180%">
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#id-glow-slide-3)">
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-slide-3)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                        </g>
                    </svg>
                    <a className="link_button slider-btn" href="#">Get Quote</a>
                </div>
            </div>
        </li>
        <li>
            <img src="./assets/img/4.jpg" alt="04"/>
            
            <div className="slider-cap mt-3 align-items-center d-flex justify-content-between">
                <h5>Onsra</h5>
                <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" >
                        <defs>
                            <linearGradient id="id-light-slide-4" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                            </linearGradient>
                            <filter id="id-glow-slide-4" x="-40%" y="-40%" width="180%" height="180%">
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#id-glow-slide-4)">
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-slide-4)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                        </g>
                    </svg>
                    <a className="link_button slider-btn" href="#">Get Quote</a>
                </div>
            </div>
        </li>
        <li>
            <img src="./assets/img/5.jpg" alt="05"/>
            
            <div className="slider-cap mt-3 align-items-center d-flex justify-content-between">
                <h5>Mamihlapinatapai</h5>
                <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" 
                       >
                        <defs>
                            <linearGradient id="id-light-slide-5" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                            </linearGradient>
                            <filter id="id-glow-slide-5" x="-40%" y="-40%" width="180%" height="180%">
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#id-glow-slide-5)">
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-slide-5)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                        </g>
                    </svg>
                    <a className="link_button slider-btn" href="#">Get Quote</a>
                </div>
            </div>
        </li>
        <li>
            <img src="./assets/img/6.jpg" alt="06"/>
            
            <div className="slider-cap mt-3 align-items-center d-flex justify-content-between">
                <h5>Koi No Yokan</h5>
                <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" >
                        <defs>
                            <linearGradient id="id-light-slide-6" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                            </linearGradient>
                            <filter id="id-glow-slide-6" x="-40%" y="-40%" width="180%" height="180%">
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#id-glow-slide-6)">
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-slide-6)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                        </g>
                    </svg>
                    <a className="link_button slider-btn" href="#">Get Quote</a>
                </div>
            </div>
        </li> */}
    </ul>
</section>
            <Helmet>
            
          </Helmet>
        </>
    )
}

export default ResidenceSlider