import React, { SetStateAction } from "react";

interface HeaderProps {
  hamburgerClicked: boolean;
  setHamburgerClicked: React.Dispatch<SetStateAction<boolean>>;
  cartClicked: boolean;
  setCartClicked: React.Dispatch<SetStateAction<boolean>>;
  count: number;
  checkoutClicked: boolean;
}

const Header = ({
  hamburgerClicked,
  setHamburgerClicked,
  setCartClicked,
  cartClicked,
  count,
  checkoutClicked,
}: HeaderProps) => {
  const handleHamburger = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  return (
    <header className="header">
      <button
        type="button"
        className={`header__hamburger ${
          hamburgerClicked ? "hamburger-active" : ""
        }`}
        aria-label="Open menu"
        onClick={handleHamburger}
      ></button>

      <h1>
        <img
          className="header__logo"
          src="/images/logo.svg"
          alt="Sneakers logo"
        />
      </h1>

      <nav
        className={`header__nav nav ${hamburgerClicked ? "nav-active" : ""}`}
      >
        <ul className="nav__list">
          <li className="nav__item">Collections</li>
          <li className="nav__item">Men</li>
          <li className="nav__item">Women</li>
          <li className="nav__item">About</li>
          <li className="nav__item">Contact</li>
        </ul>
      </nav>

      <button
        type="button"
        className="header__cart"
        aria-label="Open cart"
        onClick={() => setCartClicked(!cartClicked)}
      >
        {count !== 0 && checkoutClicked ? <span>{count}</span> : ""}
      </button>
      <img className="header__profile" src="/images/image-avatar.png" alt="" />
    </header>
  );
};

export default Header;
