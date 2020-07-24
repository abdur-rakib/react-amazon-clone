import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useStateValue } from "../../context/StateProvider";
import { SET_SEARCHTEXT } from "../../context/types";

import fakeData from "../../fakeData/index";

const Header = () => {
  const [state, dispatch] = useStateValue();
  const [search, setSearch] = useState("");
  const [filteredData, setFilterData] = useState([]);
  console.log(filteredData);
  const handleChange = (e) => {
    setSearch(e.target.value);
    // eslint-disable-next-line
    const fildData = fakeData.filter((data) => {
      if (data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        return data;
    });
    setFilterData(fildData);
  };

  const handleSubmit = (e) => {
    dispatch({ type: SET_SEARCHTEXT, payload: search });
    // eslint-disable-next-line
    const fildData = fakeData.filter((data) => {
      if (data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        return data;
    });
    setFilterData(fildData);
    e.preventDefault();
  };
  const renderSuggestion =
    search.length !== 0 ? (
      filteredData.length !== 0 ? (
        <ul className="list-group">
          {filteredData.map((data) => (
            <li className="list-group-item">
              <Link to={`/${data.category}/${data.key}`}>{data.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="list-group">
          <li className="list-group-item">No product found</li>
        </ul>
      )
    ) : null;
  return (
    <nav className=" header d-flex align-items-center">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        ></img>
      </Link>
      <form
        className="header__search d-flex align-items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="header__searchText"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="search"
          onChange={handleChange}
        ></input>
        <button className="btn search__btn">
          <BsSearch size={40} className="header__searchIcon" />
        </button>
        <div className="suggestion">{renderSuggestion}</div>
      </form>
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
