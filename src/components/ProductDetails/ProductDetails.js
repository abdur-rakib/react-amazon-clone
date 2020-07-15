import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import fakeData from "../../fakeData/index";
import "./ProductDetails.css";
import { AiTwotoneStar } from "react-icons/ai";
import { useStateValue } from "../../context/StateProvider";
import { ADD_TO_BASKET } from "../../context/types";

const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  const category = props.location.pathname.split("/")[1];
  const productId = props.location.pathname.split("/")[2];

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log("Added");
    dispatch({
      type: ADD_TO_BASKET,
      item: product,
    });
  };

  useEffect(() => {
    const prod = fakeData.filter((product) => product.key === productId)[0];
    setProduct(prod);
    // eslint-disable-next-line
  }, []);
  // console.log(product);
  const renderProductDetails =
    product === null ? (
      <p>Loading...</p>
    ) : (
      <div className="row d-flex justify-content-center mt-5 productDetails pb-5">
        <div className="col-md-4 col-sm-10 ">
          <div className="text-center productDetails__left">
            <img
              src={product.img}
              alt=""
              className="productDetails__image img-fluid"
            />
            <div className="cart text-left ml-5 mt-4">
              <h4 className="text-success font-weight-bold">In Stock.</h4>
              <select id="inputGroupSelect04">
                <option defaultValue>1</option>
                {Array(product.stock)
                  .fill()
                  .map((_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
              </select>
              {/* <br /> */}
              <button className="cart__btn" onClick={addToBasket}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-10">
          <div className="productDetails__right mt-sm-4 mt-md-0">
            <h2 className="font-weight-bold">{product.name}</h2>
            <p>
              by <span className="text-primary">{product.seller}</span>
            </p>
            <p className="product__rating">
              {Array(product.star)
                .fill()
                .map((_, index) => (
                  <AiTwotoneStar key={index} className="product__rating" />
                ))}
              <span className="product__startCount">{product.starCount}</span>
            </p>
            <hr />
            <p className="price">
              <span className="text-secondary">Price</span>: ${product.price}
            </p>
            {product.features.length > 0 ? (
              <>
                <h2 className="features font-weight-bold mb-3">Features:</h2>
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Description</th>
                      <th scope="col">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.features.map((feature, index) => (
                      <tr key={index}>
                        <td>{feature.description}</td>
                        <td>{feature.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <h2 className="features font-weight-bold mb-3">
                Product features are coming...
              </h2>
            )}
          </div>
        </div>
      </div>
    );
  return (
    <>
      <Header />
      <div className="minCategory d-flex align-items-center">
        <p>
          <Link to={`/${category}`} className="text-secondary">
            Back to {category}
          </Link>
        </p>
      </div>
      {renderProductDetails}
    </>
  );
};

export default ProductDetails;
