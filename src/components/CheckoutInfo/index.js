import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import trash from './../../assets/images/trash.png'


import './style.scss';

class CheckoutInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props
    }
    this.remove = this.remove.bind(this)
    }
  remove() {
this.props.removeFromCart(this.state.product)
  }
  render(){
    console.log('product', this.state.product)
  return (
    <div className='card'>
    <Link
      to={`/product/${this.props.id}`}>
    <div className='card_props' >
      <figure className="card__image">
        <img src={this.props.product_pictures[0].picture.url} alt={this.props.base_product.name_pt} />
      </figure>
      
        <div className="card__details">
          <strong>{this.props.base_product.name_pt}</strong>
              
          <span>{this.props.price}€</span>
          
     </div>
     
      </div>
    </Link>
    <img onClick={this.remove} className="trash" src={trash} alt='trash' />
    </div>
  );
};
}
export default CheckoutInfo;
