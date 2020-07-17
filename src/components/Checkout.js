import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { db } from "../firebase/utils";

const Checkout = (props) => {
  const [state] = useStateValue();

  const removeItem = (key) => {
    db.doc(`/cart/${key}`)
      .delete()
      .then(() => {
        console.log("Removed successfully");
      });
  };
  const renderCartItems =
    state.basket.length === 0 ? (
      <h1 className="mb-3 font-weight-bold text-center">Your Cart is empty</h1>
    ) : (
      <>
        <h1 className="mb-3 font-weight-bold">Your shopping cart</h1>
        <div className="cart__items">
          {state.basket.map((item) => (
            <div
              key={item.key}
              className="cart__item d-flex justify-content-between"
            >
              <div className="col-sm-4">
                <img src={item.img} alt="" className="img-fluid cart__image" />
              </div>
              <div className="cart__details col-sm-8 py-3">
                <Link className=" cart__heading" to="/">
                  <h4 className="font-weight-bold">{item.name}</h4>
                </Link>
                <p className="price">
                  <span className="text-secondary">Price</span>: $ {item.price}
                </p>
                <div className="d-flex">
                  <select
                    id="inputGroupSelect04"
                    style={{ fontSize: "1.4rem", width: "8.2rem" }}
                    className="form-control"
                  >
                    {/* <option defaultValue>1</option> */}
                    {Array(item.stock)
                      .fill()
                      .map((_, index) => (
                        <option
                          key={index}
                          value={index}
                          style={{ fontSize: "1.5rem" }}
                        >
                          Qty: {index}
                        </option>
                      ))}
                  </select>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => removeItem(item.key)}
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  return (
    <div>
      <Header />
      <div className="row container mx-auto cart mt-5">
        <div className="col-md-12">{renderCartItems}</div>
      </div>
    </div>
  );
};

export default Checkout;
