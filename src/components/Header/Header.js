import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useStateValue } from "../../context/StateProvider";

const Header = () => {
  const [state, dispatch] = useStateValue();

  return (
    <nav className=" header d-flex align-items-center">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        ></img>
      </Link>
      <div className="header__search">
        <input
          className="header__searchText"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <BsSearch size={40} className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            {state.user ? (
              <span className="header__optionLineTwo">{state.user.name}</span>
            ) : (
              <span className="header__optionLineTwo">Sign in</span>
            )}
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <AiOutlineShoppingCart size={32} />
            <span>{state.cartLength}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
