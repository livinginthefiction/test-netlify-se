import React,{useEffect,useState} from 'react'
import axios from 'axios'
// import {Helmet} from "react-helmet"

import '../css/style.css'
import '../css/menu.css'
import '../css/case-study.css'
import '../css/footer.css'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import Case from '../components/Case';

function CaseStudy() {
  const [cs, setcs] = useState({});

    const csApi = async () => {
        const csApiRes = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/casestudy/casestudyrest');
        setcs(csApiRes);
        if(csApiRes.status===200){localStorage.setItem('baseUrl', csApiRes.data.response.baseUrl);}
      };

    useEffect(() => {
        csApi();
        window.scrollTo(0, 0);
    }, []);

    // if(cs.status==200){console.log(cs.data.response);}


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
      <div className="case">
      {(cs.status===200) ? (<Case data={cs.data.response.casestudy} />) : ('')}
      </div>
      <Footer/> 
    </>
  );
}

export default CaseStudy;