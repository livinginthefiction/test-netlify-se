import React,{useEffect, useState} from 'react'
import appStore from '../images/appStore.png'
import playStore from '../images/playStore.png'


function SymbioApp(prop) {
    // console.log(prop.section);

    // const [move, setMove] = useState({transform: 'matrix(1,0,0,1,0,0)'});

  // useEffect(() => {
    
    // var parallaxBox = document.getElementById ( 'box2' );
    // var c1left = document.getElementById ( 'l5' ).offsetLeft,
    // c1top = document.getElementById ( 'l5' ).offsetTop,
    // c2left = document.getElementById ( 'l6' ).offsetLeft,
    // c2top = document.getElementById ( 'l6' ).offsetTop;
    
    // parallaxBox.onmousemove = function ( event ) {
    //     event = event || window.event;
    //     var x = event.clientX - parallaxBox.offsetLeft,
    //     y = event.clientY - parallaxBox.offsetTop;
    
        //mouseParallax ( 'l5', c1left, c1top, x, y, 15 );
        //mouseParallax ( 'l6', c2left, c2top, x, y, 15 );
    //}
    
    // circleClick(1);
//},[]);



    function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
        var obj = document.getElementById ( id );
        var parentObj = obj.parentNode,
        containerWidth = parseInt( parentObj.offsetWidth ),
        containerHeight = parseInt( parentObj.offsetHeight );
        obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
        obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
    }

    // circleClick(1);

    return(
        <>
        {/* <section className="overflow-hidden">
            <div className="highlight highlight--not-full-height queen-proof act2">
                <div className="container-fluid" id="box2">
                    <div className="row justify-content-center justify-content-lg-start">
                        <div className="col-11 col-lg-6 col-xl-5 offset-xl-1" >
                            <div className="pic_small-wrap-left text-center">
                                <div id="l5" data-parallax-background=""
                                        style={{transform: "rotateY(-1.7133deg) rotateX(2.6061deg) translateX(2.8555px) translateY(4.3435px) translateZ(-30px)"}}>
                                        <div className="pic_big-background"></div>
                                </div>
                                <img id="l6" src={localStorage.getItem('baseUrl')+prop.data.appLink} alt={prop.data.appAltText} className="pic_big" /> 
                            </div>
                        </div>
                        <div className="col-11 col-lg-6 col-lg-6 col-xl-5">
                            <div className="highlight__text highlight__text--small">
                                <h3 className="highlight__text-title font-family-san-serif font-size-3pt5rem font-weight-bolder text-capitalize">Symbio Energy <br /> Mobile App</h3>
                                <div className="highlight__info font-family-san-serif">
                                    <p>{prop.data.appText}</p>
                                    <div className="row">
                                        <div className="col-md-6"><a href="https://apps.apple.com/gb/app/symbio/id1497548813"><img src={appStore} alt="Download Symbio Energy App at App store" /></a></div>
                                        <div className="col-md-6"><a href="https://play.google.com/store/apps/details?id=com.symbioenergy.symbio"><img src={playStore} alt="Download Symbio Energy app at Google pay" /></a></div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

<section className="pb-5">
            <div className="highlight highlight--not-full-height queen-proof act2">
                <div className="container-fluid" id="box2">
                    <div className="row justify-content-center justify-content-lg-start">
                        <div className="col-11 col-lg-6 col-xl-5 mt-5 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 offset-xl-1">
                            <div className="pic_small-wrap-left text-center">

                                <div id="l5" data-parallax-background=""
                                        style={{transform: "rotateY(-1.7133deg) rotateX(2.6061deg) translateX(2.8555px) translateY(4.3435px) translateZ(-30px)"}}>
                                        <div className="pic_big-background"></div>
                                </div>
                                <img id="l6" src={localStorage.getItem('baseUrl')+prop.data.appLink} alt={prop.data.appAltText} className="pic_big" />
                            </div>
                        </div>
                        <div className="col-11 col-lg-6 col-lg-6 col-xl-5 mb-5 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0">
                            <div className="highlight__text highlight__text--small">
    <h3 className="highlight__text-title font-family-san-serif font-size-3pt5rem font-weight-bolder text-capitalize">Symbio Energy <br /> Mobile App</h3>
                                <div className="highlight__info font-family-san-serif">
                                    <p>{prop.data.appText}</p>
                                    <div className="row">
                                        <div className="col-md-6"><a href="https://apps.apple.com/gb/app/symbio/id1497548813"><img src={appStore} alt="Download Symbio Energy App at App store" /></a></div>
                                        <div className="col-md-6"><a href="https://play.google.com/store/apps/details?id=com.symbioenergy.symbio"><img src={playStore} alt="Download Symbio Energy app at Google pay" /></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
</>
    );

}

export default SymbioApp