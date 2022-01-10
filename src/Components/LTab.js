import React from 'react'
import Tab from 'react-bootstrap/Tab'
import { Nav, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/LTab.css"


function LTab() {
    return (
        <div className="container mt-5 mb-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link className="nav-item" eventKey="first">ANTALYA</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-item" eventKey="second">BURSA</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-item" eventKey="third">ISTANBUL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-item" eventKey="fourth">IZMIR</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <p><span class="material-icons md-48">place</span>Etiler Mah. Evliya Çelebi Cd. No:21/B Muratpaşa / ANTALYA</p>
                                <p><span class="material-icons md-48">call</span> 444 44 44</p>
                                <p><span class="material-icons md-48">schedule</span> 10:00 - 22:30</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p><span class="material-icons md-48">place</span>Değirmenlikızık Mh. Çiçek Cd. 1. Dışkaya Sk. No:17 Yıldırım / BURSA</p>
                                <p><span class="material-icons md-48">call</span> 444 44 44</p>
                                <p><span class="material-icons md-48">schedule</span> 10:00 - 22:30</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p><span class="material-icons md-48">place</span>Arnavutköy Merkez Mahallesi, 23 Nisan Cd. No:1, Arnavutköy / İSTANBUL</p>
                                <p><span class="material-icons md-48">call</span> 444 44 44</p>
                                <p><span class="material-icons md-48">schedule</span> 10:00 - 22:30</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <p><span class="material-icons md-48">place</span>İsmet Kaptan Mah. Şevket Özçelik Sk. No:59 D Konak / İZMİR</p>
                                <p><span class="material-icons md-48">call</span> 444 44 44</p>
                                <p><span class="material-icons md-48">schedule</span> 10:00 - 22:30</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>
    )
}
export default LTab;
