import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Helmet} from "react-helmet"

import '../../css/style.css'
import '../../css/menu.css'
import '../../css/faq.css'
import '../../css/footer.css'

import Header from '../../components/Header'
import SideMenu from '../../components/SideMenu';
import Footer from '../../components/Footer';
import PageData from '../../components/PageData';

function FuelMix(page) {
    const [pageData, setpageData] = useState({});
    page=page.location.pathname.replace('/page/','');

    const pageApi = async () => {
        const pageApiRes = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/page/getpage/permalink/our-fuel-mix');
        setpageData(pageApiRes);
        if(pageApiRes.status==200){localStorage.setItem('baseUrl', pageApiRes.data.response.baseUrl);}
      };

    useEffect(() => {
        pageApi();
        window.scrollTo(0, 0);
    }, []);

    // if(pageData.status==200){console.log(pageData.data.response.page);}

    return (
        <>
            {/* <ScrollToTopOnMount /> */}
            {/* {(pageData.status==200) ?
            ( */}
            <Helmet>
            {/* <title>{pageData.data.response.page.metatitle}</title>
            <meta name="description" content={pageData.data.response.page.metadescription} />
            <script type="application/ld+json">{pageData.data.response.page.json_ld}</script> */}
             <title>Know more about the fuel mix you received from Symbio Energy, UK</title>
            <meta name="description" content="Join us and learn more about your electricity and the fuel mix consumed annually only through Symbio Energy UK&#039;s cheapest energy provider." />
            <script type="application/ld+json">{
                `{     "@context": "https://www.schema.org",     "@type": "LocalBusiness",     "name": "Symbio Energy",     "url": "https://www.symbioenergy.co.uk/",     "sameAs": [         "https://www.facebook.com/SymbioEnergy",         "https://twitter.com/SymbioEnergy",         "https://www.linkedin.com/company/symbioenergy/"     ],     "logo": "https://www.symbioenergy.co.uk/wp-content/uploads/2020/03/SE-New-Logo.png",     "image": "https://symbioenergy.co.uk/backend/assets/uploads/Residential-slider-1.jpg",     "description": "Symbio Energy is the Lowest Electricity Supplier in the UK. Provide 100%  green energy at competative price.",     "address": {         "@type": "PostalAddress",         "streetAddress": "103 Mansion Building Research Establishment, Bucknalls Ln",         "addressLocality": "Watford ",         "addressRegion": "Hertfordshire",         "postalCode": "WD25 9XX",         "addressCountry": "United Kingdom",         "telephone": "03330509372"     },     "geo": {         "@type": "GeoCoordinates",         "latitude": "51.70557339788726",         "longitude": "-0.3743181932581195"     },     "hasMap": "https://www.google.com/maps/place/Symbio+Energy+Ltd/@51.7055488,-0.3665511,14.75z/data=!4m5!3m4!1s0x48763fac9fa51e5f:0x65d0e1f8c4a99fbe!8m2!3d51.7005663!4d-0.3743055",     "openingHours": "Mo 09:00-18:00 Tu 09:00-18:00 We 09:00-18:00 Th 09:00-18:00 Fr 09:00-18:00 Sa 09:00-15:00" }`
            }</script>
            <script src="../js/come.js"></script>
            </Helmet>
            {/* ):('')} */}

            <Header />
            <SideMenu />
            {(pageData.status==200) ? (<PageData data={pageData.data.response.page} />) : ('')}
            <Footer/>     
        </>
    )
}

export default FuelMix
