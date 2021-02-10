import React,{useEffect} from 'react'
import {Helmet} from "react-helmet"

import '../css/style.css'
import '../css/menu.css'
import '../css/thankyou.css'
import '../css/footer.css'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';


function Thankyounew() {
  
  useEffect(() => {
    setTimeout(function(){ window.location.replace("/"); }, 5000);
    console.log('hit');
  }, []);
  return (
    <>
      <Header />
      <SideMenu />
        <div className="ty">
          <section>

                    <div className="row">
                      <div className="col-md-12  col-lg-12 col-sm-12 py-5" id="flag">
                      <h1>
                        <span>R</span>
                        <span>e</span>
                        <span>g</span>
                        <span>i</span>
                        <span>s</span>
                        <span>t</span>
                        <span>r</span>
                        <span>a</span>
                        <span>t</span>
                        <span>i</span>
                        <span>o</span>
                        <span>n</span>
                        </h1>
                        <br/>
                        <h1>
                        <span>S</span>
                        <span>u</span>
                        <span>c</span>
                        <span>c</span>
                        <span>e</span>
                        <span>s</span>
                        <span>s</span>
                        <span>f</span>
                        <span>u</span>
                        <span>l</span>
                      </h1>
                      </div>
                                <div className="col-md-12  col-lg-12 col-sm-12 px-5">
                                <h2 class="font-family-san-serif font-weight-bolder px-3 px-lg-0 px-xl-0 text-center text-uppercase emerald-green ">Thank You for Registering with Symbio Energy</h2>
                                    {/* <div className="col-md-12 text-center"><h1>Registration Successful!</h1></div> */}
                                    {/* <div className="col-md-12 text-center"><h1>Thank You For Registering With Symbio Energy.</h1></div> */}
                                    <div className="col-md-12 text-center">
                                        <p style={{color:'white'}}>You will receive an email shortly with details about your registration with us.</p>
                                    </div>
                                    <div className="col-md-12 text-center">
                                    <p style={{color:'white'}}>Should you require further assistance, please feel free to contact us on customerservices@symbioenergy.co.uk</p>
                                    </div>
                                </div>
                                
                                
                    </div>
            </section>
        </div>
      <Footer/> 
      
    </>
  );
}

export default Thankyounew;