import React from 'react'

function AboutSymbio(props){
    return (
        <>
            <section className="py-5 px-3 padding-left-responsive px-lg-5 pl-xl-5 slider-container">
                <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3 mb-3">{props.data.mainaboutusSectionTitle}</h1>
                <div className="col-12 col-md-10 col-lg-8 col-xl-8 m-auto my-4">
                    <p className="text-center">{props.data.mainaboutusDesc}</p>
                <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-center mt-4">
                    <video width="100%" loop={true} playsInline autoPlay="autoplay" controls muted>
                        <source src={localStorage.getItem('baseUrl')+props.data.mainSectionLink} type="video/mp4" />
                                This browser doesn't support video tag.
                    </video> 
                </div>
                </div>
            </section>
        </>
    )
}

export default AboutSymbio