import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import fakeData from "../fakeData/index";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

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
      <p>Loading...</p>
    ) : (
      camera.map((prod) => <SingleProduct key={prod.key} prod={prod} />)
    );
  return (
    <>
      <Header />
      <div className="minCategory d-flex align-items-center">
        <p>
          Category <span className="text-primary"> "Camera"</span>
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
