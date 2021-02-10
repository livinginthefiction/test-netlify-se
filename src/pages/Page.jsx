import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Helmet} from "react-helmet"

import '../css/style.css'
import '../css/menu.css'
import '../css/faq.css'
import '../css/footer.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import PageData from '../components/PageData';

function Page(page) {
    const [pageData, setpageData] = useState({});
    page=page.location.pathname.replace('/page/','');

    const pageApi = async () => {
        const pageApiRes = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/page/getpage/permalink/'+page);
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
            {(pageData.status==200) ?
            (
            <Helmet>
                <title>{pageData.data.response.page.metatitle}</title>
                <meta name="description" content={pageData.data.response.page.metadescription} />
            <script type="application/ld+json">{pageData.data.response.page.json_ld}</script>
            <script src="../js/come.js"></script>
            </Helmet>
            ):('')}

            <Header />
            <SideMenu />
            {(pageData.status==200) ? (<PageData data={pageData.data.response.page} />) : ('')}
            <Footer/>     
        </>
    )
}

export default Page
