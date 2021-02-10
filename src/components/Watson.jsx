import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import speechBubble from '../images/icons-speechbubble.svg'
import bot from '../images/bot.gif'

function Watson() {
       
    const [scrollPosition, setSrollPosition] = useState('');
    const [scrollPosition1, setSrollPosition1] = useState('');
    const [scrollPosition2, setSrollPosition2] = useState('');
    const [scrollPosition3, setSrollPosition3] = useState('');

    const handleScroll = () => {
        var botBox = document.getElementById('botBox').offsetTop;
        var postin = (window.innerWidth >= 1920)?(window.pageYOffset+200):(window.pageYOffset);
        if(postin >= botBox) {
            setSrollPosition('bot-load');
            setTimeout(() => { setSrollPosition1('bot-load'); }, 2000);
            setTimeout(() => { 
                setSrollPosition2('bot-load'); 
                var a = document.querySelector('.speechbubble-1');
                a.setAttribute("style", "opacity:none, height : 0"); }, 3000);
            setTimeout(() => { setSrollPosition3('bot-load'); }, 4000);
        }
}

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <section id="botBox" className="bot_box mt-5 overflow-hidden pt-4">
            <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3">Ask Vision</h1>
            <div className="bot-section">
                <div className="bot-container text-dark">
                {/* <div className="bot-avatar-container">
                <img src={bot} alt="the Watson" className="objectfitimg" />
                </div> */}
                <div className="bot-message-container">
                
                <div className={`bot-speechbubble-container speechbubble-1 ${scrollPosition}`}>
                <div className="bot-speechbubble">
                <div>Hey👋🏼</div>
                <img src={speechBubble} alt="" className="bot-speechbubble-icon" />
                </div>
                </div>
                
                <div className={`bot-speechbubble-container speechbubble-2 ${scrollPosition1}`}>
                    <div className="bot-speechbubble">
                        <div>my name is Vision</div>
                        <img src={speechBubble} alt="Starbot speech bubble" className="bot-speechbubble-icon" />
                    </div>
                </div>
                
                <div className={`bot-speechbubble-container speechbubble-3 ${scrollPosition2}`}>
                    <div className="bot-speechbubble">
                        <div className="text-block-2">Let me help you to find what you need.</div>
                        <img src={speechBubble} alt="" className="bot-speechbubble-icon" />
                    </div>
                </div>   
                
                </div>
                </div>
                
                <div className="bot-cta-container">
                <NavLink to="/contact" className={`bot-cta-button ${scrollPosition3}`}>Talk to Vision now</NavLink>
                </div>
                
                </div>
</section>

    );
    
}

export default Watson
