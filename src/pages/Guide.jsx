import React,{Suspense,useEffect, useState} from 'react';
import axios from 'axios'; 
import {Helmet} from "react-helmet";
import $ from 'jquery'

import '../css/style.css'
import '../css/menu.css'
import '../css/guide.css'
import '../css/footer.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import GuideSlider from '../components/GuideSlider';

function Guide() {
  // function hell(){
  //   return(
  //     <Helmet>
  //       <title>test</title>
  //       <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  //       <script defer src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
  //       <script defer src="js/guide.js"></script>
  //     </Helmet>
  //   );
  // }

  const [guideData, setguideData] = useState({});

    const guideApi = async () => {
        const guideApiRes = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/guide/guideRest');
        setguideData(guideApiRes);
        if(guideApiRes.status==200){localStorage.setItem('baseUrl', guideApiRes.data.response.baseUrl);}
        
      };

    useEffect(() => {
      guideApi();
      window.scrollTo(0, 0);
      // hell();
    }, []);
    console.log(guideData);
  return (
    <>
     
      
      {/* {(guideData.status==200) ?
            (
            <Helmet>
                <title>{guideData.data.response.seo.metatitle}</title>
                <meta name="description" content={guideData.data.response.seo.metadescription} />
            <script type="application/ld+json">{guideData.data.response.seo.json_ld}</script>
            </Helmet>
            ):('')} */}

      <Header />
      <SideMenu />
      <div className="guide">
      {(guideData.status==200) ? (
        guideData.data.response.guide.map((val,key)=>{return(
          <GuideSlider key={key} title ={val.title} content={val.content}/>
        ) })
      ) : ('')}
      </div> 
      <Footer/> 
    </>
  );
}

export default Guide;