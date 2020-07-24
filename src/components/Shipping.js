import React, { useState } from "react";
import Header from "./Header/Header";
import { useStateValue } from "../context/StateProvider";
import Spinner from "react-bootstrap/Spinner";
import { SET_SHIPPING, SET_LOADING, CLEAR_LOADING } from "../context/types";

const Shipping = (props) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [state, dispatch] = useStateValue();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SET_LOADING });
    dispatch({
      type: SET_SHIPPING,
      payload: {
        name: state.user ? state.user.name : "Mr. Unknown",
        address,
        city,
        country,
        postalcode,
      },
    });
    dispatch({ type: CLEAR_LOADING });
    props.history.push("/payment");
  };

  const name = state.user ? state.user.name : "Mr. Unknown";

  return (
    <div>
      <Header />
      <div className="custom-form col-sm-6 mx-auto mt-4">
        <h1 className="mb-3 font-weight-bold">Shipping Address</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="font-weight-bold">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              defaultValue={name}
              readOnly
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="address" className="font-weight-bold">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              required
              value={address}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="city" className="font-weight-bold">
              City
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="city" className="font-weight-bold">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="city" className="font-weight-bold">
              Postal code
            </label>
            <input
              type="text"
              className="form-control"
              name="postalcode"
              value={postalcode}
              onChange={(e) => setPostalcode(e.target.value)}
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
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
