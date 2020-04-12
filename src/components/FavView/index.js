import React, { Component } from 'react';
import FavInfo from './../FavInfo';


import './style.scss';

class FavView extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
   
  }

  render() {
    console.log('fav',this.props.fav)
      return (
        
      <div>
         <section className="shopping__cart__products">
          {this.props.fav.map(product => (
            <FavInfo fav={this.state.fav} removeFromFav={this.removeFromFav} {...product} />
            
          ))}
          </section>
          
      </div>
    );
  }
}

export default FavView;
