import React,{useEffect,useState} from 'react'

function SymbioGas(prop) {
    // const [gasQuote, setgasQuote] = useState('https://symbiogetquote.co.uk/?utility=gas&postcode=');

    // function getPincode(params) {setgasQuote ('https://symbiogetquote.co.uk/?utility=gas&postcode='+params.target.value);}
    
    // console.log(prop.data);
   //ParallaxBox
   useEffect(() => {
    var parallaxBox = document.getElementById ( 'box1' );
    var c1left = document.getElementById ( 'l3' ).offsetLeft,
    c1top = document.getElementById ( 'l3' ).offsetTop,
    c2left = document.getElementById ( 'l4' ).offsetLeft,
    c2top = document.getElementById ( 'l4' ).offsetTop;
    
    parallaxBox.onmousemove = function ( event ) {
        event = event || window.event;
        var x = event.clientX - parallaxBox.offsetLeft,
        y = event.clientY - parallaxBox.offsetTop;
    
        //mouseParallax ( 'l3', c1left, c1top, x, y, 15 );
        //mouseParallax ( 'l4', c2left, c2top, x, y, 15 );
    }
    

});

    function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
        var obj = document.getElementById ( id );
        var parentObj = obj.parentNode,
        containerWidth = parseInt( parentObj.offsetWidth ),
        containerHeight = parseInt( parentObj.offsetHeight );
        obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
        obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
    }

    return (
        <section className="pb-5">
            <div className="highlight highlight--not-full-height queen-proof act">
                <div className="container-fluid" id="box1">
                    <div className="row justify-content-center justify-content-lg-start">
                        <div className="col-11 col-lg-6 col-xl-5 mt-5 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 offset-xl-1">
                            <div className="pic_small-wrap-left text-center">

                                <div id="l3" data-parallax-background=""
                                        style={{transform: "rotateY(-1.7133deg) rotateX(2.6061deg) translateX(2.8555px) translateY(4.3435px) translateZ(-30px)"}}>
                                        <div className="pic_big-background"></div>
                                </div>
                                <img id="l4" src={localStorage.getItem('baseUrl')+prop.data.providerLink} alt="Gas" className="pic_big" />
                            </div>
                        </div>
                        <div className="col-11 col-lg-6 col-lg-6 col-xl-5 mb-5 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0">
                            <div className="highlight__text highlight__text--small">
    <h3 className="highlight__text-title font-family-san-serif font-size-3pt5rem font-weight-bolder text-capitalize">{prop.data.providerSectionTitle}</h3>
                                <div className="highlight__info font-family-san-serif">
                                    <p>{prop.data.providerText}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SymbioGas