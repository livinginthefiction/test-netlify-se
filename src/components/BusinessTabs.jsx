import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function BusinessTabs(props) {
    return (
        <>
            <section className="py-1 py-lg-5 py-xl-5">
                <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3 mb-3">{props.tabs.planSectionTitle}</h1>
                <div id="accordion" className="col-12 col-xl-8 m-auto">
                    <div className="bg-transparent border-0 card">
                    <div className="bg-transparent border-0 card-header d-flex justify-content-around p-0 py-5">
                        <span id="headingOne">
                            <button className="btn p-1 switch-button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <svg className="mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2929 35.4853C13.9024 35.0948 13.9024 34.4616 14.2929 34.0711L22.0711 26.2929C22.4616 25.9024 23.0948 25.9024 23.4853 26.2929C23.8758 26.6834 23.8758 27.3166 23.4853 27.7071L15.7071 35.4853C15.3166 35.8758 14.6834 35.8758 14.2929 35.4853Z"></path>
                                    <path d="M20.2929 34.1214C19.9024 34.5119 19.9024 35.1451 20.2929 35.5356C20.6834 35.9261 21.3166 35.9261 21.7071 35.5356L24.5355 32.7071C24.9261 32.3166 24.9261 31.6835 24.5355 31.2929C24.145 30.9024 23.5119 30.9024 23.1213 31.2929L20.2929 34.1214Z"></path>
                                    <path d="M12.2929 31.5356C11.9024 31.1451 11.9024 30.5119 12.2929 30.1214L15.1213 27.2929C15.5118 26.9024 16.145 26.9024 16.5355 27.2929C16.9261 27.6835 16.9261 28.3166 16.5355 28.7071L13.7071 31.5356C13.3166 31.9261 12.6834 31.9261 12.2929 31.5356Z"></path>
                                    <path d="M33 30C33 30.5523 32.5523 31 32 31C31.4477 31 31 30.5523 31 30C31 29.4477 31.4477 29 32 29C32.5523 29 33 29.4477 33 30Z"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.05812 16.3359C5.99701 16.1647 5.98225 15.9767 6.02163 15.7922C6.03776 15.7159 6.06258 15.6428 6.09501 15.574L10.0767 6.61537C10.0997 6.56013 10.1275 6.50739 10.1597 6.45768C10.2348 6.34094 10.3317 6.24394 10.4425 6.16973C10.6123 6.05591 10.8148 5.99569 11.0213 6.00001H36.9772C37.0332 5.99875 37.089 6.00224 37.1439 6.01028C37.4276 6.05178 37.6881 6.21444 37.8469 6.46805C37.8762 6.51452 37.9017 6.56356 37.9231 6.61477L41.905 15.574C41.9375 15.6429 41.9624 15.7162 41.9785 15.7927C41.9916 15.8541 41.9986 15.9159 42 15.9774V15.8543L42.0004 15.8562C42.0658 16.1498 42.0449 16.435 42.0231 16.7325C42.0119 16.886 42.0004 17.0429 42.0004 17.2059C42.0004 19.0659 41.208 20.7212 39.976 21.7814C39.9917 21.8518 40 21.9249 40 22V40H41C41.5523 40 42 40.4477 42 41C42 41.5523 41.5523 42 41 42H7.00001C6.44772 42 6.00001 41.5523 6.00001 41C6.00001 40.4477 6.44772 40 7.00001 40H8.00001L8.00001 22C8.00001 21.9297 8.00727 21.861 8.02108 21.7948C6.79177 20.7352 6.00001 19.0738 6.00001 17.2059C6.00001 16.9102 6.01984 16.6197 6.05812 16.3359ZM33.5269 17H40.0041C40.0019 17.0652 40.0004 17.1342 40.0004 17.2059C40.0004 19.4956 38.3655 21 36.7614 21C35.1574 21 33.5225 19.4956 33.5225 17.2059C33.5225 17.1365 33.524 17.0679 33.5269 17ZM31.4817 17H25.0045C25.0015 17.0679 25 17.1365 25 17.2059C25 19.4956 26.6349 21 28.239 21C29.8431 21 31.478 19.4956 31.478 17.2059C31.478 17.1342 31.4794 17.0652 31.4817 17ZM16.4009 17H22.8781C22.8759 17.0652 22.8745 17.1342 22.8745 17.2059C22.8745 19.4956 21.2396 21 19.6355 21C18.0314 21 16.3965 19.4956 16.3965 17.2059C16.3965 17.1365 16.398 17.0679 16.4009 17ZM14.3843 17H8.00438C8.00148 17.0679 8.00001 17.1365 8.00001 17.2059C8.00001 19.514 9.62966 21 11.1903 21C12.751 21 14.3806 19.514 14.3806 17.2059C14.3806 17.1342 14.382 17.0652 14.3843 17ZM10 22.8469L10 40H27V22.837C25.7394 22.4989 24.657 21.6566 23.9372 20.5139C22.9907 22.0166 21.4169 23 19.6355 23C17.8908 23 16.3454 22.0568 15.3932 20.6064C14.4499 22.0568 12.9188 23 11.1903 23C10.7807 23 10.3822 22.947 10 22.8469ZM29 22.9393V40H38V22.8371C37.6029 22.9436 37.1881 23 36.7614 23C35.0052 23 33.4508 22.0442 32.5002 20.5773C31.6896 21.8283 30.4397 22.7076 29 22.9393ZM29.4151 8.00001H25V15H31.2907L29.4151 8.00001ZM31.4856 8.00001L33.3293 14.8808C33.34 14.9205 33.3481 14.9603 33.3537 15H39.4612L36.3501 8.00001H31.4856ZM11.6499 8.00001H16.2497L14.3741 15H8.53877L11.6499 8.00001ZM23 8.00001H18.3203L16.4446 15H23V8.00001Z"></path>
                                </svg>
                                <h6><strong>{props.tabs.planData[0].planTypeTitle}</strong><br/> {props.tabs.planData[0].planTypeText}</h6>
                            </button>
                        </span>
                        <span id="headingTwo">
                            <button className="switch-button btn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <svg className="mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 24H24V26H22V24Z"></path>
                                    <path d="M26 24H28V26H26V24Z"></path>
                                    <path d="M30 24H32V26H30V24Z"></path>
                                    <path d="M34 24H36V26H34V24Z"></path>
                                    <path d="M22 30H24V32H22V30Z"></path>
                                    <path d="M26 30H28V32H26V30Z"></path>
                                    <path d="M30 30H32V32H30V30Z"></path>
                                    <path d="M34 30H36V32H34V30Z"></path>
                                    <path d="M22 36H24V38H22V36Z"></path>
                                    <path d="M26 36H28V38H26V36Z"></path>
                                    <path d="M30 36H32V38H30V36Z"></path>
                                    <path d="M34 36H36V38H34V36Z"></path>
                                    <path d="M39 18H38V13C38 12.8 37.8 12.4 37.8 12.2L34 8.6V5C34 4.4 33.6 4 33 4C32.4 4 32 4.4 32 5V8.6L28.2 12.4C28.2 12.4 28 12.8 28 13V14H24V9C24 8.4 23.6 8 23 8H7C6.4 8 6 8.4 6 9V43C6 43.6 6.4 44 7 44H39C39.6 44 40 43.6 40 43V19C40 18.4 39.6 18 39 18ZM30 13.4L33 10.4L36 13.4V18H34V15C34 14.4 33.6 14 33 14H30V13.4ZM32 16V18H24V16H32ZM18 19V42H8V10H22V18H19C18.4 18 18 18.4 18 19ZM38 42H20V20H38V42Z"></path>
                                    <path d="M18 12H20V16H18V12Z"></path>
                                    <path d="M14 12H16V16H14V12Z"></path>
                                    <path d="M10 12H12V16H10V12Z"></path>
                                    <path d="M10 18H12V22H10V18Z"></path>
                                    <path d="M14 18H16V22H14V18Z"></path>
                                    <path d="M10 24H12V28H10V24Z"></path>
                                    <path d="M14 24H16V28H14V24Z"></path>
                                    <path d="M10 30H12V34H10V30Z"></path>
                                    <path d="M14 30H16V34H14V30Z"></path>
                                    <path d="M10 36H12V40H10V36Z"></path>
                                    <path d="M14 36H16V40H14V36Z"></path>
                                </svg>
                                <h6><strong>{props.tabs.planData[1].planTypeTitle}</strong><br/>{props.tabs.planData[1].planTypeText}</h6>
                            </button>
                        </span>
                    </div>
                
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body p-0">
                            <h3 className="mb-5 text-center">{props.tabs.planData[0].subTitle}</h3>
                            <div className="d-flex flex-column flex-lg-row flex-md-column flex-sm-column flex-xl-row">
                                <div className="flex-grow-1 flex-shrink-0 mx-3 flex-basis-0">
                                    {ReactHtmlParser(props.tabs.planData[0].leftDesc)}
                                </div>
                                <div className="flex-grow-1 flex-shrink-0 mx-3 flex-basis-0">
                                    {ReactHtmlParser(props.tabs.planData[0].rightDesc)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body p-0">
                            <h3 className="mb-5 text-center">{props.tabs.planData[1].subTitle}</h3>
                            <div className="d-flex flex-column flex-lg-row flex-md-column flex-sm-column flex-xl-row">
                                <div className="flex-grow-1 flex-shrink-0 mx-3 flex-basis-0">
                                    {ReactHtmlParser(props.tabs.planData[1].leftDesc)}
                                </div>
                                <div className="flex-grow-1 flex-shrink-0 mx-3 flex-basis-0">
                                    {ReactHtmlParser(props.tabs.planData[1].rightDesc)}
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>   
                </div>
            </section>  
        </>
    )
}

export default BusinessTabs
