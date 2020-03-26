import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      img: ""
    };
  }

  componentDidMount() {
    axios.get(`/api/inventory/${this.props.match.params.id}`).then(response => {
      console.log(response.data);
      this.setState({
        name: response.data[0].name,
        price: response.data[0].price,
        img: response.data[0].img
      });
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCancel = () => {
    this.setState({
      name: "",
      price: 0,
      img: ""
    });
  };

  handleAdd = () => {
    const { name, price, img } = this.state;
    axios
      .post("/api/product", { name, price, img })
      .then(() => console.log("success"))
      .catch(error => console.log("error"));
    this.setState({
      name: "",
      price: 0,
      img: ""
    });
  };

  updateProduct = id => {
    const { name, price, img } = this.state;
    axios
      .put(`/api/inventory/${id}`, { name, price, img })
      .then(() => console.log("success"))
      .catch(error => console.log("error"));
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    if (this.props.location.pathname === "/add") {
      return (
        <div className="product-add-edit">
          <div className='add-image-space'>
            <img className="image-space" src={this.state.img} alt="product" />
          </div>
          <p>Image URL:</p>
          <input
            value={this.state.img}
            placeholder="img"
            name="img"
            onChange={e => this.handleChange(e)}
          />
          <p>Product Name:</p>
          <input
            className="add-edit-name"
            value={this.state.name}
            placeholder="name"
            name="name"
            onChange={e => this.handleChange(e)}
          />
          <p>Price:</p>
          <input
            className="add-edit-price"
            value={this.state.price}
            placeholder="price"
            name="price"
            onChange={e => this.handleChange(e)}
          />
          <section className="add-cancel-buttons">
            <button className="cancel-button" onClick={this.handleCancel}>
              Cancel
            </button>
            <Link to="/">
              <button className="add-button" onClick={() => this.handleAdd()}>
                Add to Inventory
              </button>
            </Link>
          </section>
        </div>
      );
    } else {
      return (
        <div className="product-add-edit">
          <img className="image-container" src={this.state.img} alt='product image'/>
          <p>Image URL:</p>
          <input
            value={this.state.img}
            name="img"
            onChange={e => this.handleChange(e)}
          />
          <p>Product Name:</p>
          <input
            className="add-edit-name"
            value={this.state.name}
            name="name"
            onChange={e => this.handleChange(e)}
          />
          <p>Price:</p>
          <input
            className="add-edit-price"
            value={this.state.price}
            name="price"
            onChange={e => this.handleChange(e)}
          />
          <section className="cancel-save-buttons">
            <button className="cancel-button" onClick={this.handleCancel}>
              Cancel
            </button>
            <Link to="/">
              <button
                className="save-button"
                onClick={() => this.updateProduct(this.props.match.params.id)}
              >
                Save
              </button>
            </Link>
          </section>
        </div>
      );
    }
  }
}
export default Form;
