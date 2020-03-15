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
           <div className='product-card'>
               <section>
                   <div className='product-img'>
                     {img}
                   </div>
               </section>
                <section className='product-info'>
                        <div className='product-info-text'>
                            {name}<br/>
                            <p>${price}</p>
                        </div>
                        <section className='player-card-buttons'>
                            <button onClick={() => this.props.delete(id)}>Delete</button>
                            <button onClick={() => this.handleEdit(id, name, price, img)}>Edit</button>
                        </section>
                </section>
           </div>
        )
    }
}

export default Product;