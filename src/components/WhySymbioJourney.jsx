import React from 'react';
import ReactHtmlParser from 'react-html-parser'

export default function WhySymbioJourney(prop) {
    return(
        <>
            <div className="site__content">
                <div className="container">
                    <section id="Section-OurJourney" className="grid grid--03-our-journey">
                        <h2>{prop.journeyTwo.ourJourneySectionTitle2}</h2>
                        {prop.journeyTwo.ourJourneyData2.map((value3,key3)=>{return(
                        <div key={key3} className="stat">
                            <header className="stat__header">
                                <div className="stat__bubble aos-init" data-aos="zoom-in"></div>
                                <h4 className="stat__heading">
                                    <span className="stat__stat"><span className="stat__number">{value3.ourJourneyIconText2}</span></span> </h4>
                            </header>
                            <div className="stat__body">
                                <div className="stat__content">
                                    {ReactHtmlParser(value3.ourJourneyDesc2)}
                                </div>
                            </div>
                        </div>
                       ) })}
                    </section>
                </div>
            </div>
        </>
    )
}