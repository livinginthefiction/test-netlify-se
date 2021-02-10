import React,{useEffect, useState} from 'react'
import {Helmet} from "react-helmet"
import axios from 'axios';
// import $ from 'jquery'
import seoRes from "../../src/json/Resseo.json";

import '../css/style.css'
import '../css/menu.css'
import '../css/footer.css'
import '../css/residential.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu'
import ResidenceSlider from '../components/ResidenceSlider'
import ResidenceTabs from '../components/ResidenceTabs'
import BusinessFeatures from '../components/BusinessFeatures';
import BusinessBreak from '../components/BusinessBreak'
import BusinessQuote from '../components/BusinessQuote';
// import Promise from '../components/Promise';
import CustomerSupport from '../components/CustomerSupport';
import Footer from '../components/Footer';

//import ResidenceFeatures from '../components/ResidenceFeatures'
// const Promise = React.lazy(() => import ('../components/Promise'));
// const BusinessQuote = React.lazy(() => import ('../components/BusinessQuote'));
// const BusinessFeatures = React.lazy(() => import ('../components/BusinessFeatures'));
//const ResidenceTabs = React.lazy(() => import ('../components/ResidenceTabs'));

function Residential() {
  setTimeout(function () {
    if(window.location.hash != '#r') {
        window.location.hash = 'r';
        window.location.reload(1);
    }
}, 1000);  
  const [residenceData, setresidenceData] = useState({});
  const [residenceSeo, setresidenceSeo] = useState({});

  const getResidenceWithAxios = async () => {
    const response = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/residential/residentialrest');
    setresidenceData(response);
    if(response.status===200){localStorage.setItem('baseUrl', response.data.response.baseUrl);}
  };

  const getResidenceSeo = async () => {
    const seoResponse = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/residential/sliderSeo');
    setresidenceSeo(seoResponse);
  };

  useEffect(() => {
    getResidenceWithAxios();
    getResidenceSeo();
  }, []);
    
    return ( 
        <>
            <section className="d-none keywords">
            <h1 className="d-none">Energy providers for home | domestic electricity suppliers uk | home energy supplier, Electricity supply homes, Energy supply for apartment, energy supply for home, energy supply for residential, Electricity supply for Home, energy supply for domestic home, energy supply for new home, setting up electricity in a new home, What is the cheapest way to power your home?, lowest energy cost for home, lowest Electricity cost for residential home, switch electricity supplier for home, list of energy suppliers, Energy providers for home, energy providers for residential homes, energy supply for apartments, new electricity supply, electricity supply - crossword, electricity supply map, new electricity supply connection cost, who is my electricity supplier, who is my electric provider, local electricity board, Affordable Electricity Suppliers,electricity suppliers uk,energy company uk,domestic electricity suppliers uk,home energy supplier,cheapest domestic electricity Uk,energy efficient homes,energy saving home improvements,</h1> 
            <h5 className="d-none">Electricity supply homes, Energy supply for apartment, energy supply for home, energy supply for residential, Electricity supply for Home, energy supply for domestic home, energy supply for new home, setting up electricity in a new home, What is the cheapest way to power your home?, lowest energy cost for home, lowest Electricity cost for residential home, switch electricity supplier for home, list of energy suppliers, Energy providers for home, energy providers for residential homes, energy supply for apartments, new electricity supply, electricity supply - crossword, electricity supply map, new electricity supply connection cost, who is my electricity supplier, who is my electric provider, local electricity board, Affordable Electricity Suppliers,electricity suppliers uk,energy company uk,domestic electricity suppliers uk,home energy supplier,cheapest domestic electricity Uk,energy efficient homes,energy saving home improvements,home energy comparison,who supplies energy to my home,who supplies energy to my home,how is energy supplied to our homes,how many homes can one megawatt of wind energy supply,do coop energy supply warm home discount scheme,do i supply energy do warm home discount,domestic energy supply,energy comparison uk,power usage home electricity monitor,moving home electricity,how to make your home energy independent,best domestic energy suppliers,domestic energy prices forecast,best energy comparison website,find current energy supplier,compare energy suppliers uk,changing energy supplier new home,lower your energy bill,house energy rating,home energy rating service,the best energy provider,increase home energy efficiency,what is the cheapest energy provider,which switch energy provider,big six energy suppliers,home energy comparison sites,how to switch your energy provider,home energy saving tips,energy supply companies,shell energy switch,have energy prices risen,dual fuel energy comparison sites,list of energy companies,which energy provider,best energy companies,energy comparison websites uk,how to save money on energy bill,home energy efficiency survey,which energy company,best green energy supplier uk 2019,how to get the best energy deal,efficient home energy,how much energy can be saved by turning off lights,home energy,how do i find out who my energy supplier is,top 6 energy suppliers,budget energy tariffs,cheapest energy tariffs,small energy companies,compare energy charges,energy company reviews,energy saving club,home energy rating,switch energy provider uk,cheapest energy tariff uk,home energy plan,what energy supplier am i with,how to make your home energy self sufficient,home energy comparison,home energy efficiency companies,save money on your energy bills,how to lower your energy bill,business energy comparison websites,moving house energy supplier,best energy suppliers ni,best energy supplier reviews,cheap energy deals uk,</h5>
            </section>
        {/* {(residenceSeo.status===200) ?
        ( */}
          <Helmet>
            <title>{seoRes.metatitle}</title>
            <meta name="description" content={seoRes.metadescription} />
            <script type="application/ld+json">{seoRes.schema[0]}</script>
            {/* <title>Symbio Energy | Green Residential Energy at Low Prices</title>
            <meta name="description" content="Offering Low and Fair Prices for Green Energy. Switch Today & Save up to £600 on Domestic Electricity while being Environmentally Conscience." />
            <script type="application/ld+json">
              
{
  `{"@context": "https://schema.org/",
  "@type": "Product",
  "image": "https://symbioenergy.co.uk/backend/assets/uploads/Residential-slider-1.jpg",
  "name": "Symbio Energy",
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.6"
    },
    "name": "Home Energy Supply",
    "author": {
      "@type": "Person",
      "name": "Jane Lamb"
    },
    "datePublished": "2020-12-12",
    "reviewBody": "Symbio are by far the cheapest on the market so having to give a monthly meter reading is a small job for the big saving.I would highly recommend them.They estimate your usage in advance based on what you quoted originally .Very happy customer ££££",
    "publisher": {
      "@type": "Organization",
      "name": "Energy Supplier"
    }
  }}`
}

            </script> */}
            <meta property="og:url"                content="https://www.symbioenergy.co.uk/residential" />
            <meta property="og:type"               content="article" />
            <meta property="og:title"              content="Symbio Energy | 100% Green Residential Energy at Low Prices" />
            <meta property="og:description"        content="Offering Low and Fair Prices for Green Energy. Switch Today & Save up to £600 on Domestic Electricity while being Environmentally Conscience." />
            <meta property="og:image"              content="https://www.symbioenergy.co.uk/backend/assets/uploads/facebookogresidential.jpg" />

            {/* <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> */}
            <script src="./js/modernizr.custom.js"></script>
            <script src="./js/draggabilly.pkgd.min.js"></script>
            <script src="./js/elastiStack.js"></script>
            <script src="./js/imagesloaded.pkgd.min.js"></script>
            <script src="./js/anime.min.js"></script>
            <script src="./js/main-residence.js"></script>
            <script src="js/residential.js"></script>
            <script src="js/break.js"></script>
          </Helmet>
        {/* ):('')} */}
         <Header/>
         <SideMenu/>
         <div className="residence">
         {(residenceSeo.status===200) ?
        (
        <ResidenceSlider data={residenceSeo.data.response.slider.sliderData} />
         ):('')}
         {
       (residenceData.status===200) ?
         (<>
         <ResidenceTabs tabs={residenceData.data.response.plan} />
         <BusinessBreak break={residenceData.data.response.break} />
         <BusinessFeatures features={residenceData.data.response.stamp} />
         <BusinessQuote quote={residenceData.data.response.searchPlan} property='home' />
         <CustomerSupport data={residenceData.data.response.support} />
         {/* <Promise data={residenceData.data.response.stamp2} /> */}
        </>
         ):('')}
          </div>
         <Footer/>   
         </>
    )
}

export default Residential
