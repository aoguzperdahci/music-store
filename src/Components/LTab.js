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
                                <Nav.Link eventKey="first">ANTALYA</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">BURSA</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">ISTANBUL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">IZMIR</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} className="tab-justified">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <p>Lorem ipsum dolor sit amet.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>Lorem ipsum dolor sit amet.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>
    )
}
export default LTab;
