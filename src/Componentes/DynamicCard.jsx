import React from 'react';
import {Card} from 'react-bootstrap';
// import imagen from './images/Harry1.jpg';

const DynamicCard = ({img, name}) => {
    return(
        <Card style={{ width: '15rem', display: 'inline-flex' }} className="mx-3 Card rounded">
            <Card.Img variant="top" src={img} alt={name}/>
            <Card.Title style={{color: "black"}}>{name}</Card.Title>
        </Card>
    )
}
export default DynamicCard