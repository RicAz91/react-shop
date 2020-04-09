import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navBar'
import ProductListView from './views/ProductList';
import ProductSingleView from './views/singleProduct';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
    this.updateCart = this.updateCart.bind(this);
  }
  
  updateCart(item) {
    this.setState(previousState => ({
      cart: [...previousState.cart, item]
    }));
  }
  render() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
<NavBar/>
      </header>
      <main>
<Switch>
<Route path="/" exact render={props => <ProductListView updateCart={this.updateCart} {...props} />}/> />
<Route path="/product/:id"
render={props => <ProductSingleView updateCart={this.updateCart} {...props} />}/>
</Switch>
      </main>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
