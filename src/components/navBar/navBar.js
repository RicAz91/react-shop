import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss'
import logo from './../../assets/images/logo.png'
import { Dropdown } from 'react-bootstrap';
import CheckoutView from './../Checkout';
class NavBar extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='navBar'>
                <div className='logo'>
                <img src={logo} alt="Logo" />
                </div>
                <div className='tasks'>
                <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-menu-align-right">
  Shopping Cart <small>({this.props.cart.length})</small>
  </Dropdown.Toggle>
  <Dropdown.Menu className='dropDown'>
    <Dropdown.Item >        
    <CheckoutView cart={this.props.cart} {...this.props} /></Dropdown.Item>
     <button>Pay now</button> 
  </Dropdown.Menu>
</Dropdown>
                
                <a href='#'><img src={logo} alt="Logo" />Iniciar Sessão</a>
                <button>Vender Produto</button>
                </div>
               
                
            </div>
        );
    }
}

export default NavBar;

