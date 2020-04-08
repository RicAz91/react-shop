import React from 'react';
import { Link } from 'react-router-dom';



import './style.scss';

const ProductItem = props => {
  console.log(props)
  return (
    // <Link
    //   to={`/product/${props._id}`}
    //   
    // >
    <div className='product__item'>
      <figure className="product__image">
        <img src={props.product_pictures[0].picture.url} alt={props.base_product.name} />
      </figure>
      <header className="product__information">
        <div className="product__details">
          <strong>{props.base_product.name}</strong>
  <img src={props.base_product.brand.picture.url} alt={props.base_product.brand.name} />
          </div>
        <div className="product__price">
          <span>{props.price}€</span>
        </div>
      </header>
      <button>Adicionar ao carrinho</button>
      </div>
    //</Link>
  );
};

export default ProductItem;
