import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function FaqCategory(prop) {
    return (
        <>
            <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3 mb-3">Frequently Asked Questions</h1>
            <h5 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif px-3 my-2">Browse FAQ categories</h5> 
            <div className="categories-box col-xl-7 d-flex justify-content-between m-auto py-5 flex-wrap">
            {prop.data.map((value,key)=>{return(
                <div key={'faqSection'+key} className="align-items-center d-flex my-1 mx-2">
                    <a href={'#section'+key} className="d-flex justify-content-between">
                        {ReactHtmlParser(value.img)}
                        <span>{value.name}</span>
                    </a>
                </div>
            ) })}
        </div>  
        </>
    )
}

export default FaqCategory
