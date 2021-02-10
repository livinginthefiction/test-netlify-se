import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function Conclusion(prop) {
    return(
        <>
        <section className="py-5">
    <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3">{prop.conclusion.conclusionSectionTitle}</h1>
    <div className="grow-txt my-5">
        <h1>Grow <br/ >with <br />Symbio</h1>
    </div>
    <div className="align-items-center d-flex flex-column text text-center text-dark">
        {ReactHtmlParser(prop.conclusion.conclusionDesc)}
        <div className="buttonRect">
            <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" style={{enableBackground: 'new 0 0 140 60'}}>
                <defs>
                    <linearGradient id="id-light-grow" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                        <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                        <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                        <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                        <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                    </linearGradient>
                    <filter id="id-glow-grow" x="-40%" y="-40%" width="180%" height="180%">
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="coloredBlur"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#id-glow-grow)">
                    <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"></path>
                    <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-grow)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"></path>
                </g>
            </svg>
            <a className="link_button" href={prop.conclusion.conclusionButtonLink}>{prop.conclusion.conclusionButtonText}</a>
        </div>
        </div>
</section>
        </>
    )

}

export default Conclusion