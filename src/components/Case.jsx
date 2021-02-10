import React from 'react'
import ReactHtmlParser from 'react-html-parser'
// import revolution from '../images/slider-img/symbio-revolution.jpg'

function Case(prop) {
    console.log(prop.data)
    return (
        <>
            <section className="py-5">
                <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3">Case Study</h1>
            </section> 
            <section className="py-3 case-study-left-padding pull-left">
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 pull-left">
    <h4 className="font-family-san-serif font-weight-bolder mb-3 text-capitalize text-dark">{prop.data.headline}</h4>
                {ReactHtmlParser(prop.data.description)}
                    {/* <div className="pb-4">
                        <h6 className="mb-3">The following case study is based on a household situated in the EN1 (Enfield) postcode area that currently:</h6>
                        <ul className="mb-2">
                            <li><p>Pays for their energy on receipt of a monthly bill</p></li>
                            <li><p>Sources their energy with:</p>
                                <p className="mb-0">- Gas: British Gas</p>
                                <p className="mb-0">- Electricity: e.On</p>
                            </li>
                            <li><p>Has an annual energy usage of:</p>
                                <p className="mb-0">- Gas: 13446 kWh</p>
                                <p className="mb-0">- Electricity: 2911 kWh</p>
                            </li>
                            <li><p>Are on annual tariffs which cost approximately:</p>
                                <p className="mb-0">- Gas: £750</p>
                                <p className="mb-0">- Electricity: £500</p>
                            </li>
                        </ul>
                        <p className="font-weight-bold emerald-green">Current approximate annual bill = £1,250</p>
                    </div>

                    <div className="pb-4">
                        <h5 className="mb-3">Potential savings</h5>
                        <h6 className="mb-3">Below is an example of how much this household could save if they:</h6>
                        <ul className="mb-2">
                            <li><p>Switch their supplier online</p></li>
                            <li><p>Choose a single supplier of both gas and electricity (dual fuel), and</p></li>
                            <li><p>Pay their bills by Direct Debit.</p></li>
                        </ul>
                        <p className="mb-3">The tariff used in this example is the First Utility iSave Fixed v14 July 2015 tariff (fixed until 31st July 2015).</p>
                        <h6 className="mb-3">Gas:</h6>
                        <ul className="mb-2">
                            <li><p>Standing Charge: 365 days at 16.821p a day = £61.40</p></li>
                            <li><p>Gas usage: 13446 kWh at 3.709p = £498.71</p></li>
                        </ul>
                        <h6 className="mb-3">Electricity:</h6>
                        <ul className="mb-2">
                            <li><p>Standing charge: 365 days at 16.790p a day = £61.28</p></li>
                            <li><p>Electricity usage:  2911 kWh at 11.752p = £342.10</p></li>
                        </ul>
                        <p className="font-weight-bold emerald-green">New approximate annual bill = £963.49</p>
                        <p className="font-weight-bold emerald-green">This amounts to an annual saving of an estimated <span className="text-underline">£287</span>.</p>
                    </div>

                    <div className="pb-4">
                        <h5 className="mb-3">Switch and save today</h5>
                        <p className="mb-3">To see how you could potentially save hundreds of pounds on your own energy bills, enter your postcode into the form on the right to compare prices. 
                            All results comply with the <a href="#">Ofgem Confidence Code</a>.</p>
                        <p className="font-italic">*The above example is given for illustrative purposes only, and the numbers quoted are correct as at 12th January 2014.</p>
                    </div> */}
                
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 pull-left movingImg">
            <img src={localStorage.getItem('baseUrl')+prop.data.image.image} alt={prop.data.image.alt} className="w-100" />
            <div className="d-flex justify-content-center py-4">
                <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                    style={{enableBackground:"new 0 0 140 60"}} >
                        <defs>
                            <linearGradient id="id-light-case-study" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stop-color="rgba(69, 114, 211, 1)" stop-opacity="1"></stop>
                                <stop offset="10%" stop-color="rgba(69, 114, 211, 1)" stop-opacity="0"></stop>
                                <stop offset="90%" stop-color="rgba(69, 114, 211, 1)" stop-opacity="0"></stop>
                                <stop offset="100%" stop-color="rgba(69, 114, 211, 1)" stop-opacity="1"></stop>
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
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" stroke-width="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-case-study)" stroke-width="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            
                        </g>
                    </svg>
                <a className="link_button" href={prop.data.button.link}>{prop.data.button.text}</a>
                </div>
            </div>
                </div>
                
            </section>
        </>
    )
}

export default Case
