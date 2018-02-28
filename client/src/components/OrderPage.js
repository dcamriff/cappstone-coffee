import React, { Component } from 'react'
import axios from 'axios'
import OrderLineItem from './OrderLineItem'
import Navbar from './Navbar'
import { OrderItemsContainer } from './styled-components/Containers'

class OrderPage extends Component {

    state = {
        order: {},
        order_items: [],
        products: []
    }

    getOrder = async () => {
        const res = await axios.get(`/api/orders/${this.props.match.params.orderId}`)
        this.setState({order: res.data})
    }

    getOrderItems = async () => {
        const res = await axios.get(`/api/orders/${this.props.match.params.orderId}/order_items`)
        this.setState({order_items: res.data})
    }

    getProducts = async (event) => {
        event.preventDefault()
        const res = await axios.get(`/api/products`)
        console.log(res)
        this.setState({products: res.data})
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value })
        event.preventDefault()
    }

    componentWillMount () {
        this.getOrder()
        this.getOrderItems()
    }

    
    render () {
        
        const orderItems = this.state.order_items.map((order_item, index) => {
            return (
                <OrderLineItem
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
                    {orderItems}
                </OrderItemsContainer>
                </div>
                
            )
    }
}




export default OrderPage