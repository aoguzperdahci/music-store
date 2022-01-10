import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Footer.css"
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";

function Footer() {
    return (
            <><div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                        <div className="footer-pad">
                            <address>
                                <ul className="list-unstyled">
                                    <li>
                                        Bağdat Cad. No: 33 Tünel /<br />
                                        Beşiktaş / İSTANBUL<br />
                                        Tel: 0212 000 0000<br />
                                        info@elifahmetedamuzik.com<br />
                                    </li>
                                </ul>
                            </address>
                            </div>
                        </div>
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                        <div className="footer-pad">
                            <h4>Categories</h4>
                            <ul className="list-unstyled">
                                <li><a href="#"></a></li>
                                <li><a href="#">Guitars</a></li>
                                <li><a href="#">Wind Instruments</a></li>
                                <li><a href="#">Piano</a></li>
                                <li><a href="#">Stringed Instruments</a></li>
                            </ul>
                        </div>
                        </div>
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                        <div className="footer-pad">
                            <h4>Important Information</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Human Resources</a></li>
                                <li><a href="#">Accessibility</a></li>
                                <li><a href="#">Disclaimer</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Clarification Text</a></li>
                            </ul>
                        </div>
                        </div>
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                        <div className="footer-pad">
                            <h4>Follow Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="#"><FaFacebookSquare size='3em'/></a><a href="#"><FaTwitterSquare size='3em'/></a><a href="#"><FaInstagramSquare size='3em'/></a><a href="#"><FaYoutubeSquare size='3em'/></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div><div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {/* Footer Bottom */}
                            <p className="text-xs-center">&copy; Copyright 2016 - City of USA.  All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div></>
    );
    }

export default Footer;
                    
