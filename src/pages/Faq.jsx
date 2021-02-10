import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";
import seoFaq from "../../src/json/Faqseo.json";

import '../css/style.css'
import '../css/menu.css'
import '../css/faq.css'
import '../css/footer.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import FaqCategory from '../components/FaqCategory';
import FaqSection from '../components/FaqSection';
//import Promise from '../components/Promise';

function Guide() {
  const [faqData, setfaqData] = useState({});

  const getFaqData = async () => {
    const faqRestRes = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/faq/faqrest');
    setfaqData(faqRestRes);
    if(faqRestRes.status==200){localStorage.setItem('baseUrl', faqRestRes.data.response.baseUrl);}
  };

  useEffect(() => {
    getFaqData();
  }, []);

  // if(faqData.status==200){console.log(JSON.parse(faqData.data.response.seo.json_ld));}

  return (
    <>
     <section className="d-none keywords">
            <h1 className="d-none">switch electricity supplier uk | lowest energy cost for home | Affordable Electricity Suppliers</h1> 

            <h5 className="d-none">energy tariffs, switch electricity supplier uk,home energy provider,switch energy provider uk,switching supplier,gas and electricity bills,compare energy prices,energy industry uk,Energy Switch,Direct Debit Tariffs,energy supply for home,energy supply for residential,Electricity supply for Home,energy supply for domestic home,energy supply for new home,setting up electricity in a new home,What is the cheapest way to power your home?,lowest energy cost for home,lowest Electricity cost for residential home,switch electricity supplier for home,list of energy suppliers,Energy providers for home,energy providers for residential homes,energy supply for apartments,renewable electricity,Affordable Electricity Suppliers,switch gas and electricity uk,gas electric suppliers,change gas and electric,cheapest energy company,switch energy provider,switch gas supplier,change gas and electricity provider,how to get cheaper energy bills,electric switch,change electricity supplier,switch gas providers,utilita friendly credit,the cheapest electricity supplier,change energy supplier,best energy comparison website,switch energy supplier uk,switch with which gas and electricity,best energy switching service,switch gas and electric company,cheaper energy uk,switch electricity supplier,compare energy prices smart meters,energy price comparison websites uk,switch gas and electric,how to switch from electric to gas,home switch price,energy switch comparison,switch electricity provider,energy switchingwebsites,switch gas and electricity provider,best energy switch site,switch energy company,switch utility comparison,switch electric company,switch gas and electric com,you switch gas and electric,find a cheaper energy supplier,energy switch how long does it take,choose energy supplier uk,best no standing charge energy tariffs,can i switch electric companies,how to switch gas and electric supplier,compare energy charges,cheap energy deals uk,which energy supplier comparison,no standing charge energy suppliers,how does switching electricity supplier work,compare business energy tariffs, </h5>
            </section>
      {(faqData.status==200) ?
        (
          <Helmet>
             <title>{seoFaq.metatitle}</title>
            <meta name="description" content={seoFaq.metadescription} />
            {/*<script type="application/ld+json">{faqData.data.response.seo.json_ld}</script> */}
            {/* <title>Symbio Energy FAQs | Assisting your Energy Queries</title>
            <meta name="description" content="For your convenience we have put together a set of FAQs to assist you with your Energy Queries like Payments and Billing, Switching, Meter Queries." /> */}
            <script type="application/ld+json">{
              `{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                      "@type": "Question",
                      "name": "HOW TO SWITCH ENERGY PROVIDER TO SYMBIO ENERGY?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Once you have decided to switch energy provider to Symbio Energy, you can complete the switch through an online application on Symbio Energy and choose to Get a Quote. Once registered, we will initiate the switching process. Alternatively, give us a call on 0333 050 9372 or email us at customerservices@symbioenergy.co.uk and we will walk you through the process."
                      }
                    }, {
                      "@type": "Question",
                      "name": "HOW OFTEN DO I HAVE TO PROVIDE METER READINGS AND HOW CAN I PROVIDE THEM?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The electricity market works on Estimated Annual Consumption (EAC) and Profile Classes. This is an average estimated energy usage based on a property type and the average number of people living in this property. It follows that if you live in a 3-bedroom semi-detached house with just your partner, your EAC will be higher than your actual usage and you will have an estimated monthly bill which is higher than your actual energy usage. Conversely, if you live in a 3-bedroom house with 4 children who are constantly gaming, then the EAC will be lower than the actual usage and you will have an estimated monthly bill which is lower than your actual energy usage. It is important to remember; you can only be charged for what you use. Therefore, if you have overpaid, this money is yours and due back to you. Conversely, if you have used more energy than the EAC, you will have to top up the difference. You only pay for what you have used. Meter readings reconcile the estimates with your actual reads. Some people like to provide monthly reads and have accurate energy bills monthly. Others provide less frequent reconciliations. We request you to submit the meter reading at the end of each month. This can be submitted via the Customer On-Line portal or by calling customer services. We are working on a Phone App and other novels, easier methods for our customers. Meter readings submitted after the last day of each month will be considered in the next billing cycle. If we do not receive a meter read in time, the bill will be based on the estimates submitted in the switch application."
                      }
                    }, {
                      "@type": "Question",
                      "name": "WHAT ARE YOUR UNIT RATES AND STANDING CHARGES?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We would like to inform you that our Unit Rates and Standing Charges vary as per the various regions and also on the basis of the usage. To get more accurate information on our Tariff Plans in accordance with your postcode, address and usage, we request you to kindly visit us at Get a Quote. We would like to inform you that our Unit Rates and Standing Charges vary as per the various regions and also on the basis of the usage. To get more accurate information on our Tariff Plans in accordance to your postcode, address and usage, we request you to kindly visit the following link Get a Quote  the savings that we offer are calculated on the basis of usage, which means- higher the consumption, higher the savings. If you could inbox us your postcode we would be happy to give you the best tariff for your address. If you have any queries, please do not hesitate to let us know. Our email is customerservices@symbioenergy.co.uk You could also call us on 0333 050 9372, Monday to Friday between 09:00 am to 06:00 pm"
                      }
                    }, {
                      "@type": "Question",
                      "name": "THERE HAVE BEEN A LOT OF NEW ELECTRICITY COMPANIES THAT HAVE GONE BUST TRYING TO PROVIDE CHEAPER RATES. WILL SYMBIO BE JOINING THEM?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "This is a fair and reasonable question. After all, why can we afford to be cheaper without going bust when the others are so much more expensive? The electricity market is complex with many, many, counterparties in the market and each of these parties adds to the price of electricity. The biggest cost is staffing in a complex market and of course in the case of the larger companies, shareholders and expensive management boards. Symbio Energy can mitigate this as a new entrant by utilising the latest software solutions and architecture to minimise staff costs and of course, we do not have a bloated management structure. Our hope is to emulate the growth in low cost airlines by concentrating on technology, increasing efficiency and minimising waste costs. Most importantly, the failures in the industry have arisen due to cash flow management. This is difficult as the price of energy fluctuates dramatically and due to customers, that fail to pay. Failure occurs if sufficient buffers of cash have not been kept addressing unexpected spikes in energy prices and provisions for climate change. Symbio is currently sending bills, a month after an effective switch and monies are collected up to 4 weeks later. This is a huge strain as credit and bank costs are onerous. Hence like the rest of the industry we will be moving to taking a direct debit based on the estimated advance usage by a customer for the forthcoming month. The bill once invoiced will be set off against the monies held on account and a balancing payment requested equivalent to estimated consumption of energy expected. When a customer leaves, the final bill will be a small refund to the customer or a small final bill. In order to keep prices low, we only offer direct debit tariffs at present so that delayed payments do not affect the company and the many customers who are able to pay on time. We do however understand that circumstances change and we will always find ways of assisting those in trouble due to a change of circumstance."
                      }
                    }, {
                      "@type": "Question",
                      "name": "OUR SERVICE DURING THE COVID-19 OUTBREAK!",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":"We recognize that with the constantly changing COVID-19 situation around the world, this is an unprecedented time for everyone, a time that, for many, is filled with uncertainty. We want you to know that we are our committed to continuing to provide you with the services you depend on. As a valued customer, you rely on us to help power your livelihood, and we understand the responsibility that entails. Meeting that responsibility, in any environment, is our primary focus. We would like to reassure customers that we are here if needed and have taken the relevant measures to continue to offer the same level of support to any customer in need. We have and will continue to offer the best customer support service uninterrupted to minimise any disruption in these uncertain times. In response to the current situation, we’ve implemented our business continuity plan. First and foremost, our plan ensures the health and safety of our employees, so we can continue to deliver and support the services you count on. Considering the most recent news and announcements from the World Health Organization (WHO) and Centres for Disease Control and Prevention (CDC), we have made the decision to have employees in our offices who can perform their jobs remotely. We’ve also offered extended sick leave for our employees should they need it. We would like to thank you all again for your cooperation and help in dealing with the situation. Our team are here and ready to help, still able to give the same customer care on phone and email. Stay calm and stay safe."}
                      }]
                  }`
            }</script>
            <meta property="og:url"                content="https://www.symbioenergy.co.uk/faqs" />
            <meta property="og:type"               content="article" />
            <meta property="og:title"              content="Symbio Energy FAQs|Assisting your Energy Queries" />
            <meta property="og:description"        content="For your convenience we have put together a set of FAQs to assist you with your Energy Queries like Payments and Billing, Switching, Meter Queries." />
            <meta property="og:image"              content="https://www.symbioenergy.co.uk/backend/assets/uploads/facebookogfaq.png" />

            <script src="js/come.js"></script>
          </Helmet>
        ):('')}

      <Header />
      <SideMenu />
      {(faqData.status==200) ?
      (
        <div className="faq">
        <section className="py-5 px-3 padding-left-responsive px-lg-5 pl-xl-5">
          <FaqCategory data={faqData.data.response.faq} />
          {faqData.data.response.faq.map((value,key)=>{return(
            <FaqSection key={'stamp'+key} data={value} sectionId={'section'+key} />
          ) })}
        </section>
        {/* <Promise data={faqData.data.response.promiseSection.stamp}/> */}
        </div>
      ):('')}
      
      <Footer/> 
    </>
  );
}

export default Guide;