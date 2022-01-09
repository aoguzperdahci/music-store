import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap';
import "../CSS/bCarausel.css";

export default function BCarousel() {
    return (
        <div>
            <Carousel className=''>
                <Carousel.Item>
                    <Row>
                        <Col lg={4} className='d-none d-lg-block text-center my-auto'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Col>

                        <Col lg={8}>
                            <img
                                className="crsl-img"
                                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/425A/production/_120568961_gettyimages-1322472765.jpg"
                                alt="First slide" />
                        </Col>
                    </Row>

                    <Carousel.Caption className='d-lg-none'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>

            </Carousel>

        </div>
    )
}


