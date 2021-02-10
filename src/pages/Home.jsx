import React,{Suspense,useEffect, useState} from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";
import seodata from "../../src/json/Homeseo.json";


import '../css/style.css'
import '../css/menu.css'
import '../css/home.css'
import '../css/footer.css'

// import '../css/codesandSlider.css'
// import Slider from '../components/newslider/Slider';
// import SlideData from '../SlideData'


import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Promise from '../components/Promise';
import Timeline from '../components/Timeline';
import BtSlider from '../components/newslider/BtSlider'; 
//import Prasad from '../components/newslider/Prasad'; 

// const Promise = React.lazy(() => import ('../components/Promise'));


const About = React.lazy(() => import ('../components/About'));
//import About from '../components/About';
const WhySymbio = React.lazy(() => import ('../components/WhySymbio'));
//import WhySymbio from '../components/WhySymbio';
const Comparison = React.lazy(() => import ('../components/Comparison'));
//import Comparison from '../components/Comparison';
const EnergySlider = React.lazy(() => import ('../components/EnergySlider'));
//import EnergySlider from '../components/EnergySlider';
const GraphSection = React.lazy(() => import ('../components/GraphSection'));
//import GraphSection from '../components/GraphSection';
const SymbioGas = React.lazy(() => import ('../components/SymbioGas'));
//import SymbioGas from '../components/SymbioGas';
const SymbioApp = React.lazy(() => import ('../components/SymbioApp'));
//import SymbioApp from '../components/SymbioApp';
const Marquee = React.lazy(() => import ('../components/Marquee'));
//import Marquee from '../components/Marquee';
const CustomerSupport = React.lazy(() => import ('../components/CustomerSupport'));
//import CustomerSupport from '../components/CustomerSupport';



function Home(data) {
//   setTimeout(function () {
//     var utm1='https://www.symbioenergy.co.uk/?utm_source=Facebook&utm_medium=CPC&utm_campaign=BritDonkey%2029%2F01';
//     var utm2='https://www.symbioenergy.co.uk/?utm_source=Facebook&utm_medium=paidcampaign&utm_campaign=BurnMoney2801&utm_term=2801&utm_content=promotions';
//     var utm3='https://www.symbioenergy.co.uk/?utm_source=Facebook&utm_medium=CPC&utm_campaign=ShockedAd28%2F01&utm_term=28%2F01&utm_content=Promotions';
//     var utm4='https://www.symbioenergy.co.uk/?utm_source=Facebook&utm_medium=paidcampaign&utm_campaign=NoRegrets2801&utm_term=2801&utm_content=promotions';
//     var utm5='https://www.symbioenergy.co.uk/?utm_source=Facebook&utm_medium=CPC&utm_campaign=DonkeyAd%2028%2F01';
//     var utm6='https://www.symbioenergy.co.uk/?utm_source=Facebook&utm_medium=paidcampaign&utm_campaign=Simon_Cowell&utm_term=0120&utm_content=promotions';
//     var currentURL=window.location.href;
//     if((currentURL==utm1)||(currentURL==utm2)||(currentURL==utm3)||(currentURL==utm4)||(currentURL==utm5)||(currentURL==utm6)) {window.location.replace("/about-symbio");}
// }, 2000);
  const [homeData, sethomeData] = useState({});
  const [seo, setseo] = useState({});

  const getGiHubUserWithAxios = async () => {
    const homeRestRes = await axios.get('https://admin.siowebcraft.com/backend/index.php/api/home/homeRest');
    sethomeData(homeRestRes);
    if(homeRestRes.status===200){localStorage.setItem('baseUrl', homeRestRes.data.response.baseUrl);}
  };

  const seoApi = async () => {
    const seoApiRes = await axios.get('https://symbioenergy.co.uk/backend/index.php/api/home/seo');
    setseo(seoApiRes);
  };

  // useEffect(() => {
  //   // getGiHubUserWithAxios();
  //   seoApi();
  // }, []);

  useEffect(() => {
    window.addEventListener('scroll', getGiHubUserWithAxios, { passive: true });
    return () => {window.removeEventListener('scroll', getGiHubUserWithAxios);};
  }, []);

  // useEffect(() => {
  //   getGiHubUserWithAxios();
  // }, []);
  
  
  // scroll redirect
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   // console.log(position);
  //   if(position >= 1200 & sessionStorage.getItem("redirect")!=1) { 
  //     window.location.replace("/about-symbio");
  //     sessionStorage.setItem("redirect", 1);
  //   }
  // };

  // useEffect(() => {
  //     window.addEventListener('scroll', handleScroll, { passive: true });
  //     return () => {window.removeEventListener('scroll', handleScroll);};
  // }, []);

  return (
    <>
       
        {/* {(seo.status===200) ?
        ( */}
          <Helmet>
            <title>{seodata.metatitle}</title>
            <meta name="description" content={seodata.metadescription} />
            <script type="application/ld+json">{seodata.schema[0]}</script>
            {/* <script type="text/javascript" src="json/Homeseo.json"></script> */}
            {/* <link rel="canonical" href="https://www.symbioenergy.co.uk" />
            <title>Symbio Energy UK | Save up to £600 NOW!</title>
            <meta name="description" content="UK's Lowest cost electricity provider. Price Guarantee. Save up to £600. Low and Fair Prices on Green Energy. Nationwide cover." />
            <script type="application/ld+json" data-react-helmet="true">
            {
              `{"@context": "https://www.schema.org",
              "@type": "LocalBusiness",
              "name": "Symbio Energy",
              "url": "https://www.symbioenergy.co.uk/",
              "sameAs": [
                "https://www.facebook.com/SymbioEnergy",
                "https://twitter.com/SymbioEnergy",
                "https://www.linkedin.com/company/symbioenergy/"
              ],
              "logo": "https://www.symbioenergy.co.uk/wp-content/uploads/2020/03/SE-New-Logo.png",
              "image": "https://symbioenergy.co.uk/backend/assets/uploads/Residential-slider-1.jpg",
              "description": "Symbio Energy is the Lowest Electricity Supplier in the UK. Provide 100%  green energy at competative price.",
              "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "103 Mansion Building Research Establishment, Bucknalls Ln",
                  "addressLocality": "Watford ",
                  "addressRegion": "Hertfordshire",
                  "postalCode": "WD25 9XX",
                  "addressCountry": "United Kingdom",
                  "telephone": "03330509372"
              },
              "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "51.70557339788726",
                  "longitude": "-0.3743181932581195"
              },
              "hasMap": "https://www.google.com/maps/place/Symbio+Energy+Ltd/@51.7055488,-0.3665511,14.75z/data=!4m5!3m4!1s0x48763fac9fa51e5f:0x65d0e1f8c4a99fbe!8m2!3d51.7005663!4d-0.3743055",
              "openingHours": "Mo 09:00-18:00 Tu 09:00-18:00 We 09:00-18:00 Th 09:00-18:00 Fr 09:00-18:00 Sa 09:00-15:00"}`
}
</script> */}

            <meta property="og:url"                content="https://www.symbioenergy.co.uk/" />
            <meta property="og:type"               content="article" />
            <meta property="og:title"              content="Symbio Energy UK | Save up to £600 NOW!" />
            <meta property="og:description"        content="UK's Lowest Priced Electricity provider since March 2019. Lowest Energy Prices Guaranteed on comparison sites and against the Big 6. Switch Today and Start Saving." />
            <meta property="og:image"              content="https://www.symbioenergy.co.uk/backend/assets/uploads/facebookoghome.jpg" />

          </Helmet>
        {/* ):('')} */}
      <Header />
      <SideMenu />
      {/* <Slider pageType='home' /> */}
      {/* <Slider slides={SlideData} /> */}
      <BtSlider />
      {(homeData.status===200) ?(<Promise data={homeData.data.response.stamp}/>):('') }
      <Suspense fallback={<div></div>}>
      { 
       (homeData.status===200) ?
       (<>
        {/* <Promise data={homeData.data.response.stamp} /> */}
        <About data={homeData.data.response.about} />
        <WhySymbio data={homeData.data.response.pillars} status="true" />
        <Marquee data={homeData.data.response.marquee} />
        <GraphSection data={homeData.data.response.graph} />
        <Comparison data={homeData.data.response.comparison} />
        <EnergySlider data={homeData.data.response.choose} />
        <SymbioGas data={homeData.data.response.provider} />
        {/* <DualFuel data={homeData.data.response.dual} /> */}
        <Marquee data={homeData.data.response.marquee} />
        <SymbioApp data={homeData.data.response.app} section={homeData.data.response.section.sectionData} />
        <Timeline/>
        <CustomerSupport data={homeData.data.response.support} />
        {/* <Watson/> */}
        </>)
      :('')
      }
      
      </Suspense>
      <Footer/> 
    </>
  );
}

export default Home;