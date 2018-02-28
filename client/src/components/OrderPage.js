import React, { Component } from 'react'
import axios from 'axios'
import OrderItem from './OrderItem'
import Navbar from './Navbar'
import { OrderItemsContainer } from './styled-components/Containers'

class OrderPage extends Component {

    state = {
        order_items: {products: []}
    }

    
    render () {
        
        const orderItems = this.state.order_items.map((order_item, index) => {
            return (
                <OrderItem
                image={order_item.image}
                item={order_item.item}
                description={order_item.description}
                price= {order_item.price}
                key={index}
                productId={order_item.id} />  
                )
        })
            return (
                <div>
                <Navbar />
                <OrderItemsContainer>
                    Menu
                    {orderItems}
                </OrderItemsContainer>
                </div>
                
            )
    }
}




export default OrderPage