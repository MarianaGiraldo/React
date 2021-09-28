import React from 'react'
import {Card} from 'react-bootstrap'
import Img from './Product2.svg'

const Productos2 = () => {
    return(
        <Card style={{ width: '18rem' }} className="mx-4 Card rounded">
            <Card.Img variant="top" src={Img}/>
        </Card>
    )
}
export default Productos2