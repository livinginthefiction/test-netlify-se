import React from 'react'
// import { NavLink } from 'react-router-dom';
import footerLogo from '../images/symbio-logo-2.png'

function Footer() {
    return (
        <footer className="footer pull-left w-100 withGradient">
            <div className="footerLogo"><img src={footerLogo} alt="Symbio Energy" title="Symbio Energy"/></div>
            <div className="footer-container">
                <ul className="primaryLinks martell_1eMk3 medium uppercase_f_m9E mongoose_3S35Z">
                    <li className="primaryItem">
                        <a className="link_btn line_hr" href="/">Home</a></li>
                    <li className="primaryItem">
                        <a className="link_btn line_hr" href="/about-symbio">About Us</a></li>
                    <li className="primaryItem">
                        <a className="link_btn line_hr" href="/why-symbio">Why Symbio</a></li>
                    {/* <li className="primaryItem">
                        <a className="link_btn line_hr" href="/history">Our History</a></li> */}
                    <li className="primaryItem">
                        <a className="link_btn line_hr" href="/contact">Contact Us</a></li>
                        <li className="primaryItem">
                        <a className="link_btn line_hr"  href="https://symbiocustomersportal.co.uk/">Customer Portal</a></li>
                    <li className="primaryItem">
                        <a className="link_btn line_hr"  href="https://symbiogetquote.co.uk">Get Quote</a></li>
                </ul>
            </div>
            <div className="footer-container">
                <ul className="secondaryLinks martell_1eMk3 s_2Mn1z uppercase_f_m9E">
                    <li className="secondaryItem">
                        <a className="link_btn" href="/residential">Residential</a></li>
                    <li className="secondaryItem">
                        <a className="link_btn" href="/business">Business</a></li>
                    <li className="secondaryItem">
                        <a className="link_btn" href="/faqs" >FAQs</a></li>
                    <li className="secondaryItem">
                        <a className="link_btn" href="/emergencies" >Emergencies</a></li>
                    <li className="secondaryItem">
                        <a className="link_btn" href="/guides" >Guides</a></li>
                    <li className="secondaryItem">
                        <a className="link_btn" href="/terms-and-conditions" >T&C</a></li>
                    <li className="secondaryItem">
                        <a rel="noopener" className="link_btn" href="/privacy-policy-cookies">Privacy Policy</a></li>
                    <li className="secondaryItem">
                        <a rel="noopener" className="link_btn" href="/complaints">Complaints</a></li>
                    <li className="secondaryItem">
                        <a className="link_btn"  href="https://directdebit.symbioenergy.co.uk">Setup Direct Debit</a></li>
                </ul>
            </div>
            <div className="socialsWrapper pb-5">
                <div className="socials_flex socials_margin">
                    <a rel="noopener noreferrer"  href="https://www.instagram.com/symbio_energy/" aria-label="Instagram">
                        <div className="icon_3NEmC"><svg width="22" height="22" viewBox="0 0 22 22"
                                xmlns="http://www.w3.org/2000/svg">
                                <g fill="#000" fillRule="evenodd">
                                    <path
                                        d="M10.725 1.932c2.864 0 3.203.011 4.334.063 1.045.048 1.613.222 1.991.37.5.194.858.426 1.233.802.376.375.608.732.803 1.233.147.378.321.946.369 1.991.052 1.131.063 1.47.063 4.334s-.011 3.203-.063 4.334c-.048 1.045-.222 1.613-.37 1.991-.194.5-.426.858-.802 1.234a3.323 3.323 0 0 1-1.233.802c-.378.147-.946.321-1.991.37-1.131.05-1.47.062-4.334.062s-3.203-.011-4.334-.063c-1.045-.048-1.613-.222-1.991-.37a3.323 3.323 0 0 1-1.234-.801 3.323 3.323 0 0 1-.802-1.234c-.147-.378-.321-.946-.37-1.991-.05-1.131-.062-1.47-.062-4.334s.011-3.203.063-4.334c.048-1.045.222-1.613.37-1.991.194-.5.426-.858.801-1.233A3.323 3.323 0 0 1 4.4 2.364c.378-.147.946-.321 1.991-.369 1.131-.052 1.47-.063 4.334-.063m0-1.932C7.812 0 7.447.012 6.303.065 5.162.117 4.382.298 3.7.563A5.257 5.257 0 0 0 1.8 1.8 5.257 5.257 0 0 0 .563 3.7C.298 4.382.117 5.162.064 6.303.012 7.447 0 7.813 0 10.725c0 2.913.012 3.278.064 4.422.053 1.141.234 1.921.499 2.603.274.706.64 1.304 1.237 1.9a5.257 5.257 0 0 0 1.9 1.237c.682.265 1.462.446 2.603.499 1.144.052 1.51.064 4.422.064 2.913 0 3.278-.012 4.422-.064 1.141-.053 1.921-.234 2.603-.499a5.257 5.257 0 0 0 1.9-1.237 5.257 5.257 0 0 0 1.237-1.9c.265-.682.446-1.462.498-2.603.053-1.144.065-1.51.065-4.422 0-2.913-.012-3.278-.065-4.422-.052-1.141-.233-1.921-.498-2.603a5.257 5.257 0 0 0-1.237-1.9 5.257 5.257 0 0 0-1.9-1.237c-.682-.265-1.462-.446-2.603-.498C14.003.012 13.637 0 10.725 0">
                                    </path>
                                    <path
                                        d="M10.725 5.047a5.678 5.678 0 1 0 0 11.356 5.678 5.678 0 0 0 0-11.356zm0 9.364a3.686 3.686 0 1 1 0-7.372 3.686 3.686 0 0 1 0 7.372zM17.665 5.047a1.262 1.262 0 1 1-2.524 0 1.262 1.262 0 0 1 2.524 0">
                                    </path>
                                </g>
                            </svg></div>
                    </a>
                    <a  href="https://www.facebook.com/SymbioEnergy" aria-label="Facebook">
                        <div className="icon_3NEmC"><svg width="12" height="22" viewBox="0 0 12 22"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 7.333H0V11h3v11h5V11h3.642L12 7.333H8V5.805c0-.875.192-1.222 1.115-1.222H12V0H8.192C4.596 0 3 1.451 3 4.23v3.103z"
                                    fill="#000" fillRule="nonzero"></path>
                            </svg></div>
                    </a>
                    <a  href="https://twitter.com/SymbioEnergy" aria-label="Twitter">
                        <div className="icon_3NEmC"><svg width="25" height="21" viewBox="0 0 25 21"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.545 2.413a9.902 9.902 0 0 1-2.892.81A5.143 5.143 0 0 0 23.867.376a9.956 9.956 0 0 1-3.197 1.249A4.98 4.98 0 0 0 16.994 0c-2.781 0-5.036 2.304-5.036 5.145 0 .404.044.796.13 1.173C7.903 6.103 4.192 4.055 1.708.942a5.207 5.207 0 0 0-.681 2.587c0 1.785.889 3.36 2.24 4.283a4.934 4.934 0 0 1-2.28-.644l-.001.065c0 2.493 1.736 4.573 4.04 5.045a4.942 4.942 0 0 1-2.275.088c.641 2.045 2.5 3.532 4.704 3.574A9.968 9.968 0 0 1 0 18.07a14.034 14.034 0 0 0 7.72 2.312c9.262 0 14.327-7.84 14.327-14.64 0-.223-.005-.445-.014-.666a10.362 10.362 0 0 0 2.512-2.663"
                                    fill="#000" fillRule="evenodd"></path>
                            </svg></div>
                    </a>
                    <a  href="https://www.youtube.com/channel/UC3W3XoQibCGBRKEx4omiWeA" aria-label="Youtube">
                        <div className="icon_3NEmC"><svg width="31" height="22" viewBox="0 0 31 22"
                                xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                    <path d="M0 0h30.545v21.429H0z"></path>
                                    <path
                                        d="M12.118 14.548l8.253-4.375-8.253-4.406v8.78zm18.427 2.416c0 2.456-1.963 4.465-4.363 4.465H4.364c-2.4 0-4.364-2.01-4.364-4.465v-12.5C0 2.01 1.964 0 4.364 0h21.818c2.4 0 4.363 2.009 4.363 4.464v12.5z"
                                        fill="#000"></path>
                                </g>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
