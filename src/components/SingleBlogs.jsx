import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function SingleBlogs(props) {

    return(
        <>
        <section className="p-1 p-lg-5 p-xl-5 py-5 w-100 clearfix">
            <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3 mb-3">{props.data.name}</h1>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 pull-left movingImg pt-5">
                <img src={localStorage.getItem('baseUrl')+(JSON.parse(props.data.image).link)} alt={(JSON.parse(props.data.image).altImage)} className="w-100" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 pull-left pt-5">
                <div className="clearfix col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-dark">
                   {ReactHtmlParser(props.data.description)}
                </div>
            </div>
        </section>
        </>
    )
}

export default SingleBlogs