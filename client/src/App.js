import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

import Home from './components/Home'
import ProductList from './components/ProductList'
import OrderPage from './components/OrderPage'

class App extends Component {
  state = {
    isLoggedIn: false,
    error: '',
    products: [],
    orders: [],
    order_items: {products: []}
    }

    isLoggedIn = () => {
      if (this.state.isLoggedIn === false) {
        this.setState({isLoggedIn: true})
      }else
      {this.setState({isLoggedIn: false})
      }
    }

  componentWillMount(){
    this.fetchProducts()
    this.fetchOrder()
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
  fetchOrder = async () => {
    try {
      const res = await axios.get('/api/order/:id')
      await this.setState({order: res.data})
      return res.data
      }
      catch (err) {
        console.log(err)
        await this.setState({error: err.message})
        return err.message
      }
  }

  async createOrderItem(newOrderItem){
    try{
      const res = await axios.post(`/api/orders/${this.props.match.params.id}/order_items`)
      newOrderItem = res.data
      const updatedOrderItems = [...this.state.order_items]
      this.setState({order_items: updatedOrderItems})
    }
    catch(err){
      console.log(err)
    }
  }

  addProductToOrder = async (newOrderItem) => {
    try{
      await this.createOrderItem(newOrderItem)
      const order_items = [...this.state.order_items]
      order_items.push(newOrderItem)
      this.setState({ order_items })
    }
    catch(err){
      console.log(err)
    }
  }

  // addProductToOrder = (idToAddToOrder) => {
  //   const orderItems = [...this.state.orderItems]
  //   const product = {
  //       ...this.state.order[idToAddToOrder]
  //   }
  //   orderItems.push(product)
  //   this.setState({orderItems})
  // }
  
  render() {

    const HomeComponent = () => (<Home />)
    const ProductListComponent = () => (<ProductList products={this.state.products}/>)
    const OrderPageComponent = () => (<OrderPage />)
    
    return (
      <Router>
        <div className="App">
          <div></div>
          <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/products" component={ProductListComponent} />
          <Route exact path="/order/:id" component={OrderPageComponent} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
