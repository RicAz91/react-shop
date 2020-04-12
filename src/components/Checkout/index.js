import React, { Component } from 'react';
import CheckoutInfo from '../CheckoutInfo';

import './style.scss';

class CheckoutView extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
   
  }

  render() {
    console.log('midle',this.props)
      return (
        
      <div>
         <section className="shopping__cart__products">
          {this.props.cart.map(product => (
            <CheckoutInfo removeFromCart={this.removeFromCart} {...product} />
            
          ))}
          </section>
          
      </div>
    );
  }
}

export default CheckoutView;
