import React from 'react'

function BusinessBreak(props) {
    return (
        <>
    <section className="py-5 demo-grid clearfix">
    <div className="content child">
        <nav className="page-nav">
        <span className="font-size-1pt8rem mb-5">{props.break.breakText}</span>
            
            <a className="page-nav__item explore-get-btn" href={props.break.breakBtnLink}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {props.break.breakBtnText}
            </a>
            <a className="page-nav__item page-nav__item--close" href="#">No I like being shackled</a>
        </nav>
        <div className="pieces" style={{backgroundImage : localStorage.getItem('baseUrl')+props.break.breakImageUrl}}></div>
        <h2 className="content__title"><span className="blink_me">{props.break.breakSectionTitle}</span></h2>
    </div>

</section>


</>
    )
}

export default BusinessBreak