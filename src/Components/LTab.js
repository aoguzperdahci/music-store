import React from 'react'
import Tab from 'react-bootstrap/Tab'
import { Nav, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/LTab.css"


function LTab() {
    return (
        <div className="container" >
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="justify-content-center">
                    <Col sm={3} className="nav-justified">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link className="nav-item" eventKey="first">ANTALYA</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
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
                    <Col sm={9} className="tab-justified">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <p>Etiler Mah. Evliya Çelebi Cd. No:21/B Muratpaşa / ANTALYA</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>Değirmenlikızık Mh. Çiçek Cd. 1. Dışkaya Sk. No:17 Yıldırım / BURSA</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>Arnavutköy Merkez Mahallesi, 23 Nisan Cd. No:1, Arnavutköy / İSTANBUL</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <p>İsmet Kaptan Mah. Şevket Özçelik Sk. No:59 D Konak / İZMİR</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>
    )
}
export default LTab;
