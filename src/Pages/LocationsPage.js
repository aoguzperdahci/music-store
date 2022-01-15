import React from 'react';
import Tab from 'react-bootstrap/Tab';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { FaClock, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image from 'react-bootstrap/Image';
import logo from "../Resources/images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/locationsPage.css";

const LocationsPage = () => {
    return (
        <div className="container mt-5 mb-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col md={4} className='order-2 order-md-1'>
                        <ListGroup variant="pills" className="flex-column text-center justify-content-center">

                            <Image className='locations-logo mt-4' src={logo}></Image>
                            <h2 className='mb-3 mt-4 mt-md-0'>Locations</h2>

                            <ListGroup.Item eventKey="first" >
                                ANTALYA
                            </ListGroup.Item>
                            <ListGroup.Item eventKey="second">
                                BURSA
                            </ListGroup.Item>
                            <ListGroup.Item eventKey="third">
                                ISTANBUL
                            </ListGroup.Item>
                            <ListGroup.Item eventKey="fourth">
                                IZMIR
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                    <Col md={8} className='order-1 order-md-2 text-center'>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <iframe className='map mb-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1595.405577324372!2d30.71054894303724!3d36.894865731989285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39008a0f96b59%3A0x59f5fe6b8eb5566f!2zQW50YWx5YSBCw7x5w7xrxZ9laGlyIEJlbGVkaXllc2k!5e0!3m2!1str!2str!4v1641852045893!5m2!1str!2str" allowfullscreen="" loading="lazy"></iframe>
                                <div className='locations-text-wrapper'>
                                    <p className='text-center'><FaMapMarkerAlt className='locations-icon' />Yüksekalan, 07310 Muratpaşa/Antalya</p>
                                    <p className='text-end locations-phone'><FaPhoneAlt className='locations-icon' /> (0242) 249 50 00</p>
                                    <p className='text-start locations-schedule'><FaClock className='locations-icon' />10:00 - 21:00</p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <iframe className='map mb-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.7045297147683!2d29.074000415701576!3d40.19338857711573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3e6e21d84a1b%3A0xa79fcab777280b16!2zQnVyc2EgQsO8ecO8a8WfZWhpciBCZWxlZGl5ZXNp!5e0!3m2!1str!2str!4v1641852255143!5m2!1str!2str" allowfullscreen="" loading="lazy"></iframe>
                                <div className='locations-text-wrapper'>
                                    <p className='text-center'><FaMapMarkerAlt className='locations-icon' />Zafer, Ankara Yolu Cd. No:1, 16270 Osmangazi/Bursa</p>
                                    <p className='text-end locations-phone'><FaPhoneAlt className='locations-icon' /> (0224) 716 15 50</p>
                                    <p className='text-start locations-schedule'><FaClock className='locations-icon' />10:00 - 21:00</p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <iframe className='map mb-4' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5063.082729615509!2d28.95627192730813!3d41.01372487022908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd72d1865a1c4cccd!2zVC5DLiDEsHN0YW5idWwgQsO8ecO8a8WfZWhpciBCZWxlZGl5ZXNpIEJhxZ9rYW5sxLHEn8Sx!5e0!3m2!1str!2str!4v1641852937535!5m2!1str!2str" allowfullscreen="" loading="lazy"></iframe>
                                <div className='locations-text-wrapper'>
                                    <p className='text-center'><FaMapMarkerAlt className='locations-icon' />Kemal Paşa, 15 Temmuz Şehitleri Cd No:5 D:5, 34134 Fatih/İstanbul</p>
                                    <p className='text-end locations-phone'><FaPhoneAlt className='locations-icon' /> (0212) 455 1300</p>
                                    <p className='text-start locations-schedule'><FaClock className='locations-icon' />10:00 - 21:00</p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <iframe className='map mb-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464.67241673176807!2d27.128423079312242!3d38.419960455939275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8fbf38b6d23%3A0x7340c3d90468fb2a!2sKonak%20T%C3%BCketici%20Hakem%20Heyeti!5e0!3m2!1str!2str!4v1641853425074!5m2!1str!2str" allowfullscreen="" loading="lazy"></iframe>
                                <div className='locations-text-wrapper'>
                                    <p className='text-center'><FaMapMarkerAlt className='locations-icon' />Konak, Cumhuriyet Blv Hükümet Konağı B Blok No:12, 35290 Konak/İzmir</p>
                                    <p className='text-end locations-phone'><FaPhoneAlt className='locations-icon' /> (0232) 489 72 13</p>
                                    <p className='text-start locations-schedule'><FaClock className='locations-icon' />10:00 - 21:00</p>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default LocationsPage
