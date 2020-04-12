import React, { Component } from 'react';

import './style.scss'
import logo from './../../assets/images/logo.png'
import shoppingCart from './../../assets/images/shoppingCart.png'
import login from './../../assets/images/login.png'
import fav from './../../assets/images/fav.png'
import { Dropdown } from 'react-bootstrap';
import CheckoutView from './../Checkout';
import FavView from './../FavView';
class NavBar extends Component {
    constructor(props){
        super(props)
        
    }

get totalPrice(){
    if(this.props.cart.length >= 1){
        const subTotal = this.props.cart.map(product=>{
            return product.price
        })
        
        const total = subTotal.reduce((a,b) => Number(a)+Number(b))
        console.log('here',total)
        return Number(total).toFixed(2)
    }
    
}

    render() {
       
        return (
            <div className='navBar'>
                <div className='logo'>  
                <img src={logo} alt="Logo" />
                </div>
                <div className='navBar_tasks'>
                <div className='navBar_tasks__item'>
    <Dropdown>
  <Dropdown.Toggle variant="" id="dropdown-menu-align-right" >
  <img src={fav} alt="Favorites" />
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <Dropdown.Item >        
    <FavView fav={this.props.fav} {...this.props} />
    </Dropdown.Item>
    {this.props.fav.length < 1 && (
     <div className="message">
         <h3>Ainda não favoritos!</h3>
     </div>
        )}
     
  </Dropdown.Menu>
</Dropdown>
</div>
                <div className='navBar_tasks__item'>
                

                <Dropdown>
  <Dropdown.Toggle variant="" id="dropdown-menu-align-right">
  <img src={shoppingCart} alt="shoppingCart" /> <small>({this.props.cart.length})</small>
  </Dropdown.Toggle>
  <Dropdown.Menu >
      
    <Dropdown.Item >        
    <CheckoutView cart={this.props.cart} {...this.props} />
    </Dropdown.Item>
        {this.props.cart.length >= 1 && (
    <div className="checkOut">
    <span>Total:  {this.totalPrice}€</span>
     <button>Pagar</button>
     </div>
     )}
     {this.props.cart.length < 1 && (
     <div className="message">
         <h3>Ainda não existem itens no carrinho</h3>
     </div>
        )}
     
  </Dropdown.Menu>
</Dropdown>
</div>
                <div className='navBar_tasks__item'>
                <button href='#' className='login'><img src={login} alt="Logoin" />Iniciar Sessão</button>
                </div>
                <div className='navBar_tasks__item'>
                <button>Vender Produto</button>
                </div>
                </div>
               
                
            </div>
        );
    }
}

export default NavBar;

