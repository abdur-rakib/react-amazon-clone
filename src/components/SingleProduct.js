import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleProduct = ({ prod, cat }) => {
  return (
    <div className="col-md-4 card-group">
      <div className="product card">
        <img src={prod.img} alt="" className="product__image img-fluid" />
        <div className="product__box">
          <Link className="product__title" to={`/${cat}/${prod.key}`}>
            <p>{prod.name}</p>
          </Link>
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
