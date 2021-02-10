import React,{useState,useEffect} from 'react'
// import { NavLink } from 'react-router-dom';
import axios from 'axios';

function SideMenu() {

  var pageTitle = document.title;
  var attentionMessage = 'Hey 👋 Come Back!';
  var blinkEvent = null;

  document.addEventListener('visibilitychange', function(e) {
    var isPageActive = !document.hidden;

    if(!isPageActive){
      blink();
    }else {
      document.title = pageTitle;
      clearInterval(blinkEvent);
    }
  });

  function blink(){
    blinkEvent = setInterval(function() {
      if(document.title === attentionMessage){
        document.title = pageTitle;
      }else {
        document.title = attentionMessage;
      }
    }, 100);
  }

      function darkmode(){
        document.body.classList.toggle("pattern-bg");
      }

    const [scrollPosition, setSrollPosition] = useState('');
    const [collapse, setCollapse] = useState();
    const [secondcollapse, setSecondCollapse] = useState();
    const [thirdcollapse, setThirdCollapse] = useState();
    const [forthcollapse, setForthCollapse] = useState();
    const [fifthcollapse, setFifthCollapse] = useState();
    const [temp, setTemp] = useState();

    const handleScroll = () => {
        const position = window.pageYOffset;
        if(position <= 400) {
            // sliderClass.removeClass("burgerBoxInnerOut");
            setSrollPosition('');
          }
          else{
            // sliderClass.addClass("burgerBoxInnerOut");
            setSrollPosition('burgerBoxInnerOut');
          }
        
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        async function getData(){
          const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=1a293ca7711feeb518fc171360af5461');
        //   const res = await axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/');
          setTemp(Math.trunc(res.data.main.temp-273.15));
        //   setTemp(Math.trunc(res.data.consolidated_weather[0].min_temp));
        }
        getData();
        //console.log(temp);
    },[]);

    function hamburgerClick() {
        let element = document.getElementById("slidingMenu");
        let bodyTag = document.getElementsByTagName("BODY")[0];
        let overlay = document.getElementById('overlayDiv');
        let hiddenSlider = document.getElementById('hiddenSlider');
        hiddenSlider.classList.add("w-100");
        element.classList.add("open");
        overlay.classList.add('d-block');
        setTimeout(function () {
            bodyTag.classList.add('open-menu');
        }, 50);
        let closeIcon = document.getElementById('closeIcon');
        closeIcon.classList.add("closeMenu");
    }

    function menuClose() {
        let element = document.getElementById("slidingMenu");
        let bodyTag = document.getElementsByTagName("BODY")[0];
        let overlay = document.getElementById('overlayDiv');
        let hiddenSlider = document.getElementById('hiddenSlider');
        element.classList.remove("open");
        overlay.classList.remove('d-block');
        setTimeout(function () {
            bodyTag.classList.remove('open-menu');
        }, 50);
        setTimeout(function (){
            hiddenSlider.classList.remove("w-100");
        }, 1000);
        let closeIcon = document.getElementById('closeIcon');
        closeIcon.classList.remove("closeMenu");
    }

    function showMenu(){
        var currentScrollPos = window.pageYOffset;  
        if(currentScrollPos >= 400){
            setSrollPosition("");
        }
      }

      function expand(){
        if(!collapse)
        {
        setCollapse('opened-submenu');
        setSecondCollapse('open-submenu');
        }else{
        setCollapse('');
        setSecondCollapse('');
        }
      }

      function Secondexpand(){
        if(!collapse)
        {
        setCollapse('opened-submenu');
        setThirdCollapse('open-submenu');
        }else{
        setCollapse('');
        setThirdCollapse('');
        }
      }

      function Thirdexpand(){
        if(!collapse)
        {
        setCollapse('opened-submenu');
        setForthCollapse('open-submenu');
        }else{
        setCollapse('');
        setForthCollapse('');
        }
      }

      function Forthexpand(){
        if(!collapse)
        {
        setCollapse('opened-submenu');
        setFifthCollapse('open-submenu');
        }else{
        setCollapse('');
        setFifthCollapse('');
        }
      }


    return (
        <>
        <div id="SideMenu" className="slideMenuBar d-none d-lg-block d-xl-block">
        <div className="burgerBox" onMouseMove={showMenu}>
            <div id="closeIcon" className={`burgerBoxInner ${scrollPosition}`}>
                <div className="iconBox">
                    <span onClick={hamburgerClick} className="burgerIcon cursor-pointer">
                        <svg className="svg-32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g fillRule="evenodd">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path className="dot-fill"
                                    d="M12 17.333A1.333 1.333 0 1112 20a1.333 1.333 0 010-2.667zm6.667 0a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm-13.334 0a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zM12 10.667a1.333 1.333 0 110 2.666 1.333 1.333 0 010-2.666zm-6.667 0a1.333 1.333 0 110 2.666 1.333 1.333 0 010-2.666zm13.334 0a1.333 1.333 0 110 2.666 1.333 1.333 0 010-2.666zM12 4a1.333 1.333 0 110 2.667A1.333 1.333 0 0112 4zM5.333 4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm13.334 0a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667z">
                                </path>
                            </g>
                        </svg>
                    </span>
                    <span onClick={menuClose} className="closeIcon cursor-pointer">
                        <svg className="svg-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path className="dot-fill"
                                d="M19.18 5.18l-.35-.36a.51.51 0 00-.71 0L12 10.94 5.89 4.82a.51.51 0 00-.71 0l-.35.36a.48.48 0 000 .7L11 12l-6.17 6.12a.48.48 0 000 .7l.35.36a.51.51 0 00.71 0L12 13.06l6.11 6.12a.51.51 0 00.71 0l.35-.36a.48.48 0 000-.7L13.07 12l6.11-6.12a.48.48 0 000-.7z">
                            </path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div id="hiddenSlider" className="hidden-Slider">
        <div id="overlayDiv" className="sliding-menu-overlay" onClick={menuClose}></div>
    <div id="slidingMenu" className="d-flex flex-column p-4 sliding-menu">

        <div className="align-items-center d-flex justify-content-between">
            <div className="checkBox-cover invisible">
                <input type="checkbox" className="checkbox" id="checkbox" onChange={darkmode}/>
                <label htmlFor="checkbox" className="label">
                    <i className="fa fa-moon-o"></i>
                    <i className="fa fa-sun-o"></i>
                    <div className="ball"></div>
                </label>
            </div>
            <div className="buttonRect ">
                <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                style={{enableBackground:"new 0 0 140 60"}} >
                    <defs>
                        <linearGradient id="id-light-2" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                            <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                            <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                            <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                            <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                        </linearGradient>
                        <filter id="id-glow-2" x="-40%" y="-40%" width="180%" height="180%">
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                            <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                            <feMerge>
                                <feMergeNode in="coloredBlur"></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>
                    </defs>
                    <g filter="url(#id-glow-2)">
                        <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                        <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-2)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                       
                    </g>
                </svg>
                <a className="link_button"  href="https://symbiogetquote.co.uk/">Get Quote</a>
            </div>

            <span onClick={menuClose} className="cursor-pointer d-lg-none d-xl-none">
                <svg className="svg-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path className="dot-fill"
                        d="M19.18 5.18l-.35-.36a.51.51 0 00-.71 0L12 10.94 5.89 4.82a.51.51 0 00-.71 0l-.35.36a.48.48 0 000 .7L11 12l-6.17 6.12a.48.48 0 000 .7l.35.36a.51.51 0 00.71 0L12 13.06l6.11 6.12a.51.51 0 00.71 0l.35-.36a.48.48 0 000-.7L13.07 12l6.11-6.12a.48.48 0 000-.7z">
                    </path>
                </svg>
            </span>
        </div>

        <div className={`d-flex flex-column menu-box overflow-auto px-0 py-5 text-capitalize ${collapse}`}>

            <div className={`d-flex flex-column menu-item ${secondcollapse}`}>
            <div className="cursor-pointer d-flex menu-title py-3 align-items-center">
            <span className="flex-grow-1 font-weight-bold" onClick={expand}>Connect with us</span>
            <span className="expand-submenu" onClick={expand}>
                <svg className="svg-closed" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="12" width="28" height="4" rx="2" fill="black">

                    </rect>
                    <rect x="16" width="28" height="4" rx="2" transform="rotate(90 16 0)" fill="black">

                    </rect>
                </svg>
                <svg className="svg-open" width="28" height="4" viewBox="0 0 28 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="4" rx="2" fill="white">

                    </rect>
                </svg>
            </span>
            </div>
            <div className="d-flex flex-column font-weight-bold menu-dropdown">
                <a className="py-3 text-decoration-none" href="/residential">Residential Energy</a>
                <a className="py-3 text-decoration-none" href="/business">Business Energy</a>
            </div>
            </div>

            <div className={`d-flex flex-column menu-item ${thirdcollapse}`}>
                <div className="cursor-pointer d-flex menu-title py-3 align-items-center">
                <span className="flex-grow-1 font-weight-bold" onClick={Secondexpand}>Why us</span>
                <span className="expand-submenu" onClick={Secondexpand}>
                    <svg className="svg-closed" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="12" width="28" height="4" rx="2" fill="black">

                        </rect>
                        <rect x="16" width="28" height="4" rx="2" transform="rotate(90 16 0)" fill="black">

                        </rect>
                    </svg>
                    <svg className="svg-open" width="28" height="4" viewBox="0 0 28 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="4" rx="2" fill="white">

                        </rect>
                    </svg>
                </span>
                </div>
                <div className="d-flex flex-column font-weight-bold menu-dropdown">
                    <a className="py-3 text-decoration-none" href="/about-symbio">About us</a>
                    {/* <a className="py-3 text-decoration-none" href="/history">Our history</a> */}
                    <a className="py-3 text-decoration-none" href="/why-symbio">Why symbio</a>
                </div>
            </div>

            <div className={`d-flex flex-column menu-item ${forthcollapse}`}>
                <div className="cursor-pointer d-flex menu-title py-3 align-items-center">
                <span className="flex-grow-1 font-weight-bold" onClick={Thirdexpand}>Support</span>
                <span className="expand-submenu" onClick={Thirdexpand}>
                    <svg className="svg-closed" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="12" width="28" height="4" rx="2" fill="black">

                        </rect>
                        <rect x="16" width="28" height="4" rx="2" transform="rotate(90 16 0)" fill="black">

                        </rect>
                    </svg>
                    <svg className="svg-open" width="28" height="4" viewBox="0 0 28 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="4" rx="2" fill="white">

                        </rect>
                    </svg>
                </span>
                </div>
                <div className="d-flex flex-column font-weight-bold menu-dropdown">
                    <a className="py-3 text-decoration-none" href="/faqs">FAQs</a>
                    <a className="py-3 text-decoration-none" href="/emergencies">Emergencies</a>
                    {/* <a className="py-3 text-decoration-none" href="/guide">Guides</a> */}
                    <a className="py-3 text-decoration-none" href="/contact">Contact us</a>
                    <a className="py-3 text-decoration-none" href="/blog">Blog</a>
                </div>
            </div>

            <div className={`d-flex flex-column menu-item ${fifthcollapse}`}>
                <div className="cursor-pointer d-flex menu-title py-3 align-items-center">
                <span className="flex-grow-1 font-weight-bold" onClick={Forthexpand}>My account</span>
                <span className="expand-submenu" onClick={Forthexpand}>
                    <svg className="svg-closed" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="12" width="28" height="4" rx="2" fill="black">

                        </rect>
                        <rect x="16" width="28" height="4" rx="2" transform="rotate(90 16 0)" fill="black">

                        </rect>
                    </svg>
                    <svg className="svg-open" width="28" height="4" viewBox="0 0 28 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="4" rx="2" fill="white">

                        </rect>
                    </svg>
                </span>
                </div>
                <div className="d-flex flex-column font-weight-bold menu-dropdown">
                    <a className="py-3 text-decoration-none"  href="https://symbiocustomersportal.co.uk/">Customer portal</a>
                    <a className="py-3 text-decoration-none"  href="https://directdebit.symbioenergy.co.uk/">Setup direct debit</a>
                </div>
            </div>

        </div>
        <div className="d-flex justify-content-end">
            <div className="buttonRect">
                <svg viewBox="0 0 140 60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                style={{enableBackground:"new 0 0 140 60"}} >
                    <defs>
                        <linearGradient id="id-light-temp" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                            <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                            <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                            <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                            <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                        </linearGradient>
                        <filter id="id-glow-temp" x="-40%" y="-40%" width="180%" height="180%">
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                            <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                            <feMerge>
                                <feMergeNode in="coloredBlur"></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>
                    </defs>
                    <g filter="url(#id-glow-temp)">
                        <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                        <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-temp)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                      
                    </g>
                </svg>
                <div style={{ float: "left", position: "relative", top: "-30px"}}>
                Today's Weather
                </div>
                <a href="#" className="link_button">{temp}&#8451;</a>
            </div>
        </div>
    </div>
    </div>   
        </>
    )
}

export default SideMenu
