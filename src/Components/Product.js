import React, {Component} from 'react';

class Product extends Component {
    constructor(props){
        super(props);
    }

    handleEdit(id, name, price, img){
        this.props.edit(id, name, price, img)
    }

    render(){
        const {name, price, img} = this.props
        const {id} = this.props.item
        return(
           <div>
               <section>
                {img}
                {name}
                {price}
               </section>
                <button onClick={() => this.props.delete(id)}>Delete</button>
                <button onClick={() => this.handleEdit(id, name, price, img)}>Edit</button>
           </div>
        )
    }
}

export default Product;