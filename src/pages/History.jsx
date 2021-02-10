import React,{useEffect, useState} from 'react';
import axios from 'axios';
import '../css/history.css'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import HistoryYear from '../components/HistoryYear'

function History() {

//     window.onload = function() {

//     var path = document.querySelector('#star-path');
//     var pathLength = path.getTotalLength();

//     path.style.strokeDasharray = pathLength + ' ' + pathLength;
//     path.style.strokeDashoffset = pathLength;

// window.addEventListener("scroll", function(e) {
 
//     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      
//     var drawLength = pathLength * scrollPercentage;
    
//     path.style.strokeDashoffset = pathLength - drawLength;

//   if (scrollPercentage >= 0.99) {
//     path.style.strokeDasharray = "none";
//   } else {
//     path.style.strokeDasharray = pathLength + ' ' + pathLength;
//   }
//   });
// }

const [historyData, setHistoryData] = useState(null);

const getHistoryWithAxios = async () => {
  const response = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/history/historyRest');
  setHistoryData(response.data.response.history);

  if(response.status==200){localStorage.setItem('baseUrl', response.data.response.baseUrl);}
};

useEffect(() => {
    getHistoryWithAxios();
}, []);
 
function HistoryYearMain(val)
{
    return (
    <HistoryYear key={Math.random()+val} year={val.year} data={val.data} /> 
    )
}

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
        <div className="history">
        <h1 className="font-weight-bolder text-center text-uppercase emerald-green font-family-san-serif font-size-3pt5rem px-3">Our
                    history</h1>
                <div className="component mt-5">
                    <div className="wrapper">
                        <div className="flex-wrap">
                            <div className="flex w66 center-margin pad-xxl pad-top-none">
                                <div className="flex-wrap navy-text timeline-wrapper timeline-wrapper--history pad-top-none"></div>
                                    {historyData && historyData.map(HistoryYearMain)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    );

}

export default History