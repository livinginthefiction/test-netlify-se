import React from 'react'
import {Helmet} from "react-helmet"

function BusinessSlider() { 
    return (
        <>
            <Helmet>   

            <link rel="stylesheet" href="css/sliderbutton.css" type="text/css" />
            
          </Helmet>
            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <picture>
                    <source media="(min-width: 1048px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/Business-slide-1.jpg" />
                        <source media="(min-width: 1024)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss1.jpg" />
                        <source media="(min-width: 768px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss1.jpg" />
                        <source media="(min-width: 0px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss1.jpg" /> 
                        <img className="d-block w-100 action" src="https://www.symbioenergy.co.uk/backend/assets/uploads/Business-slide-1.jpg" alt="UK’s Lowest Price Business Electricity Provider"/>
                        </picture>
                        <div className="carousel-caption" style={{bottom:'0%'}}>
                        <center>
                               <a className='gqbutton' href="https://symbiogetquote.co.uk/"><span>Get Quote</span><div class="liquid"></div></a>
                               {/* <a class="buttonCanvas" href="https://symbiogetquote.co.uk/?property=&amp;postcode=">Get Quote</a> */}
                            </center>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <source media="(min-width: 1048px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/Business-slide-2.jpg" />
                        <source media="(min-width: 1024)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss2.jpg" />
                        <source media="(min-width: 768px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss2.jpg" />
                        <source media="(min-width: 0px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss2.jpg" /> 
                        <img className="d-block w-100 action" src="https://www.symbioenergy.co.uk/backend/assets/uploads/Business-slide-2.jpg" alt="Save Million of Pounds for Business Electricity Join Symbio Energy"/>
                        </picture>
                        
                        <div className="carousel-caption" style={{bottom:'0%'}}>
                            {/* <h1 className="font-family-san-serif font-size-3pt5rem font-weight-bolder text-center text-uppercase text-dark main-title"><strong>Low Fair & Green Energy</strong></h1> */}
                            {/* <p className="text-dark sub-title"><strong>At no extra cost</strong></p> */}
                            <center>
                               <a className='gqbutton' href="https://symbiogetquote.co.uk/"><span>Get Quote</span><div class="liquid"></div></a>
                               {/* <a class="buttonCanvas" href="https://symbiogetquote.co.uk/?property=&amp;postcode=">Get Quote</a> */}
                            </center>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <source media="(min-width: 1048px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/Business-slide-3.jpg" />
                        <source media="(min-width: 1024)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss3.jpg" />
                        <source media="(min-width: 768px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss3.jpg" />
                        <source media="(min-width: 0px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss3.jpg" /> 
                         <img className="d-block w-100 action" src="https://www.symbioenergy.co.uk/backend/assets/uploads/Business-slide-3.jpg" alt="Lowest Business Energy Tariffs- Symbio Energy"/>
                        </picture>
                       
                        <div className="carousel-caption" style={{bottom:'0%'}}>
                            {/* <h1 className="font-family-san-serif font-size-3pt5rem font-weight-bolder text-center text-uppercase text-dark"><strong>RIP OFF ALERT!</strong></h1> */}
                            {/* <p className="text-dark" ><strong>Is your Electricity Company RIPPING YOU OFF?</strong></p> */}
                            <center>
                               <a className='gqbutton' href="https://symbiogetquote.co.uk/"><span>Get Quote</span><div class="liquid"></div></a>
                               {/* <a class="buttonCanvas" href="https://symbiogetquote.co.uk/?property=&amp;postcode=">Get Quote</a> */}
                            </center>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <source media="(min-width: 1048px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/Business-slide-4.jpg" />
                        <source media="(min-width: 1024)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss4.jpg" />
                        <source media="(min-width: 768px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss4.jpg" />
                        <source media="(min-width: 0px)"
                                            srcSet="https://www.symbioenergy.co.uk/backend/assets/uploads/sliderBuss4.jpg" /> 
                         <img className="d-block w-100 action" src="https://www.symbioenergy.co.uk/backend/assets/uploads/Business-slide-4.jpg" alt="Lowest Price Green Energy supplier in the UK- Symbio Energy"/>
                        </picture>
                        
                        <div className="carousel-caption" style={{bottom:'0%'}}>
                            {/* <h1 className="font-family-san-serif font-size-3pt5rem font-weight-bolder text-center text-uppercase text-dark"><strong>Save Millions with Symbio Energy.</strong></h1> */}
                            {/* <p className="text-dark" ><strong>Join the Revolution & Stop Overpaying for Electricity</strong></p> */}
                            <center>
                               <a className='gqbutton' href="https://symbiogetquote.co.uk/"><span>Get Quote</span><div class="liquid"></div></a>
                               {/* <a class="buttonCanvas" href="https://symbiogetquote.co.uk/?property=&amp;postcode=">Get Quote</a> */}
                            </center>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>  
        </>
    )
}

export default BusinessSlider



