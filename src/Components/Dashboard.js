import React, {Component} from 'react';
import Product from './Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this)
    }

deleteProduct = (id) => {
    axios.delete(`/api/inventory/${id}`)
    .then(() => this.props.get())
    .catch(error => console.log(error))
}

    render(){
        const {inventory} = this.props
        let inventoryList = inventory.map((element, index) => {return <Product key={index} item={element}
        name={element.name} price={element.price} img={element.img} delete={this.deleteProduct} edit={this.props.edit}/>;});
        return(
            <div>
                {inventoryList}
            </div>
        )
    }
}

export default Dashboard;