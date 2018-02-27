import React from 'react'
import { Link } from 'react-router-dom'
import { SingleProductContainer } from './styled-components/Containers'

const Product = (props) => {
        return (
            <div>
                <SingleProductContainer>
                    <img src={props.image} alt={props.item}/>
                    <p>{props.item}</p>
                    <p>{props.description}</p>
                    <p>{props.price}</p>
                </SingleProductContainer>
                
            </div>
        )
}

export default Product