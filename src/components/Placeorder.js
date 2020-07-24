import React from "react";
import Header from "./Header/Header";
import { useStateValue } from "../context/StateProvider";
import CheckoutSummary from "./CheckoutSummary";
import { Link } from "react-router-dom";
import { db } from "../firebase/utils";
import { CLEAR_LOADING } from "../context/types";

const Placeorder = (props) => {
  const [state, dispatch] = useStateValue();

  if (Object.keys(state.shipping).length === 0) {
    props.history.push("/shipping");
  }
  const deleteCart = () => {
    db.collection("cart")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          doc.ref.delete();
        });
        dispatch({ type: CLEAR_LOADING });
      });
  };
  return (
    <div>
      <Header />
      <div className="custom-form col-sm-10 mx-auto mt-4">
        <div className="row">
          <div className="col-md-7">
            <div className="ml-4">
              <h4 className="font-weight-bold">Shipping</h4>
              <p>{state.shipping.address}</p>
              <h4 className="font-weight-bold">Payment</h4>
              <p>Payment method: {state.payment}</p>
            </div>

            <h4 className="font-weight-bold ml-4">Your cart</h4>
            {state.basket.map((item) => (
              <div key={item.key} className="d-flex justify-content-between">
                <div className="col-2 d-flex py-2">
                  <img
                    src={item.img}
                    alt=""
                    className="img-fluid cart__image"
                  />
                </div>
                <div className="cart__details col-sm-10 my-auto">
                  <h5 className="font-weight-bold">{item.name}</h5>
                  <p className=" mb-0">
                    <span className="text-secondary">Price</span>: ${" "}
                    {(item.price * item.count).toFixed(2)}
                    <span className="text-secondary ml-4">Quantity</span>:{" "}
                    {item.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-5">
            <CheckoutSummary basket={state.basket} />
            <div className="text-center">
              <Link to="/success" onClick={deleteCart}>
                <button
                  style={{ fontSize: "1.5rem" }}
                  className="cart__btn  px-5 py-3"
                >
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
