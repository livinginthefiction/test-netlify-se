import React from 'react';
// import axios from 'axios'; 
 import {Helmet} from "react-helmet";

import '../css/style.css'
import '../css/menu.css'
import '../css/contact-us.css'
import '../css/footer.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import seoContact from "../../src/json/Contactseo.json";

function Contact() {
    return (
        <>
             <section className="d-none keywords">
            <h1 className="d-none">Contact Us | business energy solutions contact numberbusiness energy solutions contact number</h1>
            </section>
			<Helmet>
         <title>{seoContact.metatitle}</title>
                <meta name="description" content={seoContact.metadescription} />
				<script type="application/ld+json">
            {seoContact.schema[0]}
            </script>

				{/* <title>Symbio Energy | Dedicated Customer Support</title>
                <meta name="description" content="Assisting our Customers to find solutions to all their Energy Queries. View our contact information and stay in touch for Domestic or Business Energy Queries." />
				<script type="application/ld+json">{`{
        "@context":"https://schema.org",
        "@graph":[
           {
              "@type":"Organization",
              "@id":"https://www.symbioenergy.co.uk/#organization",
              "name":"Symbio Energy",
              "url":"https://www.symbioenergy.co.uk/",
              "sameAs":[
                 "https://www.facebook.com/SymbioEnergy/",
                 "https://www.instagram.com/esymbio/",
                 "https://www.linkedin.com/in/symbio-energy-716012176/",
                 "https://twitter.com/symbioenergy"
              ],
              "logo":{
                 "@type":"ImageObject",
                 "@id":"https://www.symbioenergy.co.uk/#logo",
                 "inLanguage":"en-US",
                 "url":"https://www.symbioenergy.co.uk/wp-content/uploads/2020/03/SE-New-Logo.png",
                 "width":2356,
                 "height":736,
                 "caption":"Symbio Energy"
              },
              "image":{
                 "@id":"https://www.symbioenergy.co.uk/#logo"
              }
           },
           {
              "@type":"WebSite",
              "@id":"https://www.symbioenergy.co.uk/#website",
              "url":"https://www.symbioenergy.co.uk/",
              "name":"Symbio Energy",
              "description":"Just Low Fair Prices",
              "publisher":{
                 "@id":"https://www.symbioenergy.co.uk/#organization"
              },
              "potentialAction":[
                 {
                    "@type":"SearchAction",
                    "target":"https://www.symbioenergy.co.uk/?s={search_term_string}",
                    "query-input":"required name=search_term_string"
                 }
              ],
              "inLanguage":"en-US"
           },
           {
              "@type":"WebPage",
              "@id":"https://www.symbioenergy.co.uk/contact/#webpage",
              "url":"https://www.symbioenergy.co.uk/contact/",
              "name":"Contact Us, Symbio Energy UK is Here to Assists you, feel free",
              "isPartOf":{
                 "@id":"https://www.symbioenergy.co.uk/#website"
              },
              "datePublished":"2017-08-08T10:09:49+00:00",
              "dateModified":"2020-08-11T13:30:28+00:00",
              "description":"We provide our customers with quality service support. In case of any feedback or complaints, feel free to Contact Us at Symbio Energy.",
              "inLanguage":"en-US",
              "potentialAction":[
                 {
                    "@type":"ReadAction",
                    "target":[
                       "https://www.symbioenergy.co.uk/contact/"
                    ]
                 }
              ]
           }
        ]
     }`}</script> */}
            </Helmet>
			
            <Header />
            <SideMenu />
            <div className="contact">
            <ContactSection/>
            </div>
            <Footer/>    
        </>
    )
}

export default Contact
