import React,{Suspense,useEffect, useState} from 'react'
import {Helmet} from "react-helmet"
import axios from 'axios';
import $ from 'jquery'
import seoBuss from "../../src/json/Bussseo.json";

import '../css/style.css'
import '../css/menu.css'
import '../css/business.css'
import '../css/footer.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
// import BusinessSlider from '../components/BusinessSlider';
import BusinessTabs from '../components/BusinessTabs';
import BusinessFeatures from '../components/BusinessFeatures';
import BusinessBreak from '../components/BusinessBreak'
import BusinessQuote from '../components/BusinessQuote';
// import Promise from '../components/Promise';
import CustomerSupport from '../components/CustomerSupport';
import Footer from '../components/Footer';
//import ThreeSlider from '../components/ThreeSlider';
// import Slider from '../components/Slider';
import BusinessSlider from '../components/newslider/BusinessSlider';

// const Promise = React.lazy(() => import ('../components/Promise'));
// const BusinessQuote = React.lazy(() => import ('../components/BusinessQuote'));
// const BusinessFeatures = React.lazy(() => import ('../components/BusinessFeatures'));
// const BusinessTabs = React.lazy(() => import ('../components/BusinessTabs'));
// const BusinessBreak = React.lazy(() => import ('../components/BusinessBreak'));

function Business() {
  setTimeout(function () {
    if(window.location.hash != '#r') {
        window.location.hash = 'r';
        window.location.reload(1);
    }
}, 1000);
  const [businessData, setbusinessData] = useState({});
  const [businessSeo, setbusinessSeo] = useState({});

  const getBusinessWithAxios = async () => {
    const response = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/business/businessrest');
    setbusinessData(response);
    if(response.status==200){localStorage.setItem('baseUrl', response.data.response.baseUrl);}
  };

  const getBusinessSeo = async () => {
    const seoResponse = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/business/sliderSeo');
    setbusinessSeo(seoResponse);
  };

  useEffect(() => {
    getBusinessWithAxios();
    getBusinessSeo();
  }, []);
    
    return (
        <> 
         <section className="d-none keywords">
            <h1 className="d-none">business electricity supplier uk | lowest business electricity prices | business energy companies uk</h1> 

            <h5 className="d-none">business electricity supplier uk, who is the cheapest energy provider in uk, which power company is cheapest, which is the cheapest energy supplier uk,what is the cheapest energy provider, the cheapest electricity supplier, switch cheapest uk, lowest cost electricity supplier, lowest business electricity prices,lowest business electricity, low energy quotes, how to get cheap electricity uk, Commercial electricity rates, cheapest energy supplier uk,cheapest energy provider in the uk, cheapest energy company uk, cheapest electricity rates, cheapest electric company uk, cheapest electric company, cheapest domestic electricitycheapest, cheapest business energy supplier uk, Commercial electricity rates,cheapest business electricity supplier uk, cheapest business electricity rates uk, cheapest business electricity rates,cheapest business electricity, cheap electricity suppliers, cheap electricity deals, cheap business electricity prices, change my electricity supplier,   business energy solutions contact number, change business energy supplier,business energy suppliers uk, business energy companies uk, business electricity tariffs, business electricity suppliers uk, business electricity prices uk, best electricity rates uk,best business electricity supplier uk, electricity bill, switching suppliers,best supply to business for electricity,business energy deals,Electricity supply for business,best business energy company,business electricity plans,commercial electricity rates,current business electricity rates,electric and gas business prices,business energy quotes,business energy deals,business utilities,electricity for business,commercial energy,energy service for business,energy supply for business,electrical supply commercial,cheapest commercial electricity rates,business electricity plans,best business electricity tariffs,business electricity prices,business electricity rates uk,fixed price business electricity plan,small business electricity pricescompare the market business electri,city,business electricity tariffs,best business electricity prices,large business electricity rates,best business electricity suppliersbusiness electricity comparison,best business electricity deals,compare business electricity priceschange my business electricity supplier,business electricity prices uk,british gas business electricity rates,business electricity,compare business electricity prices online,price of business electricity,find cheap business electricity,cheap business electricity suppliers,compare business electricity suppliers online,best business electricity rates,british gas business electricity,compare business electricity plans,business energy cost comparison,business energy tariffs,business energy price comparison websites,small business energy rates,business energy comparison sites,business energy switch,small business energy suppliers,business energy suppliers comparison,business energy monitor,new business energy,business energy quotes,business energy comparison,business energy prices,compare business energy prices,compare business energy tariffs,commercial electric,commercial electricity tariffs uk,green renewable,green network energy,commercial electricity rates,cheapest commercial electricity supplier uk,electricity bill commercial rate,green energy meter reading,green energy quotes,green energy tariffs,green energy switch,best green energy supplier,british gas commercial electricity prices,commercial electricity,cost of commercial electricity uk,electricity charges per unit for commercial,green supplier limited,commercial electricity supply prices,compare commercial electricity,best green energy company uk,green supplier energy,cheapest commercial energy prices,green energy news uk,greenergy renewables,commercial gas suppliers,green energy providers,green energy prices,green supplier,what is green electricity,united utilities commercial</h5>
            </section>
        {/* {(businessSeo.status==200) ?
        ( */}
          <Helmet>
            <title>{seoBuss.metatitle}</title>
            <meta name="description" content={seoBuss.metadescription} />
            <script type="application/ld+json">{seoBuss.schema[0]}</script> 
            {/* <title>Symbio Business Energy | Save Up to £1000s on your Business Electricity</title>
            <meta name="description" content="Offering Lowest Prices for Business Energy since March 2019. Saving UK Businesses Millions of Pounds on Electricity." />
            <script type="application/ld+json">
            {
  `{"@context": "https://schema.org/",
  "@type": "Product",
  "image": "https://symbioenergy.co.uk/backend/assets/uploads/Business-slide-1.jpg",
  "name": "Symbio Energy",
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.6"
    },
    "name": "Business Energy Supply",
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
            </script>  */}
            <meta property="og:url"                content="https://www.symbioenergy.co.uk/business" />
            <meta property="og:type"               content="article" />
            <meta property="og:title"              content="Symbio Business Energy | Save up to £1000s on your Business Electricity." />
            <meta property="og:description"        content="Offering Lowest Prices for Business Energy since March 2019. Saving UK Businesses Millions of Pounds on Electricity." />
            <meta property="og:image"              content="https://www.symbioenergy.co.uk/backend/assets/uploads/facebookogbusiness.jpg" />
            {/* <script src="./js/modernizr.custom.js"></script>
            <script src="./js/draggabilly.pkgd.min.js"></script>
            <script src="./js/elastiStack.js"></script> */}
            <script src="./js/imagesloaded.pkgd.min.js"></script>
            <script src="./js/anime.min.js"></script>
            <script src="./js/swiper.min.js"></script>
            <script src="./js/main-business.js"></script>
            <script src="js/business.js"></script>
            <script src="js/break.js"></script> 
            
          </Helmet>
        {/* ):('')} */}
         <Header/>
         <SideMenu/>
         <div className="business">
         <BusinessSlider />
         {/* <ThreeSlider/> */}
         {/* <Slider pageType='business' /> */}
         {/* <BusinessSlider/> */}
         {/* <Suspense fallback={<div>Loading...</div>}> */}
         {
       (businessData.status==200) ?
         (<>
         <BusinessTabs tabs={businessData.data.response.plan}/>
         <BusinessBreak break={businessData.data.response.break} />
         <BusinessFeatures features={businessData.data.response.stamp}/>
         <BusinessQuote quote={businessData.data.response.searchPlan} property='business' />
         <CustomerSupport data={businessData.data.response.support} />
         {/* <Promise data={businessData.data.response.stamp2}/> */}
         </>
         ):('')}
         </div>
         {/* </Suspense> */}
         <Footer/>   

        <Helmet>
                   
        </Helmet>
        </>
    )
}

export default Business
