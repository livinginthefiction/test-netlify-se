import React from 'react'

function Abc(){
    return(
        <>
        <section className="px-1 px-lg-5 px-xl-5 py-5 pull-left w-100">
            <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3 mb-3">Winter is coming</h1>
        </section>

        <div className="col-12 col-xl-12 p-0">
            <canvas id="winterComing" className="canvasSize"></canvas>
        </div>
        <section className="px-1 px-lg-5 px-xl-5 pb-5">
            <div className="d-flex flex-column justify-content-center">
                <div className="align-items-center flex-basis-0 flex-column flex-grow-1 flex-shrink-0 justify-content-center p-2 p-sm-4 p-xl-5">
                    <div className="clearfix col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center text-dark">
                        <p>
                            Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="d-flex justify-content-center py-4">
                        <div className="buttonRect">
                            <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" style={{enableBackground: "new 0 0 140 60"}}>
                                <defs>
                                    <linearGradient id="id-light-gas-page" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                        <stop offset="0" stopColor="rgba(244, 78, 58, 1)" stopOpacity="1"></stop>
                                        <stop offset="10%" stopColor="rgba(244, 78, 58, 1)" stopOpacity="0"></stop>
                                        <stop offset="90%" stopColor="rgba(244, 78, 58, 1)" stopOpacity="0"></stop>
                                        <stop offset="100%" stopColor="rgba(244, 78, 58, 1)" stopOpacity="1"></stop>
                                    </linearGradient>
                                    <filter id="id-glow-gas-page" x="-40%" y="-40%" width="180%" height="180%">
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"></feMergeNode>
                                            <feMergeNode in="SourceGraphic"></feMergeNode>
                                        </feMerge>
                                    </filter>
                                </defs>
                                <g filter="url(#id-glow-gas-page)">
                                    <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(244, 78, 58, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"></path>
                                    <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-gas-page)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"></path>
                                </g>
                            </svg>
                            <a className="link_button" href="#">Get Quote</a>
                        </div>
                    </div>
                </div>   
            </div>
        </section>

        </>
    )
}

export default Abc