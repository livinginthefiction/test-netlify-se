import React from 'react'
import {Helmet} from "react-helmet";
 
function GuideSlider(props) {
     
    return (
        <>
            <Helmet>
        <title>test</title>
        <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
        <script defer src="js/guide.js"></script>
      </Helmet>
            <section className="py-5 guide-left-padding">
                <h1 className="font-family-san-serif font-weight-bolder mb-4 text-center text-xl-left text-capitalize text-dark px-3 px-xl-0">{props.title}</h1>
                <div className="bxslider" >
                    {props.content.map((value,key)=>{
                        return <img key={key} src={localStorage.getItem('baseUrl')+value.image} title={value.title}  />})}
                </div>
            </section>   
        </>
    )
}

export default GuideSlider