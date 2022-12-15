import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  const { product, deleteItem } = props;
  const { name, img, price, quantity } = product;
  return (
    <div className="main-con">
      <div>
        <img className="img" src={img} alt="" />
      </div>
      <div className="flex">
        <div>
          <h4>{name}</h4>
          <p>
            Price : $ <small>{price}</small>
          </p>
          <p>Quantity : {quantity}</p>
        </div>
        <div className="btn">
          <button onClick={() => deleteItem(product)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
