import React from 'react'
import {Helmet} from "react-helmet"

function Prasad() {
    return (
        <>
            <Helmet>   
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css' />
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css' />
            {/* <link rel="stylesheet" href="temp/style.css" type="text/css" /> */}
            
            <script defer src="temp/script.js"></script>
            </Helmet>
            <div className="owl-carousel owl-theme">
  <div className="owl-slide d-flex align-items-center cover" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/owlcarousel1.jpg)"}}>
    <div className="container">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-10 col-md-6 static">
          <div className="owl-slide-text">
            <h2 className="owl-slide-animated owl-slide-title">The bedding was hardly able to cover it</h2>
            <div className="owl-slide-animated owl-slide-subtitle mb-3">
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.
            </div>
            <a className="btn btn-primary owl-slide-animated owl-slide-cta" href="https://unsplash.com/photos/pgR4yBMjum8" target="_blank" role="button">See Original Image</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="owl-slide d-flex align-items-center cover" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/owlcarousel2.jpg)"}}>
    <div className="container">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-10 col-md-6 static">
          <div className="owl-slide-text">
            <h2 className="owl-slide-animated owl-slide-title">Samsa was a travelling salesman.</h2>
            <div className="owl-slide-animated owl-slide-subtitle mb-3">
              It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather.
            </div>
            <a className="btn btn-primary owl-slide-animated owl-slide-cta" href="https://unsplash.com/photos/Ijx8OxvKrgM" target="_blank" role="button">See Original Image</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="owl-slide d-flex align-items-center cover" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/owlcarousel3.jpg)"}}>
    <div className="container">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-10 col-md-6 static">
          <div className="owl-slide-text">
            <h2 className="owl-slide-animated owl-slide-title">A collection of textile samples.</h2>
            <div className="owl-slide-animated owl-slide-subtitle mb-3">
              He lay on his armour-like back, and if he lifted his head a little he could see his brown belly.
            </div>
            <a className="btn btn-primary owl-slide-animated owl-slide-cta" href="https://unsplash.com/photos/7uwbhGSH5Fg" target="_blank" role="button">See Original Image</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
)
}

export default Prasad