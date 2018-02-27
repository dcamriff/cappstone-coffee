import React, { Component } from 'react'
import axios from 'axios'
import Product from './Product'
import { ProductsContainer } from './styled-components/Containers'

class ProductList extends Component {
    constructor(){
        super()
        this.state = {
            error: '',
            products: []
        }
    }

    componentWillMount(){
        this.fetchProducts()
    }

    fetchProducts = async () => {
        try {
            const res = await axios.get('/api/products')
            await this.setState({products: res.data})
            return res.data
        }
        catch (err) {
            console.log(err)
            await this.setState({error: err.message})
            return err.message
        }
    }
    render () {
        if (this.state.error){
            return <div>{this.state.error}</div>
        }
        const productList = this.state.products.map((product, index) => {
            return (
                <Product
                image={product.image}
                item={product.item}
                description={product.description}
                price= {product.price}
                key={index}
                productId={product.id} />  
                )
        })
            return (
                <ProductsContainer>
                    Menu
                    {productList}
                </ProductsContainer>
            )
    }
}




export default ProductList