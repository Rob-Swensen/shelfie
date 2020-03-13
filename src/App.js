import React, {Component} from 'react';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Header from './Components/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: [],
      selectedProduct: [],
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    axios.get('api/inventory')
    .then(response => 
      this.setState({inventory: response.data}))
    .catch(error => console.log(error))
  }


  render(){
    console.log(this.state.inventory)
    return(
      <div> 
        <Dashboard inventory={this.state.inventory} get={this.componentDidMount}/>
        <Form get={this.componentDidMount} selected={this.state.selectedProduct}/>
        <Header />
      </div>
    )
  }
}

export default App;
