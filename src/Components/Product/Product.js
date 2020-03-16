import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
    constructor(props){
        super(props);

    }

displayEdit = () => {
        this.props.edit()
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
                                <Link to='/edit/:id'>
                                    <button className='edit-button' onClick={this.displayEdit}>Edit</button>
                                </Link>
                            </section>
                    </section>
               </div>
            )
            
        }
    }

export default Product;