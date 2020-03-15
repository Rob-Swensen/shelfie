import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     name: this.props.selected.name,
        //     price: this.props.selected.price,
        //     img: this.props.selected.img,
        //     editingId: this.props.selected.id
        // }
    }

    componentDidUpdate(prevProps){
        // console.log(prevProps.selected.id)
        if(this.props.selected.id !== prevProps.selected.id){
            this.setState({
                name: this.props.selected.name,
                price: this.props.selected.price,
                img: this.props.selected.img,
                editingId: this.props.selected.id
            })
        }
    }



    handleChange = (e) => {
        this.setState({
            [e.target.placeholder]: e.target.value
        })
    }
   
    handleCancel = () => {
        this.setState({
            name: '',
            price: 0,
            img: '',
    })
    }


    handleAdd = () => {
        const {name, price, img} = this.state
        axios.post('/api/product', {name, price, img})
        .then(() => {this.props.get()})
        .catch(error => console.log(error))
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    updateProduct = (id) => {
        const {name, price, img} = this.state
        axios.put(`/api/inventory/${id}`, {name, price, img})
        .then(() => this.props.get())
        .catch(error => console.log(error))
    }


    render(){
        if(this.props.status = false){
        return(
            <div className='product-add-edit'>
                <div className='image-container'>
                    {this.state.img}
                </div>
                <p>Image URL:</p>
                <input value={this.state.img} placeholder='img' onChange={e => this.handleChange(e)} />
                <p>Product Name:</p>
                <input className='add-edit-name' value={this.state.name} placeholder='name' onChange={e => this.handleChange(e)} />
                <p>Price:</p>
                <input className='add-edit-price' value={this.state.price} placeholder='price' onChange={e => this.handleChange(e)} />
                <button className='cancel-button' onClick={this.handleCancel}>Cancel</button>
                <button className='add-button' onClick={this.handleAdd}>Add to Inventory</button>
            </div>)}
        else {return(
            <div className='product-add-edit'>
                <div className='image-container'>
                    {this.state.img}
                </div>
                <p>Image URL:</p>
                <input value={this.state.img} placeholder='img' onChange={e => this.handleChange(e)} />
                <p>Product Name:</p>
                <input className='add-edit-name' value={this.state.name} placeholder='name' onChange={e => this.handleChange(e)} />
                <p>Price:</p>
                <input className='add-edit-price' value={this.state.price} placeholder='price' onChange={e => this.handleChange(e)} />
                <button className='cancel-button' onClick={this.handleCancel}>Cancel</button>
                <button className='save-button' onClick={() => this.updateProduct(this.props.selected.id)}>Save</button>
            </div>
        )}
            
    }

}
export default Form;