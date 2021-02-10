import React from 'react'

export default function Promise(prop) {
    // console.log(prop.data);
    return (
        <>
            <section className="py-5">
                <h1 className="font-family-san-serif font-size-3pt5rem font-weight-bolder mb-5 text-center text-capitalize text-dark px-3">
                    {(prop.data.stampSectionTitle)?(prop.data.stampSectionTitle):(prop.data.stampSectionTitle2)}</h1>
                    
                <div className="clearfix col-12 col-sm-12 col-md-12 col-lg-10 col-xl-9 m-auto our_promises text-dark">
                {(prop.data.stampData)?(
                    prop.data.stampData.map((value,key)=>{return(
                        <div key={'stamp'+key} className="col-6 col-lg-3 col-md-3 col-sm-6 col-xl-3 float-left p-2 pb-4 pb-sm-2 pb-md-2 pb-lg-2 pb-xl-2 text-center">
                            <img src={localStorage.getItem('baseUrl')+value.stampLink} alt={value.stampAltText} className="mb-3" />
                    <p className="xyz"><strong>{value.stampBgText}</strong></p>
                        </div>    
                    ) })
                ):(
                    prop.data.stampData2.map((value1,key1)=>{return(
                        <div key={key1} className="col-6 col-lg-3 col-md-3 col-sm-6 col-xl-3 float-left p-2 pb-4 pb-sm-2 pb-md-2 pb-lg-2 pb-xl-2 text-center">
                                    <img src={localStorage.getItem('baseUrl')+value1.stampLink2} alt={value1.stampAltText2} className="mb-3" />
                                    <p className="xyz"><strong>{value1.stampBgText2}</strong></p>
                                    <p>{value1.stampBgDesc2}</p>
                        </div>
                    ) })
                )}
                    </div>
            </section>  
        </>
    )
}