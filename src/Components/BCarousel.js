import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function BCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://data.do-re.com.tr/Headline/toledo-gitarlar-79cc3ce17a22e2510503430b62a81d16-dlarge.jpg?v=278694"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://data.do-re.com.tr/Headline/epiphone-elektro-gitarlar-f70dfba399b9de4c6bf92bfa7a1a1063-dlarge.jpg?v=825900"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://data.do-re.com.tr/Headline/kurzweil-dijital-piyanolar-f87c2751971411ab3cc47243f2f028cc-dlarge.jpg?v=697448"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}


