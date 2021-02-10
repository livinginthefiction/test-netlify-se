import React,{useEffect, useState} from 'react'
import {Helmet} from "react-helmet"
import axios from 'axios';
import seoAbout from "../../src/json/Aboutseo.json";

import '../css/style.css'
import '../css/menu.css'
import '../css/about-us.css'
import '../css/footer.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import AboutSymbio from '../components/AboutSymbio'
import AboutSymbioGas from '../components/AboutSymbioGas'
import WhySymbio from '../components/WhySymbio'
//import DualFuel from '../components/DualFuel'
import BusinessQuote from '../components/BusinessQuote'
import Promise from '../components/Promise';
import Footer from '../components/Footer';


function About() {

  const [aboutData, setaboutData] = useState({});
  const [aboutSeo, setaboutSeo] = useState({});

  const getAboutWithAxios = async () => {
    const response = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/aboutus/aboutusRest');
    setaboutData(response);
    if(response.status==200){localStorage.setItem('baseUrl', response.data.response.baseUrl);}
  };

  const getAboutSeo = async () => {
    const seoResponse = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/aboutus/seo');
    setaboutSeo(seoResponse);
  };

  useEffect(() => {
    getAboutWithAxios();
    getAboutSeo();
  }, []);

  // scroll redirect
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   if(position >= 1200 & sessionStorage.getItem("redirect")!=1) { 
  //     window.location.replace("/");
  //     sessionStorage.setItem("redirect", 1);
  //   }
  // };

  // useEffect(() => {
  //     window.addEventListener('scroll', handleScroll, { passive: true });
  //     return () => {window.removeEventListener('scroll', handleScroll);};
  // }, []);
    
    return (
        <> 
         <section className="d-none keywords">
            <h1 className="d-none">lowest electricity rates | compare energy prices</h1> 

            <h5 className="d-none">green electricity suppliers uk,lowest electricity rates,cheapest energy tariffs,energy tariffs,gas and electricity bill,energy deal,switching energy,energy bills,dual fuel tariff,compare energy prices,energy companies, </h5>
            </section>
        {/* {(aboutSeo.status==200) ?
        ( */}
          <Helmet>
            <title>{seoAbout.metatitle}</title>
            <meta name="description" content={seoAbout.metadescription} />
            <script type="application/ld+json">{seoAbout.schema[0]}</script>
            {/* <title>About Symbio Energy | UK's Lowest Electricity Provider</title>
            <meta name="description" content="Pay only for the electricity you consume. An Energy Supplier with a Green-conscience supplying 100% Green Energy at no extra costs." />
            <script type="application/ld+json">
            {
    `{"@context": "https://schema.org",
    "@type": "WebPage",
    "breadcrumb": "Books > Marketing > JSON",
    "mainEntity": {
        "@type": "Book",
        "author": "http://www.example.com/author.html",
        "bookFormat": "http://schema.org/EBook",
        "datePublished": "2015-05-01",
        "image": "coverImage.jpg",
        "inLanguage": "English",
        "isbn": "00000000",
        "name": "The Title of Book",
        "numberOfPages": "123433",
        "offers": {
            "@type": "Offer",
            "availability": "http://schema.org/InStock",
            "price": "9.99",
            "priceCurrency": "USD"
        },
        "publisher": "O'Json Publishing",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4",
            "reviewCount": "12"
        }
    }}`
}
            </script>  */}
            <meta property="og:url"                content="https://www.symbioenergy.co.uk/about-symbio" />
            <meta property="og:type"               content="article" />
            <meta property="og:title"              content="About Symbio Energy | UK's Lowest Electricity Provider" />
            <meta property="og:description"        content="Pay only for the electricity you consume. An Energy Supplier with a Green-conscience supplying 100% Green Energy at no extra costs." />
            <meta property="og:image"              content="https://www.symbioenergy.co.uk/backend/assets/uploads/facebookogaboutus.jpg" />

            <script src="js/about-us.js"></script> 
            <script src="js/pillar.js"></script> 
          </Helmet>
        {/* ):('')} */}
         <Header/>
         <SideMenu/>
         {/* <Suspense fallback={<div>Loading...</div>}> */}

         {
       (aboutData.status==200) ?
         (<>
         <div className="about">
         <AboutSymbio data={aboutData.data.response.mainaboutus} />
         <AboutSymbioGas data={aboutData.data.response.symbioaboutus} />
         <WhySymbio data={aboutData.data.response.pillars} status="true"/>
         {/* <DualFuel data={aboutData.data.response.duelPlan} /> */}
         <BusinessQuote quote={aboutData.data.response.searchPlan}  property='' />
         <Promise data={aboutData.data.response.stamp2}/>
         </div>
         </>
         ):('')}

         {/* </Suspense> */}
         <Footer/>   

         
        </>
    )
}

export default About
