import React from 'react'
import Product from './Product'

const ProductList = (props) => {

    const productList = props.products.map((product, index) => {
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
            <div>
                {productList}
            </div>
        )
}

export default ProductList