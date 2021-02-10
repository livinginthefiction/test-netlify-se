import React,{useEffect, useState} from 'react'
import {Helmet} from "react-helmet"
import axios from 'axios';

import '../css/style.css'
import '../css/menu.css'
import '../css/gas.css'
import '../css/footer.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import AboutSymbioGas from '../components/AboutSymbioGas'
import BusinessQuote from '../components/BusinessQuote'
import Promise from '../components/Promise';
import Footer from '../components/Footer';
import Abc from '../components/Abc';


function Gas() {

  const [businessData, setbusinessData] = useState({});
  const [businessSeo, setbusinessSeo] = useState({});
  const [aboutData, setaboutData] = useState({});
  const [dualData, setdualData] = useState({});

  const getBusinessWithAxios = async () => {
    const response = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/business/businessrest');
    setbusinessData(response);
    if(response.status==200){localStorage.setItem('baseUrl', response.data.response.baseUrl);}
  };

  const getDualWithAxios = async () => {
    const response = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/dualfuel/dualfuelRest');
    setdualData(response);
    if(response.status==200){localStorage.setItem('baseUrl', response.data.response.baseUrl);}
  };

  const getBusinessSeo = async () => {
    const seoResponse = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/business/sliderSeo');
    setbusinessSeo(seoResponse);
  };

  const getAboutData = async () => {
    const seoaaResponse = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/home/homeRest');
    setaboutData(seoaaResponse);
  };

  useEffect(() => {
    getBusinessWithAxios();
    getBusinessSeo();
    getAboutData();
    getDualWithAxios();
  }, []);
    
    return (
        <> 
        {(businessSeo.status==200) ?
        (
          <Helmet>
            <title>{businessSeo.data.response.seo.metatitle}</title>
            <meta name="description" content={businessSeo.data.response.seo.metadescription} />
            <script type="application/ld+json">{businessSeo.data.response.seo.schema[0]}</script>
            <script src="js/cooking.js"></script>
            <script src="js/gas.js"></script> 
            
          </Helmet>
        ):('')}
         <Header/>
         <SideMenu/>
        <div className="gas">
         {
        (dualData.status==200) ?
         (<>
        <AboutSymbioGas data={dualData.data.response.symbioaboutus} />
        <Abc />
        <AboutSymbioGas data={dualData.data.response.symbioaboutus} />
         </>
         ):('')}
         
         {(businessData.status==200) ?
         (<>
         <BusinessQuote quote={businessData.data.response.searchPlan}/>
         <Promise data={businessData.data.response.stamp2}/>
         </>
         ):('')}
        </div>
         <Footer/> 
        </>
    )
}

export default Gas
