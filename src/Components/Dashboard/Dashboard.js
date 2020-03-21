import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
    };
  }

  componentDidMount() {
    axios
      .get("api/inventory")
      .then(response => this.setState({ inventory: response.data }))
      .catch(error => console.log("error"));
  }

  // componentDidUpdate(prevState) {
  //   if (prevState.inventory !== this.state.inventory) {
  //     axios
  //       .get("api/inventory")
  //       .then(response => this.setState({ inventory: response.data }))
  //       .catch(error => console.log("error"));
  //   }
  // }

  deleteProduct = id => {
    axios
      .delete(`/api/inventory/${id}`)
      .then(response => this.setState({inventory: response.data}))
      .catch(error => console.log("error"));
  };


  render() {
    console.log(this.props)
    let inventoryList = this.state.inventory.map((element, index) => {
      return (
        <Product
          key={index}
          item={element}
          name={element.name}
          price={element.price}
          img={element.img}
          delete={this.deleteProduct}
          edit={this.changeEditStatus}
        />
      );
    });
    return (
      <div>
        {/* <Form status={this.state.editStatus} get={this.componentDidUpdate}/> */}
        {inventoryList}
      </div>
    );
  }
}

export default Dashboard;
