import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navBar'
import ProductListView from './views/ProductList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
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
<Route path="/" exact component={ProductListView} />
</Switch>
      </main>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
