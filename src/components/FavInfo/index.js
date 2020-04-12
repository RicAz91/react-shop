import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import unfav from './../../assets/images/unfav.png'


import './style.scss';

class FavInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props
    }
    this.remove = this.remove.bind(this)
    }
  remove() {
this.props.removeFromFav(this.state.product)
  }

  render(){
    console.log('here fav', this.props)
  return (
    <div className='card'>
    <Link
      to={`/product/${this.props.product.id}`}>
    <div className='card_props' >
      <figure className="card__image">
        <img src={this.props.product.product_pictures[0].picture.url} alt={this.props.product.base_product.name_pt} />
      </figure>
      
        <div className="card__details">
          <strong>{this.props.product.base_product.name_pt}</strong>
              
          <span>{this.props.product.price}€</span>
          
     </div>
     
      </div>
    </Link>
    <img onClick={this.remove} className="unfav" src={unfav} alt='Not Favorite' />
    </div>
  );
};
}
export default FavInfo;
