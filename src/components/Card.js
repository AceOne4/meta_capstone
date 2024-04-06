import React from "react";
import delivery from "../icons_assets/bike-delivery-icon.svg";

function Card({ image, title, parg, price }) {
  return (
    <div className="card">
      <img src={image} alt="pic" />
      <div className="title">
        <h1>{title}</h1>
        <p>{price}</p>
      </div>
      <div className="parg">
        <p>{parg}</p>
      </div>
      <div className="online">
        <h6>Order a delivery </h6>
        <img src={delivery} alt="basket" />
      </div>
    </div>
  );
}

export default Card;
