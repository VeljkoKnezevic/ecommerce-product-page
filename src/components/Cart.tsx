import React, { SetStateAction } from "react";

type CartProps = {
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>;
  checkoutClicked: boolean;
  setCheckoutClick: React.Dispatch<SetStateAction<boolean>>;
};

const Cart = ({
  count,
  setCount,
  checkoutClicked,
  setCheckoutClick,
}: CartProps) => {
  const handleRemoveClick = () => {
    setCount(0);
    setCheckoutClick(false);
  };

  return (
    <div className="cart">
      <h2 className="cart__heading">Cart</h2>
      <div className="cart__body">
        {count === 0 || !checkoutClicked ? (
          <p className="cart__body__text">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart__content">
              <img
                className="cart__content__image"
                src="/images/image-product-1-thumbnail.jpg"
                alt="shoes"
              />
              <div className="cart__content__text-container">
                <p className="cart__content__name">
                  Fall Limited Edition Sneakers
                </p>
                <div className="price-and-total">
                  <p className="cart__content__price">$125.00 x {count}</p>
                  <p className="cart__content__total">{`$${125 * count}.00`}</p>
                </div>
              </div>
              <button
                onClick={handleRemoveClick}
                type="button"
                className="cart__content__remove"
                aria-label="remove item"
              />
            </div>
            <button type="button" className="cart__button">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
