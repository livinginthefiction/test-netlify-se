import React from 'react'
import ReactHtmlParser from 'react-html-parser'
// import revolution from '../images/slider-img/symbio-revolution.jpg'

function Case(prop) {
    console.log(prop.data);
    return (
        <div className="container">
            <section className="py-5">
                <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3">{prop.data.name}</h1>
            </section> 
            <section className="py-3 case-study-left-padding pull-left">
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pull-left" style={{float: 'inherit'}}>{ReactHtmlParser(prop.data.description)}</div>
              
                
            </section>
        </div>
    )
}

export default Case
