import React, { Component } from 'react'
import { SingleProductContainer } from './styled-components/Containers'

class OrderLineItem extends Component {

    render () {

        const orderLineItem = this.props.listOfLineItems.map((order_item, index) => {

            return (
                <div key={index}>
                    <SingleProductContainer>
                        <img src={order_item.image} alt="product"/>
                        <p>{order_item.description}</p>
                        <p>{order_item.price}</p>
                        <div>
                        <button>+</button>
                        </div>
                        <div>
                        <button>-</button>
                        </div>
                        
                    </SingleProductContainer>
                </div>
            )
        })

            return (
                <div></div>
            )
    
        }

    }

export default OrderLineItem