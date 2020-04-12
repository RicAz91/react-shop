import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navBar/navBar'
import ProductListView from './views/ProductList';
import ProductSingleView from './views/singleProduct';
import CheckoutView from './components/Checkout';

import { Toast} from 'react-bootstrap';


class App extends Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      toast:false,
      show:true,
      fav: [],
    };
    this.updateCart = this.updateCart.bind(this);
    this.resetCart = this.resetCart.bind(this)
    this.toastChangeStatus = this.toastChangeStatus.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.updateFav = this.updateFav.bind(this)
    this.removeFromFav = this.removeFromFav.bind(this)
    
  }
  
  toastChangeStatus(){
    this.setState({
      toast: false
    }) 
  }

  updateCart(item) {
    this.setState(previousState => ({
      cart: [...previousState.cart, item]
    }));
    this.resetCart()

  }

  removeFromCart(item){
    
    const newCart = this.state.cart.filter(cartItem =>{
      return cartItem.id !== item.id
    })
    this.setState({
      cart: [...newCart]
    })
  }

  updateFav(item) {
    this.setState(previousState => ({
      fav: [...previousState.fav, item]
    }));
    }

  removeFromFav(item){
   
    const newFav = this.state.fav.filter(favItem =>{
      return favItem.id !== item.id
    })
    this.setState({
      fav: [...newFav]
    })
  }

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem('user'));
if(localStorage.getItem('user')){
  this.setState({
      cart: this.userData.cart,
      toast: this.userData.toast,
      show: this.userData.show,
      fav: this.userData.fav,
  })
  
}else{
  this.setState({
    cart: [],
      toast:false,
      show:true,
      fav: [],
  })
}
  } 
  
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('user', JSON.stringify(nextState))
  }

 resetCart(){
  setTimeout(() => {
    this.setState({
      cart: []
    })
  }, 60*60*1000); 
  this.setState({
    toast: true
  })   
  this.Alert()
}

Alert() {
  this.show = !this.show
 
}

  render() {
   console.log('want',this.state)
  return (
    <div className="App">
          <BrowserRouter>
      <header>
<NavBar cart={this.state.cart} fav={this.state.fav} />

      </header>
      <main>
<Switch>
<Route path="/checkout"
                render={props => <CheckoutView removeFromCart={this.removeFromCart} removeFromFav={this.removeFromFav} fav={this.state.fav} cart={this.state.cart} {...props} />}/>
<Route path="/" exact render={props => <ProductListView removeFromCart={this.removeFromCart} removeFromFav={this.removeFromFav} updateFav={this.updateFav} updateCart={this.updateCart} fav={this.state.fav} cart={this.state.cart} {...props} />}/> />
<Route path="/product/:id"
render={props => <ProductSingleView removeFromCart={this.removeFromCart} removeFromFav={this.removeFromFav} updateFav={this.updateFav} updateCart={this.updateCart} fav={this.state.fav} cart={this.state.cart} {...props} />}/>

</Switch>
      </main>
      </BrowserRouter>
     <div>
      <div aria-live="polite"
                        aria-atomic="true"
                        style={{ position: 'fixed', minHeight: '100px' }}>
                        {this.state.toast && (
                          <Toast
                            style={{
                              backgroundColor: `rgb(255, 255, 255)`,
                              position: 'fixed',
                              bottom: 0,
                              right: 0
                            }}
                            onClose={this.toastChangeStatus}
                            show={this.toast}
                            animation={true}
                            delay={7000}
                            autohide
                            bsPrefix = 'toast'
                          >
                            <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Baby Loop</strong>
            </Toast.Header>
                            <Toast.Body bsPrefix='toast-body' >
                              O seu produto ficará reservado durante 60 minutos
                              </Toast.Body>
                          </Toast>
                        )}
                      </div>
                      </div>        
                  

    </div>
  );
}
}

export default App;
