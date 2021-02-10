import React from 'react'

function BusinessFeatures(prop) {
    return (
        <>
            <section className="p-1 p-lg-5 p-xl-5 py-5 section-afterbr">
            <br></br>
                <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-center">
                    <div className="feature-sec justify-content-center p-2 p-sm-4 p-xl-5">
                        <div className="clearfix col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 our_promises2 text-dark">
                            {prop.features.stampData.map((value,key)=>{return(
                                    <div key={key} className="col-12 col-lg-6 col-md-6 col-sm-12 col-xl-6 float-left p-2 pb-4 pb-lg-2 pb-md-2 pb-sm-2 pb-xl-2">
                                        <img src={localStorage.getItem('baseUrl')+value.stampLink} alt={value.stampAltText} className="mb-3"/>
                                        <p className="font-weight-bold">{value.stampBgText}</p>
                                        <p>{value.stampBgDesc}</p>
                                    </div>
                             ) })}
                            </div>
                    </div>
                    <div className="align-items-center d-flex flex-basis-0 flex-grow-1 flex-shrink-0 justify-content-center py-5 text-center">
                        <img src={localStorage.getItem('baseUrl')+prop.features.stampRightSectionImage} alt={prop.features.stampRightSectionImageAltText} className="img-rect"/>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default BusinessFeatures
