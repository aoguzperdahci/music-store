import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Footer.css"

function Footer() {
    return (
            <><div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                        <div className="footer-pad">
                            <h4>Address</h4>
                            <address>
                                <ul className="list-unstyled">
                                    <li>
                                        City Hall<br />
                                        212  Street<br />
                                        Lawoma<br />
                                        735<br />
                                    </li>
                                    <li>
                                        Phone: 0
                                    </li>
                                </ul>
                            </address>
                            </div>
                        </div>
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                        <div className="footer-pad">
                            <h4>Popular Services</h4>
                            <ul className="list-unstyled">
                                <li><a href="#"></a></li>
                                <li><a href="#">Payment Center</a></li>
                                <li><a href="#">Contact Directory</a></li>
                                <li><a href="#">Forms</a></li>
                                <li><a href="#">News and Updates</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        </div>
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                        <div className="footer-pad">
                            <h4>Website Information</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Website Tutorial</a></li>
                                <li><a href="#">Accessibility</a></li>
                                <li><a href="#">Disclaimer</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Webmaster</a></li>
                            </ul>
                        </div>
                        </div>
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                        <div className="footer-pad">
                            <h4>Popular Departments</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Parks and Recreation</a></li>
                                <li><a href="#">Public Works</a></li>
                                <li><a href="#">Police Department</a></li>
                                <li><a href="#">Fire</a></li>
                                <li><a href="#">Mayor and City Council</a></li>
                                <li>
                                    <a href="#"></a>
                                </li>
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
                    
