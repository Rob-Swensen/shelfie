import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import {HashRouter} from 'react-router-dom';
import './Reset.css';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: [],
      selectedProduct: {
        id: 0,
        name: '',
        price: 0,
        img: ''
      }
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.addSelectedProduct = this.addSelectedProduct.bind(this)
  }

  componentDidMount(){
    axios.get('api/inventory')
    .then(response => 
      this.setState({inventory: response.data}))
    .catch(error => console.log(error))
  }

  addSelectedProduct(id, name, price, img){
    console.log()
    this.setState({
      selectedProduct: {
        id,
        name,
        price,
        img,
      }
    })
  }


  render(){
    console.log(this.state.selectedProduct)
    return(
      <HashRouter>
      <div>
          <Header />
          <Dashboard inventory={this.state.inventory} get={this.componentDidMount} edit={this.addSelectedProduct}/>
          <Form get={this.componentDidMount} selected={this.state.selectedProduct}/>
      </div>
      </HashRouter>
    )
  }
}

export default App;
