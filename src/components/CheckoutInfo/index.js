import React, { Component} from 'react';
import { Link } from 'react-router-dom';



import './style.scss';

class CheckoutInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props
    };
    }
  
  render(){
  return (
    <Link
      to={`/product/${this.props.id}`}>
    <div className='product__item'>
      <figure className="product__image">
        <img src={this.props.product_pictures[0].picture.url} alt={this.props.base_product.name_pt} />
      </figure>
      <header className="product__information">
        <div className="product__details">
          <strong>{this.props.base_product.name_pt}</strong>
  <img src={this.props.base_product.brand.picture.url} alt={this.props.base_product.brand.name} />
          </div>
        <div className="product__price">
          <span>{this.props.price}€</span>
        </div>
      </header>
     
      </div>
    </Link>
  );
};
}
export default CheckoutInfo;
