import React,{Suspense,useEffect, useState} from 'react'
import {Helmet} from "react-helmet"
import axios from 'axios';
import $ from 'jquery'

import '../css/style.css'
import '../css/menu.css'
import '../css/dual-fuel.css'
import '../css/footer.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';

 import AboutSymbioGas from '../components/AboutSymbioGas';
 import BusinessTabs from '../components/BusinessTabs';
 import BusinessFeatures from '../components/BusinessFeatures';
 import CustomerSupport from '../components/CustomerSupport'
 import BusinessQuote from '../components/BusinessQuote';
 import Promise from '../components/Promise';
import Footer from '../components/Footer';



function DualFuel() {

  const [dualData, setdualData] = useState({});
  const [dualSeo, setdualSeo] = useState({});

  const getDualWithAxios = async () => {
    const response = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/dualfuel/dualfuelRest');
    setdualData(response);
    if(response.status==200){localStorage.setItem('baseUrl', response.data.response.baseUrl);}
  };

  const getDualSeo = async () => {
    const seoResponse = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/dualfuel/seo');
    setdualSeo(seoResponse);
  };

  useEffect(() => {
    getDualWithAxios();
    getDualSeo();
  }, []);
    
    return (
        <> 
        {(dualSeo.status==200) ?
        (
          <Helmet>
            <title>{dualSeo.data.response.seo.metatitle}</title>
            <meta name="description" content={dualSeo.data.response.seo.metadescription} />
            <script type="application/ld+json">{dualSeo.data.response.seo.schema[0]}</script>
            <script src="js/dual-fuel.js"></script> 
          </Helmet>
        ):('')}
         <Header/>
         <SideMenu/>
         {
       (dualData.status==200) ?
         (<>
         <div className="dual">
        <AboutSymbioGas data={dualData.data.response.symbioaboutus} />
        <BusinessTabs tabs={dualData.data.response.plan}/>
        <BusinessFeatures features={dualData.data.response.stamp}/>
        <BusinessQuote quote={dualData.data.response.searchPlan}/>
        <CustomerSupport data={dualData.data.response.support} />
        <Promise data={dualData.data.response.stamp2}/>
        </div>
         </>
         ):('')}
         <Footer/> 
        </>
    )
}

export default DualFuel
