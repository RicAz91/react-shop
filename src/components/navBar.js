import React, { Component } from 'react';
import './navBar.scss'
import logo from './../assets/images/logo.png'
class NavBar extends Component {
    render() {
        return (
            <div className='navBar'>
                <div className='logo'>
                <img src={logo} alt="Logo" />
                </div>
                <div className='tasks'>
                <a href='#'><img src={logo} alt="Logo" />Shoping Cart</a>
                <a href='#'><img src={logo} alt="Logo" />Iniciar Sessão</a>
                <button>Vender Produto</button>
                </div>
               
                
            </div>
        );
    }
}

export default NavBar;