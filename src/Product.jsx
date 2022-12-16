import React, { useState } from "react";

const Product = ({ item, index }) => {
  const [buy, setBuy] = useState(false);
  const [details, setDetails] = useState(false);

  const handleBuy = () => {
    setBuy(!buy);
  };

  const handleDetails = () => {
    setDetails(!details);
  };

  return (
    <div>
      <div className="card" key={index}>
        <div className="img">
          <img src={item.img} alt="thinking...." />
        </div>
        <div className="main">
          <div className="title">{item.name}</div>
          <button className="details" onClick={handleDetails}>
            Details
          </button>
          <div className="price">{item.price}$</div>
          {details && (
            <div className="open-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              saepe laboriosam commodi quibusdam quaerat at illo.
              <button className="close-details" onClick={handleDetails}>
                X
              </button>
            </div>
          )}
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            officia consequatur officiis amet fugit iusto dolorum itaque dolor.
          </p>
          <button
            className={`!buy ${buy ? "bought" : "buy"}`}
            onClick={handleBuy}
            disabled={buy}
          >
            {!buy ? "Add to cart" : "Already in cart"}
          </button>

          {buy && (
            <p className="delete" onClick={handleBuy}>
              Delete from cart
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
