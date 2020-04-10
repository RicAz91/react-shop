import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navBar/navBar'
import ProductListView from './views/ProductList';
import ProductSingleView from './views/singleProduct';
import CheckoutView from './components/Checkout';
import { Toast, Buttom } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      toast:false
    };
    this.updateCart = this.updateCart.bind(this);
    this.resetCart = this.resetCart.bind(this)
    this.toastChangeStatus = this.toastChangeStatus.bind(this)
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

 resetCart(){
  setTimeout(() => {
    this.setState({
      cart: []
    })
  }, 60*60*1000);
  this.setState({
    toast: true
  })   
  //alert("O seu produto ficará reservado durante 60 minutos");
}


  render() {
  return (
    <div className="App">
          <BrowserRouter>
      <header>
<NavBar cart={this.state.cart} />

      </header>
      <main>
<Switch>
<Route path="/checkout"
                render={props => <CheckoutView cart={this.state.cart} {...props} />}/>
<Route path="/" exact render={props => <ProductListView updateCart={this.updateCart} cart={this.state.cart} {...props} />}/> />
<Route path="/product/:id"
render={props => <ProductSingleView updateCart={this.updateCart} cart={this.state.cart} {...props} />}/>
</Switch>
      </main>
      </BrowserRouter>
     
      <div
                        aria-live="polite"
                        aria-atomic="true"
                        style={{ position: 'fixed', minHeight: '100px' }}
                      >
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
                            redirect="/"
                            animation={false}
                          >
                            <Toast.Header
                              style={{
                                backgroundColor: `rgb(52, 148, 230)`,
                                color: `rgb(255, 255, 255)`
                              }}
                            >
                              <strong className="mr-auto">Baby Loop</strong>
                            </Toast.Header>
                            <Toast.Body>
                              O seu produto ficará reservado durante 60 minutos
                              </Toast.Body>
                          </Toast>
                        )}
                      </div>
                   
                  

    </div>
  );
}
}

export default App;
