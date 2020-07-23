import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase/utils";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { SET_LOADING, CLEAR_LOADING } from "../context/types";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [state, dispatch] = useStateValue();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SET_LOADING });
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("E-mail sent");
        dispatch({ type: CLEAR_LOADING });
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
        <h1 className="mb-3 font-weight-bold">Reset Password</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="font-weight-bold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              required
            ></input>
          </div>

          <button className="submitBtn" disabled={state.loading}>
            {" "}
            <Spinner
              as="span"
              animation="border"
              size="md"
              role="status"
              aria-hidden="true"
              hidden={!state.loading}
            />{" "}
            Send password reset e-mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
