import React from 'react'
import {Card} from 'react-bootstrap'
import Img from './Product.svg'

const CardEjemplo = () => {
    return(
        <Card style={{ width: '25rem' }} className="mx-4 Card rounded">
            <Card.Img variant="top" src={Img}/>
        </Card>
    )
}
export default CardEjemplo