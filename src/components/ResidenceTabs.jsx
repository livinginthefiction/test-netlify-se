import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function ResidenceTabs(props) {
    return (
        <section className="py-1 py-lg-5 py-xl-5">
            <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3 mb-3">{props.tabs.planSectionTitle}</h1>
            <div id="accordion" className="col-12 col-xl-8 m-auto">
                <div className="bg-transparent border-0 card">

                <div className="bg-transparent border-0 card-header d-flex justify-content-around p-0 py-5">
                    <span id="headingOne">
                        <button className="btn p-1 switch-button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 512 512" width="512" height="512"><path d="M471.982,417.008Q472,416.5,472,416a32.036,32.036,0,0,0-32-32V236l28.8-21.6a8,8,0,0,0-.08-12.859L400,151.322V64a8,8,0,0,0,8-8V24a8,8,0,0,0-8-8H320a8,8,0,0,0-8,8V56a8,8,0,0,0,8,8V92.861l-59.28-43.32a8,8,0,0,0-9.44,0l-208,152A8,8,0,0,0,43.2,214.4L72,236V384a32.036,32.036,0,0,0-32,32q0,.5.018,1.008A32,32,0,0,0,48,480H464a32,32,0,0,0,7.982-62.992ZM328,32h64V48H328Zm8,72V64h48v75.63L335.243,104ZM256,65.908,450.555,208.084l-18.628,13.971L260.706,97.53a8,8,0,0,0-9.412,0L80.073,222.055,61.445,208.084ZM32,448a16.019,16.019,0,0,1,15.76-16l.019,0c.409.057.818.106,1.235.133a8,8,0,0,0,8.023-10.716A15.727,15.727,0,0,1,56,416a16.019,16.019,0,0,1,16-16v64H48A16.019,16.019,0,0,1,32,448Zm344,16H280V288h96Zm16,0V280a8,8,0,0,0-8-8H272a8,8,0,0,0-8,8V464H88V236.074L256,113.892,424,236.074V464Zm72,0H440V400a16.019,16.019,0,0,1,16,16,15.727,15.727,0,0,1-1.037,5.421,8,8,0,0,0,8.023,10.716c.417-.027.826-.076,1.235-.133l.019,0a16,16,0,0,1-.24,32Z"/><path d="M224,272H128a8,8,0,0,0-8,8V392a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V280A8,8,0,0,0,224,272Zm-8,56H184V288h32Zm-48-40v40H136V288Zm-32,56h32v40H136Zm48,40V344h32v40Z"/><circle cx="304" cy="368" r="8" transform="translate(-152.323 508.032) rotate(-67.5)"/></svg>
                            <h6><strong>{props.tabs.planData[0].planTypeTitle}</strong><br />{props.tabs.planData[0].planTypeText}</h6>
                        </button>
                    </span>
                    <span id="headingTwo">
                        <button className="btn p-1 switch-button collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m494.398 167.687h-4.887l-45.821-123.365c-4.012-10.801-14.448-18.058-25.97-18.058h-323.441c-11.521 0-21.958 7.257-25.97 18.058l-45.82 123.365h-4.887c-9.706 0-17.602 7.896-17.602 17.602v14.142c0 9.706 7.896 17.602 17.602 17.602h2.602v164.39c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-164.39h117.76c6.59 0 12.786-2.566 17.447-7.227l85.589-85.591 85.591 85.591c4.66 4.66 10.856 7.226 17.446 7.226h117.76v19.884c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-19.884h2.602c9.705 0 17.602-7.896 17.602-17.602v-14.142c-.001-9.705-7.897-17.601-17.603-17.601zm-412.028-118.143c1.84-4.953 6.626-8.28 11.909-8.28h323.441c5.283 0 10.069 3.328 11.909 8.28l43.881 118.143h-104.253l-95.811-95.81c-4.66-4.66-10.855-7.227-17.446-7.227s-12.786 2.566-17.446 7.227l-95.811 95.81h-104.254zm414.63 149.887c0 1.435-1.167 2.602-2.602 2.602h-135.361c-2.584 0-5.014-1.006-6.84-2.833l-90.894-90.894c-1.407-1.407-3.314-2.197-5.304-2.197s-3.896.79-5.304 2.197l-90.893 90.894c-1.827 1.827-4.257 2.833-6.841 2.833h-135.359c-1.435 0-2.602-1.167-2.602-2.602v-14.142c0-1.435 1.167-2.602 2.602-2.602h128.248c1.989 0 3.896-.79 5.304-2.197l98.008-98.007c1.826-1.827 4.255-2.833 6.839-2.833s5.013 1.006 6.839 2.833l98.008 98.007c1.407 1.407 3.314 2.197 5.304 2.197h128.248c1.435 0 2.602 1.167 2.602 2.602v14.142z"/><path d="m450.962 425.126c4.143 0 7.5-3.358 7.5-7.5v-133.341c0-4.142-3.357-7.5-7.5-7.5h-101.017c-4.143 0-7.5 3.358-7.5 7.5v133.341c0 4.142 3.357 7.5 7.5 7.5zm-7.5-47.325h-35.509v-35.508h35.509zm-50.509 0h-35.508v-35.508h35.508zm50.509 32.325h-86.017v-17.325h86.017zm0-82.834h-35.509v-35.508h35.509zm-50.509-35.507v35.508h-35.508v-35.508z"/><path d="m162.055 425.126c4.143 0 7.5-3.358 7.5-7.5v-133.341c0-4.142-3.357-7.5-7.5-7.5h-101.017c-4.143 0-7.5 3.358-7.5 7.5v133.341c0 4.142 3.357 7.5 7.5 7.5zm-7.5-47.325h-35.508v-35.508h35.508zm-50.508 0h-35.509v-35.508h35.509zm50.508 32.325h-86.017v-17.325h86.017zm0-82.834h-35.508v-35.508h35.508zm-50.508-35.507v35.508h-35.509v-35.508z"/><path d="m280.244 309.11h-48.488c-4.143 0-7.5 3.358-7.5 7.5v32.325c0 4.142 3.357 7.5 7.5 7.5h48.488c4.143 0 7.5-3.358 7.5-7.5v-32.325c0-4.142-3.357-7.5-7.5-7.5zm-7.5 32.325h-33.488v-17.325h33.488z"/><path d="m295.825 214.583c0-21.959-17.865-39.825-39.825-39.825s-39.825 17.866-39.825 39.825 17.865 39.826 39.825 39.826 39.825-17.866 39.825-39.826zm-64.65 0c0-13.688 11.137-24.825 24.825-24.825s24.825 11.137 24.825 24.825-11.137 24.826-24.825 24.826-24.825-11.137-24.825-24.826z"/><path d="m504.5 436.39h-12.703v-164.39c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v164.39h-156.728v-152.105c0-4.142-3.357-7.5-7.5-7.5h-113.138c-4.143 0-7.5 3.358-7.5 7.5v152.105h-156.728v-19.884c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v19.884h-12.703c-4.143 0-7.5 3.358-7.5 7.5v34.346c0 4.142 3.357 7.5 7.5 7.5h497c4.143 0 7.5-3.358 7.5-7.5v-34.346c0-4.142-3.357-7.5-7.5-7.5zm-297.569-54.701h10.684c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-10.684v-74.904h98.139v144.605h-98.139zm290.069 89.047h-482v-19.346h482z"/></g></g></svg>
                            <h6><strong>{props.tabs.planData[1].planTypeTitle}</strong><br />{props.tabs.planData[1].planTypeText}</h6>
                        </button>
                    </span>
                    <span id="headingThree">
                        <button className="btn p-1 switch-button collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m66.146 300.939h34.335c4.183 0 7.574-3.391 7.574-7.574v-60.592c0-4.183-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574v60.592c0 4.183 3.391 7.574 7.574 7.574zm7.574-60.592h19.187v45.444h-19.187z"/><path d="m66.146 343.858h34.335c4.183 0 7.574-3.391 7.574-7.574s-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574s3.391 7.574 7.574 7.574z"/><path d="m152.489 343.858h34.335c4.183 0 7.574-3.391 7.574-7.574s-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574s3.391 7.574 7.574 7.574z"/><path d="m238.832 343.858h34.335c4.183 0 7.574-3.391 7.574-7.574s-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574s3.391 7.574 7.574 7.574z"/><path d="m325.176 343.858h34.335c4.183 0 7.574-3.391 7.574-7.574s-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574s3.39 7.574 7.574 7.574z"/><path d="m411.519 343.858h34.335c4.183 0 7.574-3.391 7.574-7.574s-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574s3.39 7.574 7.574 7.574z"/><path d="m152.489 300.939h34.335c4.183 0 7.574-3.391 7.574-7.574v-60.592c0-4.183-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574v60.592c0 4.183 3.391 7.574 7.574 7.574zm7.574-60.592h19.187v45.444h-19.187z"/><path d="m238.832 300.939h34.335c4.183 0 7.574-3.391 7.574-7.574v-60.592c0-4.183-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574v60.592c0 4.183 3.391 7.574 7.574 7.574zm7.574-60.592h19.187v45.444h-19.187z"/><path d="m325.176 300.939h34.335c4.183 0 7.574-3.391 7.574-7.574v-60.592c0-4.183-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574v60.592c0 4.183 3.39 7.574 7.574 7.574zm7.573-60.592h19.187v45.444h-19.187z"/><path d="m411.519 300.939h34.335c4.183 0 7.574-3.391 7.574-7.574v-60.592c0-4.183-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574v60.592c0 4.183 3.39 7.574 7.574 7.574zm7.574-60.592h19.187v45.444h-19.187z"/><path d="m58.572 439.795c0 4.183 3.391 7.574 7.574 7.574h34.335c4.183 0 7.574-3.391 7.574-7.574v-60.592c0-4.183-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574zm15.148-53.018h19.187v45.444h-19.187z"/><path d="m144.915 439.795c0 4.183 3.391 7.574 7.574 7.574h34.335c4.183 0 7.574-3.391 7.574-7.574v-60.592c0-4.183-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574zm15.148-53.018h19.187v45.444h-19.187z"/><path d="m317.602 439.795c0 4.183 3.391 7.574 7.574 7.574h34.335c4.183 0 7.574-3.391 7.574-7.574v-60.592c0-4.183-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574zm15.147-53.018h19.187v45.444h-19.187z"/><path d="m403.945 439.795c0 4.183 3.391 7.574 7.574 7.574h34.335c4.183 0 7.574-3.391 7.574-7.574v-60.592c0-4.183-3.391-7.574-7.574-7.574h-34.335c-4.183 0-7.574 3.391-7.574 7.574zm15.148-53.018h19.187v45.444h-19.187z"/><path d="m478.17 291.042c-4.183 0-7.574 3.391-7.574 7.574v166.93h-168.647v-83.314c0-4.183-3.391-7.574-7.574-7.574h-38.375-38.375c-4.183 0-7.574 3.391-7.574 7.574v83.314h-168.647v-28.579c0-4.183-3.391-7.574-7.574-7.574s-7.574 3.391-7.574 7.574v36.153c0 4.183 3.391 7.574 7.574 7.574h444.34c4.183 0 7.574-3.391 7.574-7.574v-174.504c0-4.183-3.391-7.574-7.574-7.574zm-252.971 98.765h23.227v75.74h-23.227zm38.375 75.739v-75.74h23.227v75.74z"/><path d="m511.629 198.116-52.513-161.578c-1.014-3.12-3.922-5.233-7.203-5.233h-71.023c-4.183 0-7.574 3.391-7.574 7.574s3.391 7.574 7.574 7.574h65.522l47.59 146.43h-476.003l47.59-146.43h279.753c4.183 0 7.574-3.391 7.574-7.574s-3.391-7.574-7.574-7.574h-285.255c-3.281 0-6.189 2.112-7.203 5.233l-52.513 161.578c-.75 2.306-.349 4.831 1.076 6.793s3.702 3.122 6.127 3.122h18.682v193.389c0 4.183 3.391 7.574 7.574 7.574s7.574-3.391 7.574-7.574v-193.388h429.191v55.037c0 4.183 3.391 7.574 7.574 7.574s7.574-3.391 7.574-7.574v-55.037h18.682c2.425 0 4.702-1.161 6.127-3.122 1.426-1.962 1.827-4.488 1.077-6.794z"/><path d="m260.776 74.405c-2.783-2.26-6.769-2.26-9.552 0l-32.316 26.256c-1.77 1.439-2.798 3.598-2.798 5.879v44.434c0 4.183 3.391 7.574 7.574 7.574h64.631c4.183 0 7.574-3.391 7.574-7.574v-44.434c0-2.281-1.028-4.44-2.798-5.879zm19.966 68.995h-49.483v-33.255l24.741-20.103 24.742 20.103z"/><path d="m341.333 106.54v44.434c0 4.183 3.391 7.574 7.574 7.574h64.631c4.183 0 7.574-3.391 7.574-7.574v-44.434c0-2.281-1.028-4.44-2.798-5.879l-32.316-26.256c-2.783-2.26-6.769-2.26-9.552 0l-32.316 26.256c-1.769 1.44-2.797 3.598-2.797 5.879zm15.148 3.605 24.742-20.103 24.742 20.103v33.255h-49.483v-33.255z"/><path d="m135.553 74.405c-2.783-2.26-6.769-2.26-9.552 0l-32.316 26.256c-1.77 1.439-2.798 3.598-2.798 5.879v44.434c0 4.183 3.391 7.574 7.574 7.574h64.631c4.183 0 7.574-3.391 7.574-7.574v-44.434c0-2.281-1.028-4.44-2.798-5.879zm19.966 68.995h-49.483v-33.255l24.742-20.103 24.742 20.103v33.255z"/></g></g></svg>
                            <h6><strong>{props.tabs.planData[2].planTypeTitle}</strong><br />{props.tabs.planData[2].planTypeText}</h6>
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

                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body p-0">
                        <h3 className="mb-5 text-center">{props.tabs.planData[2].subTitle}</h3>
                        <div className="d-flex flex-column flex-lg-row flex-md-column flex-sm-column flex-xl-row">
                            <div className="flex-grow-1 flex-shrink-0 mx-3 flex-basis-0">
                                {ReactHtmlParser(props.tabs.planData[2].leftDesc)}
                            </div>
                            <div className="flex-grow-1 flex-shrink-0 mx-3 flex-basis-0">
                                {ReactHtmlParser(props.tabs.planData[2].rightDesc)} 
                            </div>
                        </div>
                    </div>
                </div>

                </div>   
            </div>
</section>
    )
}

export default ResidenceTabs
