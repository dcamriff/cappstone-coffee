import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
        return (
            <div>
                <div>
                    A Single Product
                    <img src={props.image} alt={props.item}/>
                    <p>{props.item}</p>
                    <p>{props.description}</p>
                    <p>{props.price}</p>
                </div>
                
            </div>
        )
}

export default Product