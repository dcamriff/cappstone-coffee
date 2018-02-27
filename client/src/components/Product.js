import React from 'react'
import { Link } from 'react-router-dom'
import { SingleProductContainer } from './styled-components/Containers'

// When I click on the + button, it adds the item to the shopping cart aka 'Order'

const Product = (props) => {
        return (
            <div>
                <SingleProductContainer>
                    <img src={props.image} alt={props.item}/>
                    <p>{props.item}</p>
                    <p>{props.description}</p>
                    <p>{props.price}</p>
                    <div>
                    <button>+</button>
                    </div>
                    
                </SingleProductContainer>
                
            </div>
        )
}

export default Product