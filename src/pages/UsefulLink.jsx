import React,{useEffect,useState} from 'react'
import axios from 'axios'
// import {Helmet} from "react-helmet"

import '../css/useful-links.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';

function UsefulLink() {
    
    const [usefulLink, setusefulLink] = useState({});

    const usefullinkApi = async () => {
        const usefullinkApiRes = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/Usefullink/Usefullinkrest');
        setusefulLink(usefullinkApiRes);
        if(usefullinkApiRes.status==200){localStorage.setItem('baseUrl', usefullinkApiRes.data.response.baseUrl);}
      };

    useEffect(() => {
        usefullinkApi();
        window.scrollTo(0, 0);
    }, []);

    // if(usefulLink.status==200){console.log(usefulLink.data.response);}
     

    return (
        <>
        {/* {(pageData.status==200) ?
            (
            <Helmet>
                <title>{pageData.data.response.page.metatitle}</title>
                <meta name="description" content={pageData.data.response.page.metadescription} />
            <script type="application/ld+json">{pageData.data.response.page.json_ld}</script>
            </Helmet>
            ):('')} */}
        <Header />
        <SideMenu />
        <div className="useful">
        <section className="py-5">
            <h1 className="font-weight-bolder text-center text-uppercase font-family-san-serif font-size-3pt5rem px-3">Useful Links</h1>
        </section>
        { 
            (usefulLink.status==200)?(
                    <section className="py-3 case-study-left-padding pull-left">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 pull-left">
                            <h3 className="font-family-san-serif font-weight-bolder mb-5 text-uppercase">{usefulLink.data.response.usefullink.headline}</h3>
                            {usefulLink.data.response.usefullink.description.map((value,key)=>{return(
                                <div key={key} className="pb-5">
                                <h4 className="mb-4">{value.title}</h4>
                            <p>{value.description}</p>
                            <a href={value.link}>{value.linkTitle}</a>
                            </div>
                            )})}
                            {/* <div className="pb-5">
                                <h4 className="mb-4">Ofgem</h4>
                                <p>Ofgem is the Office of Gas and Electricity Markets, a government department and independent authority whose principal objective is to protect the interests of existing and future electricity and gas consumers.</p>
                                <a href="#">Visit website</a>
                            </div>

                            <div className="pb-5">
                                <h4 className="mb-4">UK Power</h4>
                                <p>UK Power is an Ofgem-accredited energy comparison site, comparing gas and electricity suppliers to help people switch to the best possible energy deal.</p>
                                <a href="#">Visit website</a>
                            </div>

                            <div className="pb-5">
                                <h4 className="mb-4">Energy Saving Trust</h4>
                                <p>Energy Saving Trust offers impartial advice to communities and households on how to reduce carbon emissions, use water more sustainably, and save money on energy bills.</p>
                                <a href="#">Visit website</a>
                            </div>

                            <div className="pb-5">
                                <h4 className="mb-4">Carbon Trust</h4>
                                <p>The Carbon Trust is an international organisation helping businesses, governments and the public sector to achieve a sustainable, low carbon economy through carbon reduction and energy saving.</p>
                                <a href="#">Visit website</a>
                            </div>

                            <div className="pb-5">
                                <h4 className="mb-4">Department of Energy and Climate Change</h4>
                                <p>The Department of Energy & Climate Change (DECC) works to make sure the UK has secure, clean, and affordable energy supplies, and supports and promotes international action to lessen the impact of climate change.</p>
                                <a href="#">Visit website</a>
                            </div>

                            <div className="pb-5">
                                <h4 className="mb-4">Scottish Environment Protection Agency</h4>
                                <p>The Scottish Environment Protection Agency (SEPA) is Scotland’s environmental regulator, aiming to protect and improve the environment, and sustainably manage our natural resources.</p>
                                <a href="#">Visit website</a>
                            </div>

                            <div className="pb-5">
                                <h4 className="mb-4">Government Environment Agency</h4>
                                <p>The Government’s Environment Agency works to develop more eco-friendly places for people and wildlife to live, and supports the growth of sustainability.</p>
                                <a href="#">Visit website</a>
                            </div>

                            <div className="pb-5">
                                <h4 className="mb-4">Friends of the Earth</h4>
                                <p>Friends of the Earth is an organisation dedicated to the protection and improvement of the environment, placing emphasis on establishing a green economy the world over.</p>
                                <a href="#">Visit website</a>
                            </div>

                            <div className="pb-5">
                                <h4 className="mb-4">Centre for Alternative Technology</h4>
                                <p>CAT is an education and visitor centre demonstrating practical solutions for sustainability, covering all aspects of green living, including environmental building, renewable energy, and energy efficiency.</p>
                                <a href="#">Visit website</a>
                            </div>

                            <div className="pb-5">
                                <h4 className="mb-4">Centre for Sustainable Energy</h4>
                                <p>The Centre for Sustainable Energy helps people and organisations from the public and private sectors meet the challenges of rising energy costs and climate change.</p>
                                <a href="#">Visit website</a>
                            </div> */}
                        
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 pull-left movingImg">
                            <img src={localStorage.getItem('baseUrl')+usefulLink.data.response.usefullink.image.image} alt={usefulLink.data.response.usefullink.image.alt} className="w-100" />
                                <div className="d-flex justify-content-center py-4">
                                    <div className="buttonRect">
                                        <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                        style={{enableBackground:"new 0 0 140 60"}}>
                                            <defs>
                                                <linearGradient id="id-light-useful-links" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                                    <stop offset="0" stopColor="rgba(69, 114, 211, 1)" stopOpacity="1"></stop>
                                                    <stop offset="10%" stopColor="rgba(69, 114, 211, 1)" stopOpacity="0"></stop>
                                                    <stop offset="90%" stopColor="rgba(69, 114, 211, 1)" stopOpacity="0"></stop>
                                                    <stop offset="100%" stopColor="rgba(69, 114, 211, 1)" stopOpacity="1"></stop>
                                                </linearGradient>
                                                <filter id="id-glow-useful-links" x="-40%" y="-40%" width="180%" height="180%">
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                                    <feMerge>
                                                        <feMergeNode in="coloredBlur"></feMergeNode>
                                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                                    </feMerge>
                                                </filter>
                                            </defs>
                                            <g filter="url(#id-glow-useful-links)">
                                                <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                                <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-useful-links)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                            </g>
                                        </svg>
            <a className="link_button" href={usefulLink.data.response.usefullink.button.link}>{usefulLink.data.response.usefullink.button.title}</a>
                                    </div>
                                </div>
                        </div>
                    </section>
            ):('')
        }
        </div>
        
        <Footer />
        </>
    );

}

export default UsefulLink