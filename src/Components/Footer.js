import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Footer.css"
import logo from "../Resources/images/logo2.png";
import Image from 'react-bootstrap/Image';
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-middle pb-4 pt-5">
            <div className="container">
                <div className="row text-center">

                    <div className="col-12 col-sm-6 col-lg-3 mb-4">
                        <Image className='footer-logo mt-5' src={logo}></Image>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 mb-4">
                        <h4>Important Information</h4>
                        <ul className="list-unstyled">
                            <li><a className='footer-link' href="#">Jobs & Careers</a></li>
                            <li><a className='footer-link' href="#">Vouchers</a></li>
                            <li><a className='footer-link' href="#">Right of Withdrawal </a></li>
                            <li><a className='footer-link' href="#">KVKK</a></li>
                            <li><a className='footer-link' href="#">Clarification Text</a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 mb-4">
                        <h4>Follow Us</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#"><FaFacebookSquare color='#F0F5F9' size='3em' /></a>
                                <a href="#"><FaTwitterSquare color='#F0F5F9' size='3em' /></a>
                                <a href="#"><FaInstagramSquare color='#F0F5F9' size='3em' /></a>
                                <a href="#"><FaYoutubeSquare color='#F0F5F9' size='3em' /></a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 mb-4">
                        <h4>Contact Us</h4>
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
            </div>
        </div>

    );
}

export default Footer;

