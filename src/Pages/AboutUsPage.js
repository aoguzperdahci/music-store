import React from 'react'
import "../CSS/AboutUs.css";
import { Col, Image, Row } from 'react-bootstrap';
import Company1Image from "../Resources/images/about_us_1.jpg";
import Company2Image from "../Resources/images/about_us_2.jpg";

const AboutUsPage = () => {

    return (
        <div>
            <h4 className='fs-2 text-center mt-4 mb-4'>About Us</h4>
            <section className='section our-company'>
                <div className='container about-us-container'>
                    <h3 className='fs-3'>Our Company</h3>
                    <p className='text'>
                        Our company was established in 1965 and today continues to serve our customers
                        with the same excitement of the first day with over 3000 employees. Our aspiration is to satisfy our
                        customers with our reliable services. We embrace the power of change to create long-lasting value
                        in every direction for our customers. We are committed to creating an inclusive, accessible workplace
                        for each of our employees. Our main goal is to please customers in a reliable, fast and guaranteed
                        way.
                    </p>
                    <Row className='text-center'>
                        <Col lg={12} xl={6} >
                        <Image className='about-us-img' alt='company' src={Company1Image}></Image>
                        </Col>

                        <Col lg={12} xl={6} >
                        <Image className='about-us-img' alt='company' src={Company2Image}></Image>
                        </Col>
                    </Row>
                    
                </div>
            </section>
            <section className='section vision-mission'>
                <div className='container about-us-container'>
                    <div className='row about-us-row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>
                                Vision  Mission and Values
                            </h3>
                            <div className='underline mx-auto'></div>
                        </div>
                        <div className='col-md-4 text-center'>
                            <h6 className='sub-heading'>Our Vision</h6>
                            <p className='text'>
                                As an e-commerce site, we aim to transform into a giant ecosystem that
                                focuses on making people's lives easier with all the services we offer.
                            </p>
                        </div>
                        <div className='col-md-4 text-center'>
                            <h6 className='sub-heading'>Our Mission</h6>
                            <p className='text'>
                                We are working hard to provide a reliable, fast and guaranteed service to our customers.
                                We try to meet the needs of each of our customers.
                            </p>
                        </div>
                        <div className='col-md-4 text-center'>
                            <h6 className='sub-heading'>Our Values</h6>
                            <p className='text'>
                                We value to delight our customers, to honor our commitments, communicating with impact
                                and developing self and others.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsPage
