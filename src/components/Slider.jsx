import React from 'react'
import {Helmet} from "react-helmet";

function Slider(props) {

    return (
        <>
            <Helmet>
                <script src="js/momentum-slider.js"></script>
                {(props.pageType==='business')?(<script src="js/slider-business.js"></script>) : (<script src="js/slider.js"></script>)}
                
            </Helmet>
            <section className="slider-container px-0 py-5 p-lg-5 p-xl-5 overflow-hidden">
                <div className="slider-inner-container">
                    <main className="sliders-container">
                        <ul className="pagination">
                            <li className="pagination__item"><a className="pagination__button" href="#home"></a></li>
                            <li className="pagination__item"><a className="pagination__button" href="#home"></a></li>
                            <li className="pagination__item"><a className="pagination__button" href="#home"></a></li>
                            <li className="pagination__item"><a className="pagination__button" href="#home"></a></li>
                        </ul>
                    </main>
                </div>
            </section>
            {/* <section className="d-none keywords">
            <h1 className="d-none">Lowest Cost Electricity Supplier UK, Energy Supplier UK</h1> 

            <h2 className="d-none">About Us</h2>
            <p className="d-none">Symbio Energy was introduced by individuals that believed in spending fair amounts for everyday necessities. At Symbio, what you see is what you get with no hidden costs.</p>
            
            <h2 className="d-none">GUIDES</h2>
            <p className="d-none">Want to know more about your energy and our services? Explore our guides to improve your accessibility on the services we provide.</p>

            <h3 className="d-none">COMMERCE</h3>
            <p className="d-none">Our primary objective is to save you money and only pay for the electricity you consume; we can save up to £600 compared to the Big 6 Energy companies in the UK.</p>
            
            <h3 className="d-none">EDUCATION</h3>
            <p className="d-none">Symbio Energy inspires others to support our mission for a cleaner and brighter future, not only for us, also for our future generations.</p>
            
            <h3 className="d-none">CHANGE</h3>
            <p className="d-none">Only if you allow Change to happen, adapt to it, life will prosper for not only you, but it will make a difference to others by setting an example for them. Our mission is to develop and grow together.</p>

            <h4 className="d-none">LET'S SCAN THROUGH THE TARIFFS TOGETHER.</h4>
            <p className="d-none">Compare before you commit! Explore tariffs from various energy providers before you seal the deal. We monitor the market to ensure that we're keeping things competitive, and if we're not one of the lowest-priced out there, we'll change our tariff so that we are.</p>

            <h4 className="d-none">LAUNCHING GAS SUPPLY SOON!</h4>
            <p className="d-none">Stick around to witness the lowest prices to heat and power your homes with the new venture of Gas Supply. Stay tuned to witness lighting deals with our dual fuel features. It's time to take control of your savings</p>

            <h4 className="d-none">DO MORE WITH SYMBIO APP</h4>
            <p className="d-none">Stay updated with all your energy-related information only with the Symbio Energy Mobile App. Download our customer-friendly mobile application and access all data at ease and on the go.</p>

            <h4 className="d-none">CUSTOMER SUPPORT</h4>
            <p className="d-none">Do you have a Query? Stay in touch with our dedicated customer support representatives to find a solution to all your energy-related queries. Contact us on 0333 050 9372 OR Email us at customerservices@symbioenergy.co.uk</p>

            <h5 className="d-none">uk s cheapest electricity, uk energy solutions reviews, the cheapest energy provider uk, lowest energy prices, low rate electricity times uk, green energy co uk, free energy co uk reviews, energy provider, energy helpline uk, energy helpline cashback, energy comparison websites uk, energy comparison app, electricity uk provider, cheapest green energy provider uk, cheapest energy supplier, cheapest energy prices uk, cheapest energy company, cheapest electricity uk, cheapest electricity supplier uk, cheapest electricity supplier, cheapest electricity rates in uk, cheapest electricity provider uk, cheapest electricity provider, cheaper energy uk, cheap electricity provider, cheap electricity deals uk, cheap dual fuel quotes, energy tariffs, energy helpline, energy prices, gas and electricity bill, energy deal, dual fuel tariff</h5>

            </section> */}

            
        </>
    )
}

export default Slider
