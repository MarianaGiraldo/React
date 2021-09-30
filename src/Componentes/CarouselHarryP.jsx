import React from 'react';
import {Carousel} from 'react-bootstrap';
import Cards1 from './Cards1';
import Cards2 from './Cards2';

const CarouselHarryP = () => {
    return(
        <Carousel>
            <Carousel.Item className="m-auto">
                <Cards1 className="m-auto w-75" />
            </Carousel.Item>
            <Carousel.Item>
                <Cards2 className="m-auto w-75" />
            </Carousel.Item>
        </Carousel>
    )
}
export default CarouselHarryP