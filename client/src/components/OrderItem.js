import React, { Component } from 'react'

class OrderItem extends Component {
    render() {
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
        )
    }
}

export default OrderItem