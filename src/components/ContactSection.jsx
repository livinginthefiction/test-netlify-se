import React,{useState} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// import $ from "jquery";

function ContactSection() {
    const [formData, setformData] = useState({
        userType:'Existing Customer',firstname:'',lastname:'',query:'General Assistance',energy:'Electricity',property:'Home',homePropertyType:'1 Bedroom',businessPropertyType:'Store',contactType:'Email', emailField:'',telField:'',customerId:''
    });

    const [modal, setmodal] = useState({class:'',style:''});

    const [userType, setUserType] = useState({newVisitor:'d-none',existingUser:''});
    const [propertyType, setpropertyType] = useState({businessPropertyType:'d-none',homePropertyType:''});
    const [contactType, setcontactType] = useState({telField:'d-none',emailField:''});

    function openModal(){
        setmodal({class:'show',style:'block'})
        // window.setInterval(closeModal(), 5000);
    }
    function closeModal(){setmodal({class:'',style:''})}

    function InputEvent(params) {
        const {name,value}= params.target;
        setformData ((preData)=>{ return{...preData,[name]:value} });
        // console.log(name+":"+value);

        if(name==='contactType'){
            if(value === 'Email'){
                setcontactType({telField:'d-none',emailField:''})
                document.getElementById("emailField").required = true; 
                document.getElementById("telField").required = false; 
            }else{
                setcontactType({telField:'',emailField:'d-none'})
                document.getElementById("emailField").required = false; 
                document.getElementById("telField").required = true;
            } 
        }else if (name==='property') {
            if(value === 'Home'){setpropertyType({businessPropertyType:'d-none',homePropertyType:''})}
            else{setpropertyType({homePropertyType:'d-none',businessPropertyType:''})}
        }else if (name==='userType') {
            if(value==='Existing Customer' || value === 'New Customer'){
                setUserType({newVisitor:'d-none',existingUser:''});
                document.getElementById("customerId").required = true;
            }else {
                setUserType({newVisitor:'',existingUser:'d-none'});
                document.getElementById("customerId").required = false;
            }
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        let messages="Hi i am a "+formData.userType+" my name is "+formData.firstname+" "+formData.lastname+", ";

        if (formData.userType=== 'Existing Customer' || formData.userType === 'New Customer') {
            messages = messages + "And my Customer Id is "+ formData.customerId +". I am looking for "+formData.query;
        }else{
            messages = messages + "I am looking for "+formData.energy+" for my "+formData.property+". "+((formData.property==='Home') ? formData.homePropertyType : formData.businessPropertyType);
        }

        messages= messages + ". I'd appreciate if you could "+formData.contactType+" at "+ ((formData.contactType==='Email') ? formData.emailField : formData.telField);
        let payload={
            customer:{  
                        firstname:formData.firstname,
                        lastname:formData.lastname,
                        userType:formData.userType,
                        customerId:formData.customerId,
                        contactType:formData.contactType,
                        contact:(formData.contactType==='Email') ? formData.emailField : formData.telField
                    },
            message:messages
        };
        
        const response = await axios.post('https://www.symbioenergy.co.uk/backend/index.php/api/Contactus/contactsave',payload);
        console.log(response); 
        console.log(payload); 
        document.getElementById("my_form").reset();
        openModal()
        setTimeout(function(){ closeModal(); }, 5000);
    };

    // function getUserType(params) {
    //     console.log(params.target.name);
    //     if(params.target.value == 'Existing Customer' || params.target.value == 'New Customer'){
    //         setUserType({newVisitor:'d-none',existingUser:''})
    //     }else {setUserType({newVisitor:'',existingUser:'d-none'})}
    // }




    
    return (
        <div className="d-flex flex-column">
            <section className="py-5 px-3 padding-left-responsive px-lg-5 pl-xl-5 slider-container">
                <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3 mb-3">Contact Us</h1>

                <div className="d-flex flex-column flex-lg-row flex-xl-row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pull-left movingImg pt-5">
                        <div className="align-items-center d-flex flex-column justify-content-center mt-4 text-center">
                            <svg className="contact-icon my-3" viewBox="0 0 64 64">
                                <polygon fill="none" stroke="#59BAB0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="25 11 10 15 10 53 25 49 25 11" />
                                <polyline fill="none" stroke="#59BAB0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="34.17 13.5 25 11 25 49 40 53 40 26.44" />
                                <polyline fill="none" stroke="#59BAB0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="40 26.44 40 53 55 49 55 26.44" />
                                <path fill="none" stroke="#59BAB0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M47.5,5.55h0a9.21,9.21,0,0,1,9.21,9.21v0A9.21,9.21,0,0,1,47.5,24H38.29a0,0,0,0,1,0,0V14.77A9.21,9.21,0,0,1,47.5,5.55Z"
                                    transform="translate(3.47 37.92) rotate(-45.01)" />
                                <circle fill="none" stroke="#59BAB0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" cx="47.5" cy="14.68" r="4.28" />
                            </svg>
                            <p className="mb-3">
                                Symbio Energy Ltd, 103 Mansion House, Building Research Establishment, Bucknalls Lane, Watford, United Kingdom, WD25 9XX.
                            </p>
                            <svg className="contact-icon my-3" viewBox="0 0 48 48">
                                <path d="M0 0h48v48h-48z" fill="none" />
                                <path fill="#59BAB0" d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z" />
                                </svg>
                            <p className="cursor-pointer emerald-green font-size-1pt2rem mb-3">
                                0333 050 9372
                            </p>
                            <svg className="contact-icon my-3" viewBox="0 0 100.354 100.352">
                                <path fill="#59BAB0" d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462  c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029  c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02  c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465  c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125  c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011  c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061  c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059  c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018  c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117  c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121  c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071  c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03  c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z   M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472  L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481  l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z" />
                                </svg>
                            <p className="cursor-pointer emerald-green font-size-1pt2rem mb-3">
                                customerservices@symbioenergy.co.uk
                            </p>
                            <p className="mb-3">
                                We are available:
                            </p>
                            <p>
                                Monday – Friday. <span className="font-weight-bold">9am – 6pm</span>
                            </p>
                            <p>
                                Saturday. <span className="font-weight-bold">9am – 3pm</span>
                            </p>
                            <p>
                                Sunday. <span className="font-weight-bold">Closed</span>
                            </p>
                           
                            




                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pull-left pt-5">
                        <div className="clearfix col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 h-100">
                            <div className="min-height-200 align-items-center flex-column col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex h-50 justify-content-center pull-left">
                                <div className="mb-3">Customer Portal</div>
                                <div className="buttonRect">
                                    <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                    style={{enableBackground:"new 0 0 140 60"}} >
                                        <defs>
                                            <linearGradient id="id-light-first" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                            </linearGradient>
                                            <filter id="id-glow-first" x="-40%" y="-40%" width="180%" height="180%">
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                                </feMerge>
                                            </filter>
                                        </defs>
                                        <g filter="url(#id-glow-first)">
                                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-first)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                           
                                        </g>
                                    </svg>
                                    <a className="link_button" rel="noopener noreferrer" href="https://symbiocustomersportal.co.uk/">Know More</a>
                                </div>
                            </div>
                            <div className="min-height-200 align-items-center flex-column col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex h-50 justify-content-center pull-left">
                                <div className="mb-3">FAQ's</div>
                                <div className="buttonRect">
                                    <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                    style={{enableBackground:"new 0 0 140 60"}} >
                                        <defs>
                                            <linearGradient id="id-light-second" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                            </linearGradient>
                                            <filter id="id-glow-second" x="-40%" y="-40%" width="180%" height="180%">
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                                </feMerge>
                                            </filter>
                                        </defs>
                                        <g filter="url(#id-glow-second)">
                                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-second)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                        </g>
                                    </svg>
                                    <NavLink className="link_button" to="/faqs">Know More</NavLink>
                                </div>
                            </div>
                            <div className="min-height-200 align-items-center flex-column col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex h-50 justify-content-center pull-left">
                                <div className="mb-3">Guides</div>
                                <div className="buttonRect">
                                    <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                    style={{enableBackground:"new 0 0 140 60"}} >
                                        <defs>
                                            <linearGradient id="id-light-third" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                            </linearGradient>
                                            <filter id="id-glow-third" x="-40%" y="-40%" width="180%" height="180%">
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                                </feMerge>
                                            </filter>
                                        </defs>
                                        <g filter="url(#id-glow-third)">
                                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-third)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                            
                                        </g>
                                    </svg>
                                    <NavLink className="link_button" to="/guides">Know More</NavLink>
                                </div>
                            </div>
                            <div className="min-height-200 align-items-center flex-column col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex h-50 justify-content-center pull-left">
                                <div className="mb-3">Setup Direct Debit</div>
                                <div className="buttonRect">
                                    <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                    style={{enableBackground:"new 0 0 140 60"}} >
                                        <defs>
                                            <linearGradient id="id-light-fourth" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                                            </linearGradient>
                                            <filter id="id-glow-fourth" x="-40%" y="-40%" width="180%" height="180%">
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                                </feMerge>
                                            </filter>
                                        </defs>
                                        <g filter="url(#id-glow-fourth)">
                                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-fourth)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                                           
                                        </g>
                                    </svg>
                                    <a className="link_button"  rel="noopener noreferrer" href="https://directdebit.symbioenergy.co.uk/">Know More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* <section className="py-5">
            <form id="my_form" onSubmit={formSubmit}>
            <div className="container contact-us-form p-4 clearfix">
            <ul>
            <li>Hi I am </li>
            <li className="type-dropdown">
                <select onChange={InputEvent} id="userType" name="userType">
                    <option value="Existing Customer">an Existing Customer</option>
                    <option value="New Customer">a New Customer</option>
                    <option value="New Visitor">a New Visitor</option>
                </select>
            </li>
            <li>My name is</li>
            <li><input required type="text" onChange={InputEvent} name="firstname" placeholder="Firstname" /></li>
            <li><input required type="text" onChange={InputEvent} name="lastname" placeholder="Lastname" />,</li>
            <li className={`existingUser ${userType.existingUser} `}>And my Customer ID is</li>
            <li className={`existingUser ${userType.existingUser} `}><input type="text" placeholder="Customer Id" required onChange={InputEvent} name="customerId" id="customerId" />.</li>
            <li>I am looking </li>
            <li>
                <select id="ExistingUser" onChange={InputEvent} name="query" className={`existingUser ${userType.existingUser} `}>
                    <option value="General Assistance">for General Assistance</option>
                    <option value="Raise a Complaint">to Raise a Complaint</option>
                </select>
                <select id="newUser" onChange={InputEvent} name="energy" className={`newVisitor ${userType.newVisitor} `} >
                    <option value="Electricity">Electricity</option>
                    <option value="Gas">Gas</option>
                    <option value="Dual Fuel">Dual Fuel</option>
                </select>
            </li>
            <li className={`newVisitor ${userType.newVisitor} `}>
                for my
            </li>
            <li className={`newVisitor ${userType.newVisitor} `}>
                <select onChange={InputEvent} name="property" id="propertyType">
                    <option value="Home">Home</option>
                    <option value="Business">Business</option>
                </select>.
            </li>
            <li className={`newVisitor ${userType.newVisitor} `}>I have a</li>
            <li id="propertyBox" className={`newVisitor ${userType.newVisitor} `}>
                <select name="homePropertyType" id="homePropertyType" className={`${propertyType.homePropertyType}`}>
                    <option value="1 Bedroom">1 Bedroom</option>
                    <option value="2 Bedroom">+2 Bedroom</option>
                    <option value="4 Bedroom">+4 Bedroom</option>
                </select>
                <select onChange={InputEvent} id="businessPropertyType" name="businessPropertyType" className={`${propertyType.businessPropertyType}`}>
                    <option value="Store">Store</option>
                    <option value="Company">Company</option>
                    <option value="Industry">Industry</option>
                </select>.
            </li>
            <li className="mr-0">
                I'd appreciate
            </li>
            <li>
                if you could
            </li>
            <li>
                <select name="contactType" onChange={InputEvent} id="contactType">
                    <option value="Email">Email</option>
                    <option value="Call">Call</option>
                </select>
            </li>
            <li>at</li>
            <li>
                <input type="email" onChange={InputEvent} id="emailField" required name="emailField" className={contactType.emailField} placeholder="Enter Email Address" />
                <input type="tel" onChange={InputEvent} id="telField" name="telField"  className={contactType.telField} placeholder="Enter Telephone No" />.
            </li>
            </ul>

            <div className="d-block pt-5 pull-left text-center w-100">
                <div className="buttonRect">
                    <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                    style={{enableBackground:"new 0 0 140 60"}} >
                        <defs>
                            <linearGradient id="id-light-contactUS" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                                <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                                <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                            </linearGradient>
                            <filter id="id-glow-contactUS" x="-40%" y="-40%" width="180%" height="180%">
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#id-glow-contactUS)">
                            <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                            <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-contactUS)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                           
                        </g>
                    </svg>
                    <button style={{background: 'transparent',borderColor: 'transparent'}} className="link_button" type="submit" >Contact Us</button>
                </div>
            </div>

            </div>
            </form>
            </section> */}

            <div className={`modal fade ${modal.class}`}  id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{display:modal.style}}>
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      {/* <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> */}
      <div className="modal-body">
       <p className="text-dark text-center my-0"> Contact Form has been successfully submitted.</p>
      </div>
      <div className="modal-footer">
          <center style={{width:'100%'}}><button type="button" className="btn btn-secondary" onClick={closeModal} data-dismiss="modal">Close</button></center>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
        </div>

    )
}

export default ContactSection
