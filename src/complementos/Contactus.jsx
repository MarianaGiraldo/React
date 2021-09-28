import React from 'react'
import {Jumbotron, Container, Alert, Row, Col, Image} from 'react-bootstrap'


const Contactus = () => {
    return(
        <div className="FondoContacto">
        <Jumbotron fluid className="Jumbotron">
            <br/><br/><br/><br/><br/><br/>
            <Container className="text-white mb-0">
                <h1 className="pl-4">Contact us</h1>
                <p className="TextBanner">
                Find your nearest office and the different contact channels we have to help you.
                </p>
            </Container>
        </Jumbotron>
        <Alert variant="info" className="m-5 Alert" >
            <p>We help you to solve any questions you may have quickly and easily through our chat. We are open from Monday to Sunday, 24 hours a day.</p>
        </Alert>
        <br/>   
        <Row className="w-75 m-auto bg-light rounded">
            <Col className="w-75 ">
                <h1>Now we will solve your doubts via WhatsApp.</h1>
                <p>Contact us for assistance</p>
                <p>To access the service:</p>
                <p><span style={{color: 'red'} } className="px-1">1. </span>Scan the code on your mobile phone, or click on the image by opening WhatsApp. You can also add our number to your contacts +57 3*********.</p>
                <p><span style={{color: 'red'} } className="px-1">1. </span>Enter your user number to identify yourself. If you don't have one, don't worry, you can log in as a guest.</p>

            </Col>
            <Col className="w-25">
                <Image src="https://www.researchgate.net/profile/Pedro_Molina_Munoz/publication/321713424/figure/fig1/AS:569947200131073@1512897409753/Figura-1-Ejemplos-de-codigos-QR.png" className="float-right w-75" />
            </Col>
        </Row>
        <br/><br/><br/>
        </div>
    )
}
export default Contactus