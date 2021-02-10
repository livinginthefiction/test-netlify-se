import React,{useEffect} from 'react'

function ImageHover() {
    useEffect(() => {
    var parallaxBox = document.getElementById ( 'box' );
    // var parallaxBox1 = document.getElementById ( 'box1' );
    var c1left = document.getElementById ( 'l1' ).offsetLeft;
    var c1top = document.getElementById ( 'l1' ).offsetTop;
    var c2left = document.getElementById ( 'l2' ).offsetLeft;
    var c2top = document.getElementById ( 'l2' ).offsetTop;
    var c3left = document.getElementById ( 'l3' ).offsetLeft;
    var c3top = document.getElementById ( 'l3' ).offsetTop;
    var c4left = document.getElementById ( 'l4' ).offsetLeft;
    var c4top = document.getElementById ( 'l4' ).offsetTop;
    

    parallaxBox.onmousemove = function ( event ) {
        event = event || window.event;
        var x = event.clientX - parallaxBox.offsetLeft,
        y = event.clientY - parallaxBox.offsetTop;
    
        mouseParallax ( 'l1', c1left, c1top, x, y, 5 );
        mouseParallax ( 'l2', c2left, c2top, x, y, 15 );
        mouseParallax ( 'l3', c3left, c3top, x, y, 30 );
        mouseParallax ( 'l4', c4left, c4top, x, y, 45 );
    }
    // parallaxBox1.onmousemove = function ( event ) {
    //     event = event || window.event;
    //     var x = event.clientX - parallaxBox1.offsetLeft,
    //     y = event.clientY - parallaxBox1.offsetTop;

    //     mouseParallax ( 'l5', c5left, c5top, x, y, 5 );
    //     mouseParallax ( 'l6', c6left, c6top, x, y, 15 );
    //     // mouseParallax ( 'l7', c7left, c7top, x, y, 30 );
    //     // mouseParallax ( 'l8', c8left, c8top, x, y, 45 );
    // }
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
        <>
            <section className="overflow-hidden py-5">
                <div className="highlight highlight--not-full-height queen-proof">
                    <div className="container-fluid" id="box">
                        <div className="row justify-content-center justify-content-lg-start">
                            <div className="col-11 col-lg-6 col-xl-5 offset-xl-1">
                                <div className="pic_small-wrap-left">

                                    <div id="l1" data-parallax-background=""
                                            style={{transform: "rotateY(-1.7133deg) rotateX(2.6061deg) translateX(2.8555px) translateY(4.3435px) translateZ(-30px)"}}>
                                            <div className="pic_big-background"></div>
                                    </div>
                                    <img id="l2" src="https://www.symbioenergy.co.uk/wp-content/uploads/2020/04/business-road.jpg" alt="Gas" className="pic_big"/>

                                </div>
                            </div>
                            <div className="col-11 col-lg-6 col-lg-6 col-xl-5">
                                <div className="highlight__text highlight__text--small">
                                    <h3 className="highlight__text-title font-family-san-serif">Gas Provider</h3>
                                    <div className="highlight__info font-family-san-serif">
                                        <p>
                                            COMPRA O 4-PACK DO MIGUEL OLIVEIRA E HABILITA-TE A PASSAR UM DIA COM ELE. VÊ TODOS OS
                                            PRÉMIOS QUE PODES GANHAR.
                                        </p>
                                    </div> <a href="#" 
                                        className="highlight__info-button button _red">
                                        <div className="button__inner">
                                            Get Quote
                                        </div>
                                    </a>
                                    <div className="pic_small-wrap">
                                        <div id="l3" data-parallax-background=""
                                        style={{transform: "rotateY(-1.7133deg) rotateX(2.6061deg) translateX(2.8555px) translateY(4.3435px) translateZ(-30px)"}}>
                                        <div className="pic_small-background"></div>
                                </div>
                                <img id="l4" src="https://mo88.redbull.com/landingpage/img/transition-image-right.png" alt="Redbull - 4 pack" className="pic_small"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default ImageHover
