import React from 'react'
import { SingleProductContainer, ItemName, Description, Price } from './styled-components/Containers'

// When I click on the + button, it adds the item to the shopping cart aka 'Order'


const Product = (props) => {

    const cart = []
    
        return (
            <div>
                <SingleProductContainer>
                    <img src={props.image} alt={props.item}/>
                    <ItemName>{props.item}</ItemName>
                    <Description>{props.description}</Description>
                    <Price>{props.price}</Price>
                    <div>
                    <button>+</button>
                    </div>
                    
                </SingleProductContainer>
                
            </div>
        )
}

export default Product