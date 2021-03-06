import React, { Component } from 'react';
import ProductItem from './../../components/ProductItem';
import './style.scss';

import { list as listProducts } from './../../services/database';

class ProductListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded:false,
      products: [],
      query:'',
      order: '',
      brand:'',
      tag:''
    };
   this.handleInputChange = this.handleInputChange.bind(this)
   this.handleCartAddition = this.handleCartAddition.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }
 
  fetchData() {
    
    listProducts()
      .then(products => {
        this.setState({
          products,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

handleInputChange(event) {
  const value = event.target.value;
  const inputName = event.target.name;

  this.setState({
[inputName]: value
  })
}

handleCartAddition() {
    
  this.props.updateCart(this.state.products);
  
}

get filterCart(){
  
 if(this.props.cart.length !== 0){
    const filterCart = this.state.products.filter(product => {
 let a = this.props.cart.map(product =>{return (product.base_product.name_pt.toLowerCase())})
       return !(a.includes(product.base_product.name_pt.toLowerCase()))
    })
  return filterCart
}
 return  this.state.products
  }



get brandFilter(){
  
const brandFilter = this.filterCart.filter(product => {
      
  return (product.base_product.brand.name.includes(this.state.brand))

})
return brandFilter

} 


get tagFilter(){

  const tagFilter = this.brandFilter.filter(product => {
      
    return (product.tag.includes(this.state.tag))
  
  })
  return tagFilter
  

}

get filteredProducts(){
    
    const filteredProducts = this.tagFilter.filter(product => {
      
      return (product.base_product.name_pt.toLowerCase().includes(this.state.query.toLowerCase()) || product.base_product.brand.name.toLowerCase().includes(this.state.query.toLowerCase()))
    });

    
    return filteredProducts
}

get sortingFunction(){
const value = this.state.order
if(value === 'rec'){return (a, b) => b.added_to_store_at - a.added_to_store_at}
else if(value === 'az'){return (a, b) => a.base_product.name_pt.toLowerCase().localeCompare(b.base_product.name_pt.toLowerCase())}
else if(value === 'za'){ return (a, b) => b.base_product.name_pt.toLowerCase().localeCompare(a.base_product.name_pt.toLowerCase())}
else if(value === 'pAsc'){return (a, b) => b.price + a.price}
else if(value === 'pDes'){return (a, b) => b.price - a.price}
else {return (a, b) => b.added_to_store_at - a.added_to_store_at}

}


  
  render() {
    console.log('state',this.props.cart)
    return (
      
      <div className='productPage'>
     {this.state.loaded && (

      
        <div className='productPage_content'>
       
        <aside className='productPage_content__aside'>
      
        <form className='productPage_search'>
          <input
          type = 'search'
          name = 'query'
          value = {this.state.query}
          onChange = {this.handleInputChange}
          placeholder = 'Procurar...'
          />
        </form>

<div>
  <div>
<label htmlFor="brand">Escolha uma marca</label>
<select className='productPage_select' onChange = {this.handleInputChange} id="brand" name="brand" form="brand">
  <option value="">Todas</option>
  <option value="Chicco">Chicco</option>
  <option value="Be safe">Be safe</option>
  <option value="Giordani">Giordani</option>
  <option value="BébéConfort">BébéConfort</option>
  <option value="Janè">Janè</option>
  <option value="EasyWalker">EasyWalker</option>
  <option value="Quinny">Quinny</option>
  <option value="Maxi-Cosi">Maxi-Cosi</option>
  </select>
  </div>
<div>
  <label htmlFor="tag">Escolha uma Tag</label>
<select className='productPage_select' onChange = {this.handleInputChange} id="tag" name="tag" form="tag">
  <option value="">Todas</option>
  <option value="gemeos">Gémeos</option>
  <option value="bestSeller">Best Seller</option>
  <option value="novo">Novo</option>
  <option value="flashSale">Flash Sale</option>
  </select>
  </div>
<div>
  <label htmlFor="order">Ordenar por:</label>
<select className='productPage_select' onChange = {this.handleInputChange} id="order" name="order" form="order">
  <option value="rec">Mais recente</option>
  <option value="az">De A a Z</option>
  <option value="za">De Z a A</option>
  <option value="pAsc">Preço Ascendente</option>
  <option value="pDes">Preço Descendente</option>
  </select>
  </div>
  </div>  

        </aside>
        
        <div className="productPage_content__list">
         {this.filteredProducts.sort(this.sortingFunction).map(product => (
            <ProductItem key={product.id} updateCart={this.updateCart} {...this.props} {...product} />
          ))}
        </div>
        </div>)}
      </div>
    );
  }
}

export default ProductListView;
