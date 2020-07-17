import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { BsExclamation } from "react-icons/bs";
import { auth } from "../firebase/utils";
import { SET_AUTHENTICATED, CREATE_USER } from "../context/types";
import { useEffect } from "react";

const checkError = (text) => {
  if (text.trim() === "") {
    return true;
  }
  return false;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [dispatch] = useStateValue();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  useEffect(() => {}, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const myErrors = [];
    if (checkError(email)) {
      myErrors.email = "Enter your email";
    }
    if (checkError(password)) {
      myErrors.password = "Enter your password";
    }
    setErrors(myErrors);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
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
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          myErrors.password = err.message;
          setErrors(myErrors);
        }
      });
  };
  console.log(errors);
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
              name="password"
              onChange={handleChange}
            ></input>
            {errors.password && (
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
            )}
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

export default Login;