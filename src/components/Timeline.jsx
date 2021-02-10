import React from 'react'
import '../css/timeline.css'

function Timeline() {
    return (
        <div className='timelineSection act4'>
            <h3 className="highlight__text-title font-family-san-serif font-size-3pt5rem font-weight-bolder text-capitalize text-center mt-5" style={{color:'#59BAB0 '}}>Enjoy Special Features like</h3>
            <ul className="timeline">
                <li>
                    <div className="direction-r">
                        <div className="flag-wrapper">
                            <span className="flag">Submitting Meter Readings</span>
                            {/* <span className="time-wrapper"><span className="time">2013 - present</span></span> */}
                        </div>
                        <div className="desc">Track your Daily/ Monthly Electricity Usage and Submit your Meter Reading at ease. </div>
                    </div>
                </li>

                <li>
                    <div className="direction-l">
                        <div className="flag-wrapper">
                            <span className="flag">Check Bills</span>
                            {/* <span className="time-wrapper"><span className="time">2011 - 2013</span></span> */}
                        </div>
                        <div className="desc">Check your Energy Bills and Track the Payments whenever and wherever you want. </div>
                    </div>
                </li>

                <li>
                    <div className="direction-r">
                        <div className="flag-wrapper">
                            <span className="flag">Data Security</span>
                            {/* <span className="time-wrapper"><span className="time">2008 - 2011</span></span> */}
                        </div>
                        <div className="desc">The OTP Feature on the Symbio Energy Mobile App keeps your Energy-related Data Safe and Secure.</div>
                    </div>
                </li>

                </ul>
        </div>
    )
}

export default Timeline
