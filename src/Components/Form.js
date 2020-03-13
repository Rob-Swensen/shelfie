import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            editingId: this.props.selected.id
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.selected.id !== prevProps.id){
            this.setState({})
        }
    }

    handleChange= (e) => {
        this.setState({
            [e.target.placeholder]: e.target.value
        })
    }
   
    handleCancel = () => {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
    })
    }


    handleAdd = () => {
        const {name, price, imgurl} = this.state
        axios.post('/api/product', {name, price, imgurl})
        .then(() => {this.props.get()})
        .catch(error => console.log(error))
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    updateProduct = (id) => {
        const {name, price, imgurl} = this.state
        axios.put(`/api/inventory/${id}`, {name, price, imgurl})
        .then(() => this.props.get())
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <input value={this.state.imgurl} placeholder='imgurl' onChange={e => this.handleChange(e)} />
                <input value={this.state.name} placeholder='name' onChange={e => this.handleChange(e)} />
                <input value={this.state.price} placeholder='price' onChange={e => this.handleChange(e)} />
                <button onClick={this.handleCancel}>Cancel</button>
                <button onClick={this.handleAdd}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;