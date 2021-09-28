import React from 'react'
import CardEjemplo from './Card'

const Cards = () => {
    return(
        <div style={{ display: 'inline-flex' }}className="m-auto">
            <CardEjemplo />
            <CardEjemplo />
            <CardEjemplo />
        </div>    )
}
export default Cards