import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import fakeData from "../fakeData/index";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 50px auto;
  border-color: red;
`;
const Laptop = () => {
  const [laptop, setLaptop] = useState([]);
  useEffect(() => {
    const laptopProducts = fakeData.filter(
      (product) => product.category === "laptop"
    );
    setLaptop(laptopProducts);
  }, []);
  const renderProducts =
    laptop.length === 0 ? (
      <HashLoader color="#e67a00" size={150} css={override} />
    ) : (
      laptop.map((prod) => (
        <SingleProduct cat="laptop" key={prod.key} prod={prod} />
      ))
    );
  return (
    <>
      <Header />
      <div className="minCategory d-flex align-items-center">
        <p>
          Category <span className="text-warning"> "Laptop"</span>
        </p>
        <p>
          <Link to="/" className="text-secondary">
            Back to home
          </Link>
        </p>
      </div>
      <div className="row container mx-auto mt-5">{renderProducts}</div>
    </>
  );
};

export default Laptop;
