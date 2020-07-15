import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="col-10 col-md-5 mx-auto signup text-center">
      <Link to="/" className="">
        <img
          src="https://i.ibb.co/R2ydWTy/amazon-logo.png"
          alt=""
          className="signup__image img-fluid"
        />
      </Link>
      <div className="custom-form text-left">
        <h1 className="mb-3 font-weight-bold">Sign-in</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="email" className="font-weight-bold">
              Email
            </label>
            <input type="email" className="form-control"></input>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="font-weight-bold">
              Password
            </label>
            <input type="password" className="form-control"></input>
          </div>

          <button className="submitBtn">Sign-in</button>
        </form>
        <small>
          By creating an account, you agree to Amazon's{" "}
          <span className="text-primary">Conditions of Use</span> and
          <span className="text-primary"> Privacy Notice</span>.
        </small>
        <p
          className="border-top mt-4 pt-3"
          style={{ fontSize: "1.3rem", marginBottom: "-15px" }}
        >
          New to Amazon?{" "}
          <Link className="category__explore" to="/signup">
            Sign-up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default login;
