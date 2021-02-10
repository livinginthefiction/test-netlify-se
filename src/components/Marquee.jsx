import React from 'react'
import { NavLink } from 'react-router-dom';

function Marquee(prop) {
    // console.log(prop.data);
return(
    <section className="overflow-hidden py-5">
        <div className="column_attr clearfix align_center font-family-san-serif running-text">
            <div className="text-create-row-div">
                <h2 className="home-sliding-big-text text-create-row inner-title-stroke">
<span>{prop.data.lineOne}</span>
                </h2>
                <h2 className="home-sliding-big-text text-create-row text-create-row2 inner-title-stroke">
                    <span>{prop.data.lineTwo}</span>
                </h2>
            </div>
            <div className="text-service-row-div">
                <h2 className="home-sliding-big-text text-service-row">
                    <span>
                        <NavLink className="text-dark" to="/residential">Residential Energy</NavLink>
                        <NavLink to="/business">Business Energy</NavLink>
                        <NavLink className="text-dark" to="/why-symbio">Why symbio</NavLink>
                        <NavLink to="/faqs">FAQs</NavLink>
                        <NavLink className="text-dark" to="/guides">Guides</NavLink>
                    </span>
                </h2>
                <h2 className="home-sliding-big-text text-service-row text-service-row2">
                    <span>
                        <NavLink to="/residential">Residential Energy</NavLink>
                        <NavLink className="text-dark" to="/business">Business Energy</NavLink>
                        <NavLink to="/why-symbio">Why symbio</NavLink>
                        <NavLink className="text-dark" to="/faqs">FAQs</NavLink>
                        <NavLink to="/guides">Guides</NavLink>
                    </span>
                </h2>
            </div>
        </div>
</section>


);
}

export default Marquee