import React from 'react'
import {Card} from 'react-bootstrap'
import Img from './Product1.svg'

const Productos1 = () => {
    return(
        <Card style={{ width: '18rem' }} className="mx-4 Card rounded">
            <Card.Img variant="top" src={Img}/>
        </Card>
    )
}
export default Productos1