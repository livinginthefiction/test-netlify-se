import React, {useEffect, useState} from 'react'
import img from '../images/impact-before.jpg'
import img1 from '../images/impact-after.jpg'
import $ from "jquery";

function WhySymbioImageHover() {

    const handleScroll = () => {
        
        if(window.pageYOffset >= document.getElementById('landLife').offsetTop) {
            $('#static-1').animate({
                    Counter: 600
                }, {
                duration: 800,
                easing: 'swing',
                    step: function (now) {
                        $('#static-1').attr('r', Math.ceil(now));
                    }
            });
            
            $('#static-2').animate({
                    Counter: 500
                }, {
                duration: 1000,
                easing: 'swing',
                    step: function (now) {
                        $('#static-2').attr('r', Math.ceil(now));
                    }
            });
            
            $('#static-3').animate({
                    Counter: 650
                }, {
                duration: 1200,
                easing: 'swing',
                    step: function (now) {
                        $('#static-3').attr('r', Math.ceil(now));
                    }
            });
            
            $('#masker').animate({
                    Counter: 450
                }, {
                duration: 1400,
                easing: 'swing',
                    step: function (now) {
                        $('#masker').attr('r', Math.ceil(now));
                    }
            });
        }
    }
 
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    

    const [dotCX, setdotCX] = useState('1337.3009033203125');
    const [dotCY, setdotCY] = useState('314.33837890625');
    const [maskCX, setmaskCX] = useState('1337.3009033203125');
    const [maskCY, setmaskCY] = useState('314.33837890625');
 

        const handleCursor = (e) => {
            let m = oMousePosSVG(e);
            setmaskCX(m.x);
            setmaskCY(m.y);
            setdotCX(m.x);
            setdotCY(m.y);
          }

        function oMousePosSVG(e) {
            var first = document.getElementById('first');
            var p = first.createSVGPoint();
            p.x = e.clientX;
            p.y = e.clientY;
            var ctm = first.getScreenCTM().inverse();
             p =  p.matrixTransform(ctm);
            return p;
        }

        useEffect(() => {
            window.addEventListener('mousemove', handleCursor);
        },[]);

    return(
        <>
           <section id="landLife" className="position-relative w-100">
                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="100%" height="949.375" viewBox="0 0 1920 1200" className="home-intro-svg">
                    <defs>
                        <radialGradient id="maskGradient">
                            <stop offset="80%" stopColor="#fff"></stop>
                            <stop offset="100%" stopColor="#000"></stop>
                            </radialGradient>
                            <mask id="mouse-mask">
                                <circle id="masker" r="350" fill="url(#maskGradient)" cx={maskCX} cy={maskCY}></circle>
                            </mask>
                            <mask id="static-mask-1">
                                <circle id="static-1" r="600" fill="url(#maskGradient)" cx="10%" cy="10%"></circle>
                            </mask>
                            <mask id="static-mask-2">
                                <circle id="static-2" r="500" fill="url(#maskGradient)" cx="40%" cy="30%"></circle>
                            </mask>
                            <mask id="static-mask-3">
                                <circle id="static-3" r="650" fill="url(#maskGradient)" cx="20%" cy="55%"></circle>
                            </mask>
                    </defs>
                    <image id="before" href={img} x="0" y="0" width="100%" height="1200"></image>
                    <g id="mask-reveal" mask="url(#mouse-mask)">
                        <image id="after" href={img1} x="0" y="0" width="100%" height="1200"></image>
                    </g>
                    <g mask="url(#static-mask-1)">
                        <image href={img1} x="0" y="0" width="100%" height="1200"></image>
                    </g>
                    <g mask="url(#static-mask-2)">
                        <image href={img1} x="0" y="0" width="100%" height="1200"></image>
                    </g>
                    <g mask="url(#static-mask-3)">
                        <image href={img1} x="0" y="0" width="100%" height="1200"></image>
                    </g>
                    <circle id="dot" r="6" fill="#ebf2e3" cx={dotCX} cy={dotCY}></circle>
                </svg>
                <svg id="first" width="100%" height="949.375" viewBox="0 0 1920 1200" className="text-svg">
                    <defs>
                        <mask id="text-mask" x="0" y="0" width="100" height="100">
                            <text x="8%" y="30%" fill="white" className="impact-text row-1">MAKE AN</text>
                            <text x="8%" y="45%" fill="white" className="impact-text row-2">IMPACT WITH</text>
                            <text x="8%" y="60%" fill="white" className="impact-text row-3">SYMBIO</text>
                        </mask>
                    </defs>
                    <g mask="url(#text-mask)">
                        <image id="text-before" href={img} x="0" y="0" width="100%" height="1200"></image>
                    </g>
                </svg>
</section> 
        </>
    )

}

export default WhySymbioImageHover