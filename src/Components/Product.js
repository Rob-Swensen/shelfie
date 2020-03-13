import React, {Component} from 'react';

class Product extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
               <section>
                {this.props.name}
                {this.props.price}
                {this.props.img}
               </section>
            {/* <button onClick={this.props.delete(this.props.item.id)}>Delete</button> */}
           </div>
        )
    }
}

export default Product;