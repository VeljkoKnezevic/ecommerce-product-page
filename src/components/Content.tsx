import React from "react";

const Content = () => {
  return (
    <div className="content">
      <p className="content__text">Sneaker Company</p>
      <h2 className="content__heading">Fall Limited Edition Sneakers</h2>
      <p className="content__para">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="content__price">
        <p className="content__new-price">$125.00</p>
        <p className="content__discount">50%</p>
        <p className="conetnt__old-price">$250.00</p>
      </div>
      <div className="content__count"></div>
      <button type="button" className="content__button">
        Add to cart
      </button>
    </div>
  );
};

export default Content;
