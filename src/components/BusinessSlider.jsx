import React from 'react'
// import { Swiper } from 'swiper'
import vid from '../videos/world-home_1080.mp4'
import img2 from '../images/slider-img/slide-2.jpg'
import img3 from '../images/slider-img/slide-3.jpg'
import { Helmet } from 'react-helmet'


function BusinessSlider() {
    
    return (
        <>
            <section className="py-5 px-3 padding-left-responsive px-lg-5 pl-xl-5 slider-container">

<div className="blog-slider">
    <div className="blog-slider__wrp swiper-wrapper">
      <div className="blog-slider__item swiper-slide">
        <div className="blog-slider__img">
          <video autoPlay playinline="true" muted src="./assets/videos/world-home_1080.mp4" controls ></video>
         
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">26 December 2019</span>
          <div className="blog-slider__title">Lorem Ipsum Dolor</div>
          <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
          
          <div className="buttonRect">
            <svg viewBox="0 0 140 60" version="1.1"  x="0px" y="0px"
             >
                <defs>
                    <linearGradient id="id-light-3" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                        <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                        <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                        <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                        <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                    </linearGradient>
                    <filter id="id-glow-3" x="-40%" y="-40%" width="180%" height="180%">
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="coloredBlur"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#id-glow-3)">
                    <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                    <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-3)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                   
                </g>
            </svg>
            <a className="link_button px-5 py-3 font-size-1pt2rem" href="#">Get Quote</a>
        </div>
        </div>
      </div>
      <div className="blog-slider__item swiper-slide">
        <div className="blog-slider__img">
          <img src="./assets/img/slider-img/slide-2.jpg" alt="" />
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">26 December 2019</span>
          <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
          <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
          
          <div className="buttonRect">
            <svg viewBox="0 0 140 60" version="1.1"  x="0px" y="0px"
             >
                <defs>
                    <linearGradient id="id-light-4" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                        <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                        <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                        <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                        <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                    </linearGradient>
                    <filter id="id-glow-4" x="-40%" y="-40%" width="180%" height="180%">
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="coloredBlur"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#id-glow-4)">
                    <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                    <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-4)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                    
                </g>
            </svg>
            <a className="link_button px-5 py-3 font-size-1pt2rem" href="#">Get Quote</a>
        </div>
        </div>
      </div>
      
      <div className="blog-slider__item swiper-slide">
        <div className="blog-slider__img">
          <img src="./assets/img/slider-img/slide-3.jpg" alt="" />
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">26 December 2019</span>
          <div className="blog-slider__title">Lorem Ipsum Dolor</div>
          <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
         
          <div className="buttonRect">
            <svg viewBox="0 0 140 60" version="1.1"  x="0px" y="0px"
             >
                <defs>
                    <linearGradient id="id-light-5" x1="0" y1="0.8" x2="1" y2="0.2" spreadMethod="pad">
                        <stop offset="0" stopColor="black" stopOpacity="1"></stop>
                        <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                        <stop offset="90%" stopColor="black" stopOpacity="0"></stop>
                        <stop offset="100%" stopColor="black" stopOpacity="1"></stop>
                    </linearGradient>
                    <filter id="id-glow-5" x="-40%" y="-40%" width="180%" height="180%">
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="coloredBlur"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#id-glow-5)">
                    <path className="border" width="100%" height="100%" fill="transparent" stroke="rgba(69, 114, 211, 0.3)" strokeWidth="1" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                    <path className="light" width="100%" height="100%" fill="transparent" stroke="url(#id-light-5)" strokeWidth="2" d="M134.9,37.4c0,9.4-7.6,16.9-16.9,16.9H36.7H6.9V35.8V23.1c0-9.4,7.6-16.9,16.9-16.9h82.9h28.2v18.8V37.4z"/>
                   
                </g>
            </svg>
            <a className="link_button px-5 py-3 font-size-1pt2rem" href="#">Get Quote</a>
        </div>
        </div>
      </div>
      
    </div>
    <div className="blog-slider__pagination"></div>
  </div>
</section>
                <Helmet>
                {/* <script src="./js/swiper.min.js"></script> */}
            {/* <script src="./js/imagesloaded.pkgd.min.js"></script>
            <script src="./js/anime.min.js"></script>
            <script src="./js/main.js"></script>*/}
            {/* <script src="./js/business.js"></script>  */}
                </Helmet>
             
        </>
    )
}

export default BusinessSlider
