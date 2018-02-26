import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import Home from './components/Home'
import ProductList from './components/ProductList'

class App extends Component {
  
  render() {

    const HomeComponent = () => (<Home />)
    const ProductList = () => (<ProductList />)

    return (
      <Router>
        <div className="App">
          <div></div>
          <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/products" component={ProductList} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
