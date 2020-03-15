import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import Form from '../Form/Form'

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            inventory: [],
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

componentDidMount(){
        axios.get('api/inventory')
        .then(response => 
          this.setState({inventory: response.data}))
        .catch(error => console.log(error))
      }

deleteProduct = (id) => {
    axios.delete(`/api/inventory/${id}`)
    .then(() => console.log('success'))
    .catch(error => console.log(error))
}

    render(){
        console.log(this.state.inventory)
        let inventoryList = this.state.inventory.map((element, index) => {return <Product key={index} item={element}
        name={element.name} price={element.price} img={element.img} delete={this.deleteProduct} edit={this.props.edit}/>;});
        return(
            <div>
                <Form get={this.componentDidUpdate}/>
                {inventoryList}
            </div>
        )
    }
}

export default Dashboard;