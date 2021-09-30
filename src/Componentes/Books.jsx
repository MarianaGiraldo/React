import React from 'react';
import {Carousel, Container} from 'react-bootstrap';
import cienAnosdeSoledad from './images/cienAnosdeSoledad.jpg' ;
import ThePrince from './images/ThePrince.jpg';
import TheHungerGames from './images/TheHungerGames.jpg';
import CarouselHarryP from './CarouselHarryP';

const Books = () => {
    return(
        <>
            <div>
            <h1 className="ProTitle text-white">Top Books</h1>
            <Carousel className="h-25 w-25 m-auto">
                <Carousel.Item className="w-100 bg-dark" >
                <img className="d-block m-auto" style={{height: "20em"}} src= {cienAnosdeSoledad} alt="Cien Años de Soledad" />
                </Carousel.Item>
                <Carousel.Item  className="w-100 bg-dark">
                <img className="d-block m-auto" style={{height: "20em"}} src={ThePrince} alt="The Prince" />
                </Carousel.Item>
                <Carousel.Item  className="w-100 bg-dark">
                <img className="d-block m-auto" style={{height: "20em"}}  src={TheHungerGames}  alt="The Hunger Games" />
                </Carousel.Item>
            </Carousel>
            <br /><br />
            </div>
            <div className="bg-light">
                <br/><br/>
                <h1 className="ProTitle" style={{color: "black"}}>Harry Potter Books</h1>
                <Container>
                <CarouselHarryP/>
                </Container>
                <br/><br/>
            </div>
            <div className="Parallax">
                <br /><br />
            </div>
        </>
    )
}
export default Books

