import React from "react";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";

const Success = () => {
  const [state] = useStateValue();
  return (
    <div className="mx-auto pt-5">
      <h1 className="text-center  mt-5 pt-5">
        You have successfully placed your order, {state.shipping.name}
      </h1>
      <Link to="/">
        {" "}
        <p className="lead text-center">Go back to home</p>
      </Link>
    </div>
  );
};

export default Success;
