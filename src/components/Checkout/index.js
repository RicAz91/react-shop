import React, { Component } from 'react';
import CheckoutInfo from '../CheckoutInfo';

import './style.scss';

class CheckoutView extends Component {
  constructor() {
    super();
  
  }


  render() {
    console.log('cart',this.props.cart)
    return (

      <div>
         <section className="shopping__cart__products">
          {this.props.cart.map(product => (
            <CheckoutInfo {...this.props} {...product} />
          ))}
       </section>
      </div>
    );
  }
}

export default CheckoutView;
