import React, {useEffect, useState} from 'react';
import '../css/style.css'
import '../css/menu.css'
import '../css/why_symbio.css'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import WhySymbio from '../components/WhySymbio';
import ScrollSection from '../components/ScrollSection';
import Conclusion from '../components/Conclusion'
import WhySymbioImageHover from '../components/WhySymbioImageHover'
import WhySymbioJourney from '../components/WhySymbioJourney'
import Footer from '../components/Footer';
import {Helmet} from "react-helmet";
import axios from 'axios';
import seoWhy from "../../src/json/Whyseo.json";

// import CircleHover from '../components/CircleHover';

function WhySymbioPage() {

  const [whySymbioData, setwhySymbioData] = useState({});
  const [piller, setpiller] = useState({});

  const getWhySymbioWithAxios = async () => {
    const response = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/whysymbio/whysymbioRest');
    setwhySymbioData(response);
    if(response.status==200){localStorage.setItem('baseUrl', response.data.response.baseUrl);}
  };

  const pillarApi = async () => {
    const seoPillerRes = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/whysymbio/pillarSeo');
    setpiller(seoPillerRes);
  };

  useEffect(() => {
    getWhySymbioWithAxios();
    pillarApi();
  }, []);

  return (
    <>
    <section className="d-none keywords">
            <h1 className="d-none">Symbio Energy Tariffs | Symbio Energy Company</h1> 
            <h5 className="d-none">power suppliers uk,symbio energy tariffs,symbio electricity, symbio,Symbio Energy Company,Symbio Energy, Social change, </h5>
            </section>
        {(piller.status==200) ?
        (
          <Helmet>
            <title>{seoWhy.metatitle}</title>
            <meta name="description" content={seoWhy.metadescription} />
            <script type="application/ld+json">{seoWhy.schema[0]}</script>
            {/* <title>Why Symbio | Offering Green Energy for a Sustainable Future</title>
            <meta name="description" content="Join the Revolution and Save Millions of Pounds on your Electricity while contributing to Educating and Changing the Environment." />
            <script type="application/ld+json">
            {
    `{"@context": "https://schema.org",
    "@type": "WebPage",
    "breadcrumb": "Books > Marketing > LONGTEXT ",
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
        "publisher": "O'LONGTEXT  Publishing",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4",
            "reviewCount": "12"
        }
    }}`
}
            </script> */}
            <meta property="og:url"                content="https://www.symbioenergy.co.uk/why-symbio" />
            <meta property="og:type"               content="article" />
            <meta property="og:title"              content="Why Symbio|Offering Green Energy for a Sustainable Future" />
            <meta property="og:description"        content="Join the Revolution and Save Millions of Pounds on your Electricity while contributing to Educating and Changing the Environment" />
            <meta property="og:image"              content="https://www.symbioenergy.co.uk/backend/assets/uploads/facebookogwhysymbio.png" />

            <script src="js/come.js"></script>
          </Helmet>
        ):('')}

     <Header />
     <SideMenu />
      <div className="why">
     {(piller.status==200) ?
      (
     <WhySymbio data={piller.data.response.pillars} status="false" />
      ):('')}

     {
       (whySymbioData.status==200) ?
       (<>
     
     <ScrollSection mission={whySymbioData.data.response.ourMission} commerce={whySymbioData.data.response.commerce} education={whySymbioData.data.response.education}
     globe={whySymbioData.data.response.globe} inequility={whySymbioData.data.response.inEquility} awareness={whySymbioData.data.response.awareness} 
     journeyOne={whySymbioData.data.response.ourJourney} />
     <WhySymbioImageHover />
     <WhySymbioJourney journeyTwo={whySymbioData.data.response.ourJourney2} />
     <Conclusion conclusion={whySymbioData.data.response.conclusion} />
     </>)
      :('')
      }
      </div>
      <Footer />
    </>
  );
}

export default WhySymbioPage;