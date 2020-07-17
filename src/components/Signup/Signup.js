import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { BsExclamation } from "react-icons/bs";
import { auth } from "../../firebase/utils";
import { useState } from "react";
import { CREATE_USER, SET_AUTHENTICATED } from "../../context/types";
import { useStateValue } from "../../context/StateProvider";

const checkError = (text) => {
  if (text.trim() === "") {
    return true;
  }
  return false;
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [dispatch] = useStateValue();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const errors = [];
    if (checkError(email)) {
      errors.email = "Enter your email";
    }
    if (checkError(name)) {
      errors.name = "Enter your name";
    }
    if (checkError(password)) {
      errors.password = "Enter your password";
    }
    if (password !== confirmPassword) {
      errors.match = "Password doesn't match";
    }
    setErrors(errors);

    // signup
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return res.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            console.log(res.user);
            dispatch({
              type: CREATE_USER,
              user: {
                email: res.user.email,
                name: res.user.displayName,
              },
            });
            dispatch({
              type: SET_AUTHENTICATED,
            });
          });
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          errors.email = err.message;
          setErrors(errors);
        }
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
        <h1 className="mb-3 font-weight-bold">Create new account</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="font-weight-bold">
              Your name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            ></input>
            {errors.name && (
              <small
                id="emailHelp"
                className="form-text font-weight-bold text-danger"
              >
                <BsExclamation
                  size={20}
                  color="red"
                  style={{ marginLeft: "-7px" }}
                />
                {errors.name}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="font-weight-bold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
            ></input>
            {errors.email && (
              <small
                id="emailHelp"
                className="form-text font-weight-bold text-danger"
              >
                <BsExclamation
                  size={20}
                  color="red"
                  style={{ marginLeft: "-7px" }}
                />
                {errors.email}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="font-weight-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="At least 6 characters"
              name="password"
              onChange={handleChange}
            ></input>
            {errors.password ? (
              <small
                id="emailHelp"
                className="form-text font-weight-bold text-danger"
              >
                <BsExclamation
                  size={20}
                  color="red"
                  style={{ marginLeft: "-7px" }}
                />
                {errors.password}
              </small>
            ) : (
              <small
                id="emailHelp"
                className="form-text text-muted font-weight-bold"
              >
                <BsExclamation
                  size={20}
                  color="blue"
                  style={{ marginLeft: "-7px" }}
                />
                Passwords must be at least 6 characters.
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="font-weight-bold">
              Re-enter password
            </label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              onChange={handleChange}
            ></input>
            {errors.match && (
              <small
                id="emailHelp"
                className="form-text font-weight-bold text-danger"
              >
                <BsExclamation
                  size={20}
                  color="red"
                  style={{ marginLeft: "-7px" }}
                />
                {errors.match}
              </small>
            )}
          </div>
          <button className="submitBtn">Create your Amazon account</button>
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
          Already have an account?{" "}
          <Link className="category__explore" to="/login">
            Sign-In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
