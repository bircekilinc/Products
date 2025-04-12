import React from "react";
import "../css/Card.css";

function Products({ urunler: { id, name, color, price, image } }) {
  return (
    <div className="card mt-3 text-center">
      <div>
        <img
          src={image}
          alt=""
          className="card-img-top imgs"
          style={{ width: "250px", height: "300px" }}
        />
        <img
          src={image}
          alt=""
          className="card-img-top imgs"
          style={{ width: "250px", height: "300px" }}
        />
      </div>
      <div className="card-body">
        <h3 className="card-text">{name}</h3>
        <hr />
        <h5 className="card-text">{color}</h5>

        <h5 className="card-text">{price}$</h5>
      </div>
    </div>
  );
}

export default Products;
