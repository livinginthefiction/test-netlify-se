import React from 'react'
import '../css/three.css'
import {Helmet} from "react-helmet"

function ThreeSlider() {
    return (
        <>
        <div id="three-container"></div>
        <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r75/three.min.js"></script>
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
        <script defer src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/bas.js"></script>
        <script defer src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/OrbitControls-2.js"></script>        
        <script defer src="threeJs/three.js"></script>
        </Helmet>
        </>
    )
}

export default ThreeSlider
