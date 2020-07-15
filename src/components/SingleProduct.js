import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const SingleProduct = ({ prod }) => {
  return (
    <div className="col-lg-4 card-group">
      <div className="product card">
        <img src={prod.img} alt="" className="product__image img-fluid" />
        <div className="product__box">
          <p className="product__title">{prod.name}</p>
          <p className="product__rating">
            {Array(prod.star)
              .fill()
              .map((_, index) => (
                <AiTwotoneStar key={index} className="product__rating" />
              ))}
            <span className="product__startCount">{prod.starCount}</span>
          </p>
          <div className="product__price">
            <span>$</span>
            <span>{prod.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
