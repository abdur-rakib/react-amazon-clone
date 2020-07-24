import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { db } from "../firebase/utils";
import { FaPlus, FaMinus } from "react-icons/fa";
import { SET_LOADING, CLEAR_LOADING } from "../context/types";
import CheckoutSummary from "./CheckoutSummary";
const Checkout = (props) => {
  const [state, dispatch] = useStateValue();

  const removeItem = (key) => {
    db.doc(`/cart/${key}`)
      .delete()
      .then(() => {
        console.log("Removed successfully");
      });
  };
  const increasItem = (id) => {
    dispatch({ type: SET_LOADING });
    db.doc(`/cart/${id}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // console.log(doc.data());
          db.doc(`/cart/${id}`).update({
            count: doc.data().count + 1,
          });
          dispatch({ type: CLEAR_LOADING });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: CLEAR_LOADING });
      });
  };
  const decreaseItem = (id) => {
    dispatch({ type: SET_LOADING });
    db.doc(`/cart/${id}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // console.log(doc.data());
          if (doc.data().count === 1) {
            removeItem(id);
          }
          db.doc(`/cart/${id}`).update({
            count: doc.data().count - 1,
          });
          dispatch({ type: CLEAR_LOADING });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: CLEAR_LOADING });
      });
  };
  const renderCartItems =
    state.basket.length === 0 ? (
      <h1 className="mb-3 font-weight-bold text-center">Your Cart is empty</h1>
    ) : (
      <>
        <h1 className="mb-3 font-weight-bold">Your shopping cart</h1>
        <div className="row ">
          <div className="col-md-7">
            <div className="cart__items bg-white ">
              {state.basket.map((item) => (
                <div
                  key={item.key}
                  className="cart__item  d-flex justify-content-between py-3"
                >
                  <div className="col-2 d-flex py-5">
                    <img
                      src={item.img}
                      alt=""
                      className="img-fluid cart__image"
                    />
                  </div>
                  <div className="cart__details col-sm-10 my-auto">
                    <Link
                      className=" cart__heading"
                      to={`/${item.category}/${item.key}`}
                    >
                      <h5 className="font-weight-bold">{item.name}</h5>
                    </Link>
                    <p className="price mb-0">
                      <span className="text-secondary">Price</span>: ${" "}
                      {(item.price * item.count).toFixed(2)}
                    </p>
                    <div className="d-flex mt-0">
                      <div className="cart__product d-flex">
                        <button
                          disabled={state.loading}
                          className="btn btn-lg btn__minus"
                          onClick={() => decreaseItem(item.key)}
                        >
                          <FaMinus />
                        </button>
                        <h4 className="h4 pt-3">{item.count}</h4>
                        <button
                          disabled={state.loading}
                          className="btn btn-lg btn__plus"
                          onClick={() => increasItem(item.key)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <button
                        className="btn"
                        onClick={() => removeItem(item.key)}
                      >
                        {/* <AiOutlineDelete color="red" size={16} /> */}
                        <img
                          className="delete__image"
                          src="https://image.flaticon.com/icons/svg/3096/3096673.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4  ml-lg-4 ml-md-4 ml-sm-0">
            <div className="cart__items bg-white">
              <CheckoutSummary basket={state.basket} />
              <div className="mt-2 text-center">
                <Link to="/shipping">
                  <button
                    style={{ fontSize: "1.5rem" }}
                    className="cart__btn  px-5 py-3"
                  >
                    Go to shipping
                  </button>
                </Link>
              </div>
            </div>
          </div>
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
