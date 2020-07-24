import React, { useState } from "react";
import Header from "./Header/Header";
import { useStateValue } from "../context/StateProvider";
import Spinner from "react-bootstrap/Spinner";
import { SET_LOADING, SET_PAYMENT } from "../context/types";

const Payment = (props) => {
  const [paymentmethod, setPaymentmethod] = useState("");

  const [state, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SET_LOADING });
    dispatch({ type: SET_PAYMENT, payload: paymentmethod });

    props.history.push("/placeorder");
  };
  return (
    <div>
      <Header />
      <div className="custom-form col-sm-6 mx-auto mt-4">
        <h1 className="mb-3 font-weight-bold mt-0">Payment option</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-check border-top pt-3">
            <input
              className="form-check-input"
              type="radio"
              name="paymentmethod"
              value="paypal"
              onChange={(e) => setPaymentmethod(e.target.value)}
              required
            ></input>
            <label
              className="form-check-label font-weight-bold ml-2"
              htmlFor="paymentmethod"
            >
              Paypal
            </label>
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

export default Payment;
