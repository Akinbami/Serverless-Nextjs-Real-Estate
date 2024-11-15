import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const Footer = props => {
    const [collapsed, setCollapsed] = useState(true);
    const [covidModal, setCovidModal] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const toggleCovid = () => setCovidModal(!covidModal);

     
	return (
    <React.Fragment>

        <footer className="mt-auto">
            <div className="footer-inner mx-auto">
                <div className="row">
                    <div className="col-md-4 my-3">
                        <div className="footer-inner-2 mx-auto">
                            <div className="d-flex justify-content-start">
                                <div className="footer-logo">
                                    <a href="https://www.thepodliving.com/" target="_blank"><Image src="/img/footer-logo.png" width={"102.86"} height={"50"} alt="footer logo" /></a>
                                </div>
                                <p className="landing-footer-text px-2 mx-2">The Ultimate Student Living Experience</p>
                            </div>
                            <a href="https://collection.dev/" target="_blank"><img className="rounded" src="/img/footer-advert.png" width="213px" height="70px" alt="footer-advert" /></a>
                        </div>
                        
                    </div>
                    <div className="col-md-4 my-3">
                        <p className="contact-text">Contact us</p>
                        <a href="mailto:info@thepodliving.com"><p className="contact-email"><span className="px-2"><img src="/img/email-logo.png" width="15" alt="" /></span>info@thepodliving.com</p></a>
                    <p className="contact-covid" onClick={toggleCovid}><span className="px-2"><img src="/img/covid-sign.png" width="15" alt="" /></span>COVID-19 Advisory</p>
                        <Modal isOpen={covidModal} toggle={toggleCovid} centered={true} size="lg">
                            <p className="covid-close" onClick={toggleCovid}>X CLOSE</p>
                            <div className="covid-content mx-auto">
                                <p className="covid-header">Our top priority is the health and safety of our residents.</p>
                                <p className="covid-message">Measures taken:</p>

                                <p className="covid-message">    - Screens and sanitising stations will be placed at strategic locations on all our premises</p>

                                <p className="covid-message">    - Thorough daily cleaning</p>

                                <p className="covid-message">    - All high-touch points will be cleaned regularly and thoroughly</p>

                                <p className="covid-message">   - Social distancing measure will be put in place as required</p>

                                <p className="covid-message">    - We are working closely with our communities to aid and ensure improved measures are in

                                    place and to facilitate safe self-isolation if the unfortunate need presents itself.</p>
                            </div>
                        </Modal>
                    </div>
                    <div className="col-md-4 my-3">
                        <p className="contact-text">Follow us: 
                            <span className="px-2"><a href="https://instagram.com/thepodliving" target="_blank"><img src="/img/instagram-logo.png" width="20" alt="instagram logo" /></a></span>
                            <span className="px-2"><a href="https://twitter.com/thepod_living" target="_blank"><img src="/img/twitter-logo.png" width="20" alt="instagram logo" /></a></span>
                            <span className="px-2"><a href="https://facebook.com/thepodliving" target="_blank"><img src="/img/FacebookLogo.png" width="20" alt="instagram logo" /></a></span>

                        </p>
                        <p className="contact-email"><a style={{textDecoration: "none", color:"#fff"}} href="https://www.thepodliving.com/privacy-policy" target="_blank">Privacy Policy</a>   <span className="px-2">|</span><a style={{textDecoration: "none", color:"#fff"}} href="https://www.thepodliving.com/legal-notice" target="_blank">   Legal Notice</a></p>
                        <p className="contact-email mt-5">Copyright © 2021 The Pod Living, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
	    
  </React.Fragment>
)
}

export default Footer;