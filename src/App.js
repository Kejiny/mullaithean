import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from './components/Modal';
import About from "./components/About";
import Footer from "./components/Footer";
import Checkout from './components/Checkout';
import Contact from './components/Contact';

export default class App extends Component {
  render(){
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route  exact path="/" component={ProductList} />
        <Route path="/details" component={Details}/>
        <Route path="/about" component={About}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/contact" component={Contact}/>
        <Route component={Default}/>
      </Switch>
      <Modal />
      <Footer/>
    </React.Fragment>
  )
  }
}

