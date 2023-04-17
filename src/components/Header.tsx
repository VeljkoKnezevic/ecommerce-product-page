import React from "react";

const Header = () => {
  return (
    <header className="header">
      <button
        type="button"
        className="header__hamburger"
        aria-label="Open menu"
      ></button>
      <h1>
        <img
          className="header__logo"
          src="/images/logo.svg"
          alt="Sneakers logo"
        />
      </h1>
      <nav className="header__nav nav">
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
      ></button>
      <img className="header__profile" src="/images/image-avatar.png" alt="" />
    </header>
  );
};

export default Header;
