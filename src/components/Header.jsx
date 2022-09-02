import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div className="container-fluid">
        <div className="header__menu">
          <div className="header__menu-logo">
            <a>What happened</a>
          </div>

          <nav className="header__menu-bar">
            <ul className="header__menu-list">
              <li className="list__item">
                <a href="/" className="list__item-link">
                  Introduction
                </a>
              </li>
              <li className="list__item">
                <a href="/" className="list__item-link">
                  Solution
                </a>
              </li>
              <li className="list__item">
                <a href="/" className="list__item-link">
                  Rate Plan
                </a>
              </li>

              <li className="list__item">
                <a href="">|</a>
              </li>

              <li className="list__item">
                <a href="/" className="list__item-link">
                  Login
                </a>
              </li>
              <li className="list__item">
                <a href="/" className="list__item-link">
                  Apply for free use
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
