import React from 'react'
import {Image} from 'react-bootstrap';
import { Carousel, Col, Row } from 'react-bootstrap';
import "../CSS/bCarausel.css";
import ukulelesImage from "../Resources/images/ukuleles.jpg";
import aletlerImage from "../Resources/images/aletler.jpg";
import pianobrandsImage from "../Resources/images/pianobrands.jpg";
import brandsImage from "../Resources/images/brandmusic.jpg";

export default function BCarousel() {
    return (
        <div>
            <Carousel className='background'>
                <Carousel.Item>
                    <Row>
                        <Col lg={4} className='d-none d-lg-block text-center my-auto'>
                        <h3 className='heading-carausel'>Discount On Every Piano</h3>
                        <div>
                        <p className='text-carausel'>Up to 15% - 25% discount on all piano brands on your first purchase from our website.
                        Do not miss our campaign that is valid until the end of this January. Do not forget it is limited edition.
                       
                        </p> 
                        </div>
                        <Image className='img-size-carausel' src={pianobrandsImage}></Image>
                        </Col>

                        <Col lg={8}>
                            <img
                                className="crsl-img"
                                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/425A/production/_120568961_gettyimages-1322472765.jpg"
                                alt="First slide" />
                        </Col>
                        
                    </Row>

                    <Carousel.Caption className='d-lg-none'>
                        <h3>dkfnd</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    

                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col lg={4} className='d-none d-lg-block text-center my-auto'>
                        <h3 className='heading-carausel'>Best Ukulele Brands Are Back In Stock</h3>
                        <p className='text-carausel'>The most preferred models and brands all over the world are at your fingertips
                         with the privilege of our brand. We provide free delivery to all over the country. We give at
                          least 2 years of guarentee on our every brand of pianos. </p>
                        </Col>

                        <Col lg={8}>
                            <img
                                className="crsl-img"
                                src={ukulelesImage}
                                alt="First slide" />
                        </Col>
                        
                    </Row>

                    <Carousel.Caption className='d-lg-none'>
                        <h3>First Slide Label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    

                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col lg={4} className='d-none d-lg-block text-center my-auto'>
                        <h3 className='heading-carausel'>Everything You Are Looking For</h3>
                        <p className='text-carausel'>Many instrumental stuff are finally available again! Every little instrumental 
                        tool you are in need is on this website. We have renewed our stocks! Check out for the newest products. </p>
                        <Image className='img-size-carausel' src={brandsImage}></Image>
                        </Col>
                        <Col lg={8}>
                            <img
                                className="crsl-img"
                                src={aletlerImage}
                                alt="First slide" />
                        </Col>
                        
                    </Row>

                    <Carousel.Caption className='d-lg-none'>
                        <h3>First Slide Label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>
    )
}

