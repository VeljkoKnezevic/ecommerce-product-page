import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img src="/images/logo.svg" alt="Sneakers logo" />
      </h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Collections</li>
          <li className="nav__item">Men</li>
          <li className="nav__item">Women</li>
          <li className="nav__item">About</li>
          <li className="nav__item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
