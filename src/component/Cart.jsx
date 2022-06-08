import React, { useEffect } from "react";
import "./App.css";

export default function Cart({
  cardItems,
  setCardItems,
  handleAddProduct,
  handleRemoveProduct,
}) {
  useEffect(() => {
    console.log(cardItems);
  }, [cardItems]);
  const totalPrice = cardItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>
      {cardItems.length === 0 && (
        <div className="cart-items-empty"> No Items..!</div>
      )}
      <div>
        {cardItems.map((product) => (
          <div key={product.id} className="cart-items-list">
            <img
              className="cart-items-img"
              src={product.image}
              alt={product.title}
            />
            <div className="cart-items-name">
              {product.title.substring(0, 12)}
            </div>
            <div className="cart-items-function">
              <button
                onClick={() => handleAddProduct(product)}
                className="btn btn-success me-md-2"
              >
                +
              </button>
              <button
                onClick={() => handleRemoveProduct(product)}
                className="btn btn-danger me-md-4"
              >
                -
              </button>
            </div>
            <div className="cart-items-price m-2">
              {product.quantity} * $ {product.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total">
        Total Price{" "}
        <div className="cart-items-total-Price">$ {totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
}
