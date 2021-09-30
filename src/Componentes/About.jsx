import React from 'react'
import {Tab, Row, Col, Nav, Image} from 'react-bootstrap/'

const About = () => {
    return (
    <div className="w-75 mx-auto mt-4 ">
    <Tab.Container id="left-tabs" defaultActiveKey="first" >
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">Mision</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Vision</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content className="text-white bg-dark p-3 rounded">
                <Tab.Pane eventKey="first">
                <h1>Mision</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quos, omnis doloremque aut ea quia eius necessitatibus. Velit consequatur labore, architecto iure laborum molestiae corrupti voluptatibus temporibus non corporis nihil.</p>
                <Image src="https://cdn.pixabay.com/photo/2017/05/16/11/45/blue-waves-2317606_960_720.png" style={{width:'100%', height: '15em'}} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <h1>Vision</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, distinctio. Id aspernatur vero neque in ex rem dolorum magnam? Modi in rerum ipsum adipisci soluta doloremque, quia fuga necessitatibus iusto!</p>
                <Image src="https://3.bp.blogspot.com/-pMdS5_O0jPM/T0CjHAWeZ9I/AAAAAAAAGwE/jBM4mdulfNA/s1600/nubes2.png" style={{height: '15em'}} className="m-auto w-50" />
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        </div>
    )
}
export default About