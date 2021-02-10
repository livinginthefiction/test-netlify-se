import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function FaqSection(prop) {
    return (
        <>
            <div id={prop.sectionId} className="col-12 py-5">
                <h5 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif px-3 my-2">{prop.data.name}</h5>
                <div className="py-2">
                    {prop.data.content.map((value,key)=>{return(
                         <div key={value.id} className="card bg-transparent">
                         <div className="card-header border-0 bg-transparent" id={'faq'+value.id}>
                             <h5 className="header-link mb-0">
                             <button className="align-items-center btn d-flex emerald-green font-size-1pt4rem position-relative px-0 text-left w-100" data-toggle="collapse" data-target={'#collapse'+value.id} aria-expanded="true" aria-controls={'collapse'+value.id}>
                    <span>{key+1}. {value.question}</span>
                                 <svg className="svg-closed" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <rect x="15" width="2" height="32" rx="1" fill="#59BAB0"></rect>
                                     <rect y="15" width="32" height="2" rx="1" fill="#59BAB0"></rect>
                                 </svg>
                                 <svg className="svg-open" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <rect y="15" width="32" height="2" rx="1" fill="#59BAB0"></rect>
                                 </svg>
                             </button>
                             </h5>
                         </div>
                     
                         <div id={'collapse'+value.id} className="collapse show" aria-labelledby={'faq'+value.id} data-parent={'#'+prop.sectionId}>
                    <div className="card-body">{ReactHtmlParser(value.answer)}</div>
                         </div>
                         </div>
                    ) })}
                    {/* <div className="card bg-transparent">
                    <div className="card-header border-0 bg-transparent" id="headingOne">
                        <h5 className="header-link mb-0">
                        <button className="align-items-center btn d-flex emerald-green font-size-1pt4rem position-relative px-0 text-left w-100" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span>A. WILL MY ENERGY SUPPLY BE AFFECTED?</span>
                            <svg className="svg-closed" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="15" width="2" height="32" rx="1" fill="#50c878"></rect>
                                <rect y="15" width="32" height="2" rx="1" fill="#50c878"></rect>
                            </svg>
                            <svg className="svg-open" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="15" width="32" height="2" rx="1" fill="#50c878"></rect>
                            </svg>
                        </button>
                        </h5>
                    </div>
                
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#COVID_19_questions">
                        <div className="card-body">
                        No, there’s no reason to worry about your supply. We’re taking lots of steps to make sure it’s protected.
                        </div>
                    </div>
                    </div>
                    <div className="card bg-transparent">
                    <div className="card-header border-0 bg-transparent" id="headingTwo">
                        <h5 className="header-link mb-0">
                        <button className="align-items-center btn d-flex emerald-green font-size-1pt4rem position-relative px-0 text-left w-100 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span>B. HOW DO I GET IN TOUCH DURING OUR CURRENT PANDEMIC?</span>
                            <svg className="svg-closed" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="15" width="2" height="32" rx="1" fill="#50c878"></rect>
                                <rect y="15" width="32" height="2" rx="1" fill="#50c878"></rect>
                            </svg>
                            <svg className="svg-open" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="15" width="32" height="2" rx="1" fill="#50c878"></rect>
                            </svg>
                        </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#COVID_19_questions">
                        <div className="card-body">
                            Business as usual. However, please feel free to make contact with us using your online account or app to manage your account. You can use it to check your energy usage and bills as well as submit meter readings.
                        </div>
                    </div>
                    </div>
                    <div className="card bg-transparent">
                    <div className="card-header border-0 bg-transparent" id="headingThree">
                        <h5 className="header-link mb-0">
                        <button className="align-items-center btn d-flex emerald-green font-size-1pt4rem position-relative px-0 text-left w-100 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <span>C. HOW WILL OUR SERVICE BE AFFECTED BY CORONAVIRUS?</span>
                            <svg className="svg-closed" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="15" width="2" height="32" rx="1" fill="#50c878"></rect>
                                <rect y="15" width="32" height="2" rx="1" fill="#50c878"></rect>
                            </svg>
                            <svg className="svg-open" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="15" width="32" height="2" rx="1" fill="#50c878"></rect>
                            </svg>
                        </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#COVID_19_questions">
                        <div className="card-body">
                            Business as usual but on the odd occasion things might take a little longer.
                        </div>
                    </div>
                    </div> */}
                </div>
            </div>   
        </>
    )
}

export default FaqSection
