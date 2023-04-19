import React, { SetStateAction } from "react";

type ContentProps = {
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>;
  setCheckoutClicked: React.Dispatch<SetStateAction<boolean>>;
};

const Content = ({ count, setCount, setCheckoutClicked }: ContentProps) => {
  const handleCheckoutButton = () => {
    if (count !== 0) {
      setCheckoutClicked(true);
    }
  };

  const onClick = () => {
    setCount((c) => c + 1);
  };
  const onClickDec = () => {
    setCount((c) => Math.max(c - 1, 0));
  };

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
        <div className="new-price-and-discount">
          <p className="content__new-price">$125.00</p>
          <p className="content__discount">50%</p>
        </div>
        <p className="content__old-price">$250.00</p>
      </div>
      <div className="button-and-count">
        <div className="content__count count">
          <button
            type="button"
            className="count__minus"
            aria-label="Minus one item"
            onClick={onClickDec}
          />
          <p className="count__number">{count}</p>
          <button
            type="button"
            className="count__plus"
            aria-label="Plus one item"
            onClick={onClick}
          />
        </div>
        <button
          onClick={handleCheckoutButton}
          type="button"
          className="content__button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Content;
