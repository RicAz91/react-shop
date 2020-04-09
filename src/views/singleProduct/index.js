import React, { Component, Fragment } from 'react';

import './style.scss';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { single as loadSingleProduct } from './../../services/database';
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';

class ProductSingleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleCartAddition = this.handleCartAddition.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log('this', this.props)
    const id = this.props.match.params.id;
    loadSingleProduct(id)
      .then(product => {
        this.setState({ product });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleCartAddition() {
    
    this.props.updateCart(this.state.product);
  }
  
  render() {
    const { product } = this.state;

    return (
      <div className="product__single">
        {(product && (
          <Fragment>
            <Link to='/'><h3>Voltar para trás</h3></Link>
            <figure className="product__single__image">
              <Carousel autoPlay>
                <div>
                <img src={product.product.product_pictures[0].picture.url} alt={product.product.base_product.name_pt} />
                </div>
                <div>
                <img src={product.product.product_pictures[1].picture.url} alt={product.product.base_product.name_pt} />
                </div>
              </Carousel>
              
            </figure>
            <div className="product__single__description">
              <h1>{product.product.base_product.name_pt}</h1>
              <h4>Modelo</h4>
              <p>{product.product.base_product.model_pt}</p>
              <h4>Descrição</h4>
              <p>{product.product.description_pt}</p>
              <h4>Marca</h4>
              <span><img src={product.product.base_product.brand.picture.url} alt={product.product.base_product.brand.name} /> </span>
              <h2>{product.product.price}€</h2>
<button onClick={this.handleCartAddition}>Adicionar ao Carrinho</button>
            </div>
          </Fragment>

        )) ||
          ''}
      </div>
    );
  }
}

export default ProductSingleView;
