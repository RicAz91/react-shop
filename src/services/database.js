import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/'+'https://babyloop.pt/api/v1'
  });


const list = async () => {
    try {
      const result = await instance.get('/products');
      const products = result.data;
      return products;
    } catch (error) {
      throw error;
    }

  };



  const single = async id => {
    const result = await instance.get(`/products/${id}`);
    const product = result.data;
    return product;
  };
  
  export { list, single };
  