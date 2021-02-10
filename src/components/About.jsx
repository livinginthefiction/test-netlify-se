import React from 'react'

export default function About(prop) {
    // function showPopup() {
    //     let popupDiv = document.getElementById("videoPopup");
    //     popupDiv.classList.add("video-on");
    // }

    return (
        <section className="pl-xl-5 py-5 mt-5">
            <div className="d-flex flex-column-reverse flex-xl-row text-dark">
                <div className="col-12 col-xl-3 p-5 px-xl-5 py-xl-0">
                {/* {prop.data.aboutData.map((value,key)=>{return( */}
                        <div key={'about0'} className="flex-grow-1 mb-5">
                        <h2 className="font-family-san-serif font-weight-bolder px-3 px-lg-0 px-xl-0 text-center text-lg-left text-capitalize emerald-green text-xl-left">
                            {prop.data.aboutData[0].aboutTitle}</h2>
                <p>{prop.data.aboutData[0].aboutText}</p>
                        <div className="buttonRect">
                            <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style={{enableBackground:"new 0 0 140 60"}} >
                                <defs>
                                    <linearGradient id="id-light-link-1" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                        <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                        <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                        <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                        <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                    </linearGradient>
                                    <filter id="id-glow-link-1" x="-40%" y="-40%" width="180%" height="180%">
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"></feMergeNode>
                                            <feMergeNode in="SourceGraphic"></feMergeNode>
                                        </feMerge>
                                    </filter>
                                </defs>
                                <g filter="url(#id-glow-link-1)">
                                    <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"></path>
                                    <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-link-1)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"></path>
                                  
                                </g>
                            </svg>
                <a className="link_button" href={prop.data.aboutData[0].aboutButtonLink}>{prop.data.aboutData[0].aboutButtonText}</a>
                        </div>
                    </div>    
                    {/* ) })}*/}
                    
                   
                </div>
                <div className="col-12 col-xl-6 p-0">
                   
                    <div id='videoBox' className="cursor-pointer video-box">
                        <h1 className="position-absolute video-title d-none">{prop.data.aboutSectionTitle}</h1>
                      
                        <video width="100%" loop={true} playsInline autoPlay="autoplay" controls muted>
                            <source src={prop.data.aboutYoutubeLink} type="video/mp4"/>
                                This browser doesn't support video tag.
                        </video> 
                    </div>
                </div>
                <div className="col-12 col-xl-3 p-5 px-xl-5 py-xl-0">
                {/* {prop.data.aboutData.map((value,key)=>{return( */}
                        <div key={'about1'} className="flex-grow-1 mb-5">
                        <h2 className="font-family-san-serif font-weight-bolder px-3 px-lg-0 px-xl-0 text-center text-lg-left text-capitalize emerald-green text-xl-left">
                            {prop.data.aboutData[1].aboutTitle}</h2>
                <p>{prop.data.aboutData[1].aboutText}</p>
                        <div className="buttonRect">
                            <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style={{enableBackground:"new 0 0 140 60"}} >
                                <defs>
                                    <linearGradient id="id-light-link-1" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                        <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                        <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                        <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                        <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                    </linearGradient>
                                    <filter id="id-glow-link-1" x="-40%" y="-40%" width="180%" height="180%">
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"></feMergeNode>
                                            <feMergeNode in="SourceGraphic"></feMergeNode>
                                        </feMerge>
                                    </filter>
                                </defs>
                                <g filter="url(#id-glow-link-1)">
                                    <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"></path>
                                    <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-link-1)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"></path>
                                  
                                </g>
                            </svg>
                <a className="link_button" href={prop.data.aboutData[1].aboutButtonLink}>{prop.data.aboutData[1].aboutButtonText}</a>
                        </div>
                    </div>    
                    {/* ) })}*/}
                    
                   
                </div>
            </div>

        </section>
    )
}
