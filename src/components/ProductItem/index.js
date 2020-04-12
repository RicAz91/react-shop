import React, { Component} from 'react';
import { Link } from 'react-router-dom';



import './style.scss';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props
    };
    this.handleCartAddition = this.handleCartAddition.bind(this);
  }
  handleCartAddition() {
    
    this.props.updateCart(this.state.product);
  }
  render(){
  return (
    <div className='product'>
    <Link
      to={`/product/${this.props.id}`}
      
    >
    <div className='product__item' >
    <div className="product__name">
          <strong>{this.props.base_product.name_pt}</strong>
    </div>
<div className='product__details'>
      <figure className="product__image">
        <img src={this.props.product_pictures[0].picture.url} alt={this.props.base_product.name_pt} />
        <img className='brand' src={this.props.base_product.brand.picture.url} alt={this.props.base_product.brand.name} />
      </figure>
      <div className="product__information">
      <div className="product__price">
          <span>{this.props.price}€</span>
        </div>
      </div>
      </div>
      </div>
      </Link>
      <button onClick={this.handleCartAddition} >Adicionar ao carrinho</button>
      </div>
      
  );
};
}
export default ProductItem;
