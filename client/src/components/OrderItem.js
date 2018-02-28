import React from 'react'
import { SingleProductContainer } from './styled-components/Containers'

const OrderItem = (props) => {
    
        return (
            <div>
                <SingleProductContainer>
                    <img src={props.image} alt={props.item}/>
                    <p>{props.unit_price}</p>
                    <p>{props.quantity}</p>
                    <p>{props.total_price}</p>
                    <div>
                    <button>+</button>
                    </div>
                    <div>
                    <button>-</button>
                    </div>
                    
                </SingleProductContainer>
            </div>
        )
    
}

export default OrderItem