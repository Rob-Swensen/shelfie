import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Product(props) {
  // function displayEdit(id){
  //   history.push(`/edit/${id}`)
  // }

  // displayEdit = id => {
  //   history.push(`/edit/${id}`);
  // };

  const { name, price, img } = props;
  const { id } = props.item;
  // console.log(props)
  return (
    // console.log(this.props);
    <div className="product-card">
      <section>
        <div className="product-img">{img}</div>
      </section>
      <section className="product-info">
        <div className="product-info-text">
          {name}
          <br />
          <p>${price}</p>
        </div>
        <section className="player-card-buttons">
          <button onClick={() => props.delete(id)}>Delete</button>
          <button
            className="edit-button"
            onClick={() => props.history.push(`/edit/${id}`)}
          >
            Edit
          </button>
        </section>
      </section>
    </div>
  );
}

export default withRouter(Product);
