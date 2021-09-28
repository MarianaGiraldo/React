import React from 'react'
import {Carousel} from 'react-bootstrap'
import FirstSlide from './FirstSlide.svg' 
import SecondSlide from './SecondSlide.svg'
import ThirdSlide from './ThirdSlide.svg'
import Cards from './Cards'
import Reco from './Product1'
import Pro2 from './Product2'
import Pro3 from './Product3'

const Products = () => {
    return(
        <>
        <h1 className="text-white ProTitle">Products</h1>
        <hr />
        <Carousel className="h-50 w-75 m-auto">
            <Carousel.Item >
            <img className="d-block w-100" src= {FirstSlide} alt="First slide" />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={SecondSlide} alt="Second slide" />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100"  src={ThirdSlide}  alt="Third slide" />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/><br/>
        <Cards/>
        <br/><br/><br/><br/>
        <h3 className="text-white">Recomendados para ti</h3>
        <Carousel>
            <Carousel.Item >
            <Reco />
            </Carousel.Item>
            <Carousel.Item>
            <Pro2 />
            </Carousel.Item>
            <Carousel.Item>
            <Pro3 />
            </Carousel.Item>
        </Carousel>
        <br/><br/><br/>
        </>
    )
}
export default Products

