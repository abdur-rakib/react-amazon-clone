import React from "react";
import { Link } from "react-router-dom";

const SingleCategory = (props) => {
  const { to, imageSrc, title } = props;
  return (
    <div className="col-sm-4 col-xs-12 card-group">
      <div className="single__category card">
        <div className="category__box">
          <p className="category__title">{title}</p>
          <img src={imageSrc} alt="" className="category__image img-fluid" />
          <Link to={`/${to}`} className="category__explore">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
