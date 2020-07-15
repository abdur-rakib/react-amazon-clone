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

const Camera = () => {
  const [camera, setCamera] = useState([]);
  useEffect(() => {
    const cameraProducts = fakeData.filter(
      (product) => product.category === "camera"
    );
    setCamera(cameraProducts);
  }, []);
  const renderProducts =
    camera.length === 0 ? (
      <HashLoader color="#e67a00" size={150} css={override} />
    ) : (
      camera.map((prod) => (
        <SingleProduct cat="camera" key={prod.key} prod={prod} />
      ))
    );
  return (
    <>
      <Header />
      <div className="minCategory d-flex align-items-center">
        <p>
          Category <span className="text-warning"> "Camera"</span>
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

export default Camera;
