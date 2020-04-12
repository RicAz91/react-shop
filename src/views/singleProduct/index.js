import React, { Component, Fragment } from 'react';
import arrow from './../../assets/images/arrow.png'
import fav from './../../assets/images/fav.png'
import nofav from './../../assets/images/nofav.png'
import './style.scss';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { single as loadSingleProduct } from './../../services/database';
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';

class ProductSingleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      imgFav:false,
      
    };
    this.handleCartAddition = this.handleCartAddition.bind(this);
    this.handleFavAddition = this.handleFavAddition.bind(this)
    
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    
    const id = this.props.match.params.id;
    loadSingleProduct(id)
      .then(product => {
        this.setState({ 
          product,
          
         });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleCartAddition() {
    
    this.props.updateCart(this.state.product.product);
  }

  handleFavAddition() {
    this.imgFav = !this.imageFav
    this.props.updateFav(this.state.product);
   
  }

  render() {
    const { product } = this.state;

    return (
      <div className="product__page">
        {(product && (
          <Fragment>
            <div className="back">
            <Link to='/'><h3> <img src={arrow} alt="Arrow" />Voltar para trás</h3></Link>
            </div>
            <div className="product__single">
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
              <h1>{product.product.base_product.name_pt} <img className='fav'onClick={this.handleFavAddition} src={this.imgFav? fav : nofav} alt="Favorite" /></h1>
              <h4>Modelo</h4>
              <h5>{product.product.base_product.model_pt}</h5>
              <h4>Descrição</h4>
              <h5>{product.product.description_pt}</h5>
              <h4>Marca</h4>
              <span><img src={product.product.base_product.brand.picture.url} alt={product.product.base_product.brand.name} /> </span>
              <h4>Preço</h4>
              <h2>{product.product.price}€</h2>
              
<button onClick={this.handleCartAddition}>Adicionar ao Carrinho</button>
            </div>
            </div>
          </Fragment>

        )) ||
          ''}
      </div>
    );
  }
}

export default ProductSingleView;
