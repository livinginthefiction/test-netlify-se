import React from 'react'
import {Helmet} from "react-helmet"

function BtSlider() {
    return ( 
        <>
            <Helmet>   
                <link rel="stylesheet" href="css/sliderbutton.css" type="text/css" />
            </Helmet>
            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <video className="d-none d-lg-block w-100" playsInline autoPlay="autoplay" muted loop>
                    <source src="https://www.symbioenergy.co.uk/backend/assets/video/slider1.mp4" type="video/mp4" /> 
                    </video>
                    <video className="w-100 d-block d-lg-none" playsInline autoPlay="autoplay" muted loop>
                    <source src="https://www.symbioenergy.co.uk/backend/assets/video/slider1mob.mp4" type="video/mp4" /> 
                    </video>
                        <div className="carousel-caption" style={{bottom:'0%'}}>
                            {/* <h1 className="font-family-san-serif font-size-3pt5rem font-weight-bolder text-center text-uppercase text-dark"><strong>Save Millions with Symbio Energy.</strong></h1> */}
                            {/* <p className="text-dark d-block d-lg-none" style={{fontSize: "large"}}><strong>Providing with the Lowest Prices for Electricity since March 2019. We use Green Resources to keep our World Clean and Healthy. Same Electricity at Low and Fair Prices compared to British Gas and the other Big 6. Let's Save money while making a Difference Together.</strong></p> */}
                            <center>
                             {/* <a className='gqbutton' href="https://symbiogetquote.co.uk/"><span>Get Quote</span><div class="liquid"></div></a> */}
                              <a className="buttonCanvas" href="https://symbiogetquote.co.uk/?property=&amp;postcode=">Get Quote</a>
                            </center>
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                    <picture>
                    <source media="(min-width: 1048px)"
                                            srcSet="https://admin.siowebcraft.com/backend/assets/uploads/Pound1_1.jpg" />
                        <source media="(min-width: 1024)"
                                            srcSet="https://admin.siowebcraft.com/backend/assets/uploads/Amp1.jpg" />
                        <source media="(min-width: 768px)"
                                            srcSet="https://admin.siowebcraft.com/backend/assets/uploads/Amp1.jpg" />
                        <source media="(min-width: 0px)"
                                            srcSet="https://admin.siowebcraft.com/backend/assets/uploads/Amp1.jpg" /> 
                        <img className="d-block w-100 action" src="https://admin.siowebcraft.com/backend/assets/uploads/Pound1_1.jpg" alt="Low & Fair Electricity Prices Since March 2019"/>
                        </picture>
                        <div className="carousel-caption" style={{bottom:'0%'}}>
                        <center>
                             {/* <a className='gqbutton' href="https://symbiogetquote.co.uk/"><span>Get Quote</span><div class="liquid"></div></a> */}
                              {/* <a class="buttonCanvas" href="https://symbiogetquote.co.uk/?property=&amp;postcode=">Get Quote</a>
                            </center>
                        </div>
                    </div> */}
                    {/* <div className="carousel-item">
                    <picture>
                        <source media="(min-width: 1048px)"
                                            srcSet="https://admin.siowebcraft.com/backend/assets/uploads/Pound1.jpg" />
                        <source media="(min-width: 1024px)"
                                            srcSet="https://admin.siowebcraft.com/backend/assets/uploads/Amp2.jpg" />
                        <source media="(min-width: 768px)"
                                            srcSet="https://admin.siowebcraft.com/backend/assets/uploads/Amp2.jpg" />
                        <source media="(min-width: 0px)"
                                            srcSet="https://admin.siowebcraft.com/backend/assets/uploads/Amp2.jpg" /> 
                        <img className="d-block w-100 action" src="https://admin.siowebcraft.com/backend/assets/uploads/Pound1.jpg" alt="Join Symbio & get Lowest price Electricity Tariffs in the UK"/>
                        </picture>
                        
                        <div className="carousel-caption" style={{bottom:'0%'}}> */}
                            {/* <h1 className="font-family-san-serif font-size-3pt5rem font-weight-bolder text-center text-uppercase text-dark main-title"><strong>Low Fair & Green Energy</strong></h1> */}
                            {/* <p className="text-dark sub-title"><strong>At no extra cost</strong></p> */}
                            {/* <center> */}
                             {/* <a className='gqbutton' href="https://symbiogetquote.co.uk/"><span>Get Quote</span><div class="liquid"></div></a> */}
                              {/* <a class="buttonCanvas" href="https://symbiogetquote.co.uk/?property=&amp;postcode=">Get Quote</a>
                            </center>
                        </div>
                    </div>   */}                 
                </div> 
                {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a> */}
                </div>  
                <section className="d-none keywords">
            <h1 className="d-none">Lowest Cost Electricity Supplier UK, Energy Supplier UK, low rate electricity times uk, green energy,gas and electricity,electricity prices,green electricity,energy company,electricity bill,utility supplier,electricity company,energy services,electricity tariffs,energy provider,power comparison,compare energy providers,green energy providers,switching energy suppliers,edf energy,cheap energy prices,cheapest energy,energy comparison site,bulb energy,ovo energy,big 6 energy,compare electricity bills,business energy suppliers uk,electric companies uk,energy company uk,best price business electricity suppliers,electric prices uk,business electricity rates uk,energy offer,business electricity comparison uk,energy switching,energy tariff price comparison,lowest standing charge electricity,symbio electricity,Symbio Energy,comparison of energy suppliers prices,symbio energy ofgem,symbio tariffs,</h1> 

            <h2 className="d-none">About Us</h2>
            <p className="d-none">The founders of Symbio Energy believed in the concept of Low & Fair Prices for Energy. With this idea, in March 2019, Symbio Energy started offering the Lowest Priced Tariffs to Households and Businesses across the UK. This concept revolved around allowing the Britons to only pay for the energy they consume.</p>
            
            <h2 className="d-none">GUIDES</h2>
            <p className="d-none">Are you having difficulties in understanding your Energy? We know that Energy isn't always easy to understand. That's why we've put together a set of question on some popular topics that will help you know everything about Domestic and Business Energy. Browse through our Symbio Energy Guides to help you find answers to queries like Reading your Meters, Bills, Saving Energy and many more. </p>

            <h3 className="d-none">COMMERCE</h3>
            <p className="d-none">Customers should only pay for the Electricity they consume nothing more nor less. With this concept, Symbio Energy started providing the UK Households & Businesses with the Lowest-Priced tariffs for Electricity. Since March 2019, we have helped our Customers save up to £600 on their Electricity Bills compared to the Big 6.</p>
            
            <h3 className="d-none">EDUCATION</h3>
            <p className="d-none">A Clean, Safe and Green Planet is our Fundamental Right! Symbio Energy has been continuously working to Educate the World against critical Social & Environmental issues such as Climate Change, Inequality & Creating Public Awareness through Education. We must work together to create a Safe & Healthy planet for our future generations.</p>
            
            <h3 className="d-none">CHANGE</h3>
            <p className="d-none">Education is the Foundation for Change. Life prospers when we Embrace Change & Adapt to it. Our mission is to Develop & Grow Together, but we cannot do this alone. The Change we aim to bring out through our Initiatives requires constant support from our Customers.</p>

            <h4 className="d-none">LET'S SCAN THROUGH THE TARIFFS TOGETHER.</h4>
            <p className="d-none">Has your Electricity Consumption increased lately? Now maybe a Good Time to make that Switch.Compare before you Commit! Symbio Energy has been the Lowest Priced Electricity Supplier since March 2019 and has helped the Britons save Millions of Pounds on their Electricity bills. We Guarantee the Lowest Energy Prices on all Comparison Sites and the Big 6. If we're not the Lowest out there, we will revise our tariffs.You too can join the Revolution and Save up to £600 on your Energy bills.Don't take our word for it, explore tariffs from various Energy Providers and Comparison Sites before you Seal the Deal.</p>

            <h4 className="d-none">LAUNCHING GAS SUPPLY SOON!</h4>
            <p className="d-none">Symbio Energy has successfully offered the Lowest Prices for Electricity to the UK and helped our Customer save up to £600 on their Electricity Bills. As a part of our Green Revolution, Symbio Energy will soon venture into the supply of 100% Carbon-Free Gas. Look out for exciting offers with our Dual Fuel Tariffs. It's time to Take Control of your Savings.</p>

            <h4 className="d-none">DO MORE WITH SYMBIO APP</h4>
            <p className="d-none">The Mobile Application gives our Customers an Easy and Hassle-Free Way of Managing their Energy on the Go. Stay on top of your Energy and its Consumption through the Symbio Energy Mobile App. Customers can Save their Precious time by downloading the User-Friendly Application via Apple IOS Store for iPhone Devices and Google Play Store for Android Devices. Click on the links below to Download the Symbio Energy Moblie App.</p>

            <h4 className="d-none">CUSTOMER SUPPORT</h4>
            <p className="d-none">Do you have any question with regards to your Energy? Time is Precious, so don't spend it waiting for your Call to be Answered. Our Team has drafted a set of questions to assist you with all your Electricity queries. Browse through the various categories available on our FAQ's and get a response immediately. Should you have an Emergency, you can Email us on customerservice@symbioenergy.co.uk or Call our Dedicated Customer Support Representative on 0333 050 9372. </p>

            <h5 className="d-none">electricity providers, best utility company uk, biggest energy companies uk, british electricity suppliers, british energy companies, compare energy companies, electricity comparison website, electricity suppliers england, energy company rankings uk, energy uk companies, industrial electricity cost uk, find cheapest electricity provider, list of electric suppliers, low rate electricity companies, energy supplier switch, electricity suppliers near me, commercial electricity supplier near me, top 10 electricity suppliers uk, electricity company in the UK, the cheapest energy company in uk, Power energy company, switch energy company, power energy company, no electricity supply in my area, the green energy company uk, best business energy company, Best Energy Supplier, Who are the top 6 energy suppliers?, Which energy supplier is best for 2020?, Who is the cheapest energy supplier?, renewable electricity tariffs, switch suppliers, renewable electricity,uks cheapest electricity,uk energy solutions reviews,the cheapest energy provider uk,lowest energy prices,low rate electricity times uk,green energy co uk,free energy co uk reviews,energy provider,energy helpline uk,energy helpline cashback,energy comparison websites uk,energy comparison app,electricity uk provider,cheapest green energy provider uk,cheapest energy supplier,cheapest energy prices uk,cheapest energy company,cheapest electricity uk,cheapest electricity supplier uk,cheapest electricity supplier,cheapest electricity rates in uk,cheapest electricity provider uk,cheapest electricity provider,cheaper energy uk,cheap electricity provider,cheap electricity deals uk,cheap dual fuel quotes,energy tariffs,energy helpline,energy prices,gas and electricity bill,energy deal,dual fuel tariff,can i switch electricity supplier,energy provider comparison uk,best current energy deals,what is the price cap on energy,who is the best energy supplier,change gas electricity supplier,in home switching,energy providers in my area,how much electricity does a switch use,cheapest energy supplier,compare energy deals uk,find out my energy provider,change utility provider,green energy phone number,best electricity and gas tariffs uk,compare electricity tariffs uk,little green energy company,electric company suppliers,go compare business gas and electricity,power and gas suppliers,which energy price comparison,dual energy price comparison,business water rates comparison,gas and electric tariffs comparison,electric supply comparison site,switch energy supplier northern ireland,electricity suppliers wales,best electricity rates uk,best electricty supplier,who is the electricity supplier in my area,compare water suppliers,best electricity tariff uk,when can you leave energy supplier,compare business utilities,who provides my electricity uk,london gas and electricity suppliers,compare the market energy helpline,choose my energy,best comparison site for gas and electricity,electricity quotes,which electricity supplier,switching to a green energy supplier,switch to renewable energy,green energy comparison,gas and electric comparison sites,energy switching sites,fixed or variable energy,electricity comparison sites,green energy suppliers,green energy providers uk,renewable energy providers near me,electric switch,cheapest energy company,how to switch gas and electric supplier,electric suppliers in my area,switch electricity provider,new energy suppliers,switch energy provider,change gas and electricity provider,cheap energy club switch in progress,new home switch energy supplier,switch gas providers,switch gas and electricity uk,switch gas and electric com,switch energy supplier uk,change electricity supplier,switch gas supplier,gas electric suppliers,gas and electric supply companies,switch electric company,compare utility bills,change gas and electric,who is the cheapest gas and electric supplier,utilita friendly credit,how soon can i switch energy suppliers,cheap gas and electric deals,no standing charge energy suppliers,choose energy supplier uk,which energy supplier comparison,energy price comparison websites uk,compare energy prices smart meters,find a cheaper energy supplier,best no standing charge energy tariffs,cheaper energy uk,green energy prices,green energy meter reading,green energy quotes,green supplier,green supplier energy,green energy switch,best green energy supplier,green supplier limited,green renewable,greenergy renewables,best green energy company uk,green energy tariffs,green energy providers,green network energy,green energy news uk,what is green electricity,energy bill payment,good energy moving home,energy efficient home ideas,energy saving meter,energy bills uk,how early can you switch energy suppliers,energy efficient products,how do we use energy,business energy comparison sites,energy uk companies,what is the cheapest energy provider,business energy comparison websites,dual fuel energy comparison sites,how much energy can be saved by turning off lights,house energy rating,what energy supplier am i with,which energy company,best energy supplier reviews,energy saving club,cheapest energy tariffs,budget energy tariffs,energy comparison websites uk,best energy suppliers ni,how to lower your energy bill,how to switch your energy provider,have energy prices risen,small energy companies,energy supply companies,shell energy switch,switch energy provider uk,cheap energy deals uk,how to save money on energy bill,which energy provider,compare energy charges,how do i find out who my energy supplier is,best energy comparison website,compare energy suppliers uk,energy company reviews,top 6 energy suppliers,the best energy provider,best energy companies,cheapest energy tariff uk,big six energy suppliers,lower your energy bill,find current energy supplier,list of energy companies,how to get the best energy deal,which switch energy provider,save money on your energy bills,changing energy supplier new home,best green energy supplier uk 2019,how to get energy,track my energy usage,moving house energy supplier,what happens when you change energy supplier,energy efficiency meter,cheapest energy supplier nottingham,how much solar energy does the uk produce,renewable energy,change energy supplier,energy club,why is my energy bill so high,compare energy suppliers prices,energy switch,energy company complaints,how to get cheaper energy bills,energy deals,cheapest gas rates uk,best energy deals gas and electricity,go compare energy prices,energy suppliers uk reviews,compare business energy tariffs,switch energy provider cashback,the cheapest electricity supplier,cheapest commercial electricity supplier uk,best energy deals for new customers,how do i find the cheapest energy provider,dual fuel energy suppliers,gas and electricity comparison which,who is the cheapest energy provider in uk,cheapest gas and electric company uk,the cheapest energy company in uk,the cheapest energy provider uk,domestic electricity suppliers uk,gas and electric tariffs,find out current electricity supplier,energy bill comparison uk,electricity prices uk,electricity gas prices uk,electric tariffs comparison,electricity price comparison sites uk,electricity deals uk,gas and electric quotes,compare energy tariffs,compare energy prices uk,compare electricity providers,switch gas and electric,ovoenergy,switch electricity supplier,best gas and electric prices,compare energy providers,compare the market electricity,best energy supplier uk,energy comparison sites,compare utilities,octopus energy,cheapest gas and electric,energy prices,compare energy deals,compare energy bills,compare gas and electricity prices,compare energy prices,compare electricity prices,shell energy,energy comparison,cheapest energy provider,best electricity provider,best electricity supplier,best electricity tariff uk,change utility provider,switch to renewable energy,compare the market energy helpline,compare energy deals uk,can i switch electricity supplier,green energy suppliers,best green energy supplier uk 2019,in home switching,london gas and electricity suppliers,cheapest energy supplier,change gas electricity supplier,who is the electricity supplier in my area,dual energy price comparison,energy comparison sites,electricity quotes,gas and electric tariffs comparison,how much electricity does a switch use,best electricity and gas tariffs uk,compare business utilities,energy switching sites,power and gas suppliers,business water rates comparison,choose energy supplier uk,which energy supplier comparison,compare electricity tariffs uk,compare energy deals,who is the best energy supplier,choose my energy,switch energy supplier northern ireland,electric company suppliers,cheapest energy tariff uk,what is the price cap on energy,so energy tariffs,which electricity supplier,energy provider comparison uk,compare gas tariffs uk,find out my energy provider,green energy phone number,best electricity rates uk,best electricty supplier,energy providers in my area,compare electricity tariffs,little green energy company,how do energy tariffs work,energy comparison,electric supply comparison site,go compare business gas and electricity,renewable energy providers near me,green energy comparison,compare gas and electric tariffs uk,switching to a green energy supplier,which energy price comparison,electricity comparison sites,compare water suppliers,electricity suppliers wales,best current energy deals,gas and electric comparison sites,compare energy tariffs uk,cheapest gas and electric company uk,green energy providers uk,who provides my electricity uk,compare tariffs,best comparison site for gas and electricity,comparison of electricity tariffs,when can you leave energy supplier,new home switch energy supplier,compare energy providers,fixed or variable energy,</h5>
            </section>
        </>
    )
}

export default BtSlider



