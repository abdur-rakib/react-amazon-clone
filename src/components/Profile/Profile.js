import React from "react";
import { useStateValue } from "../../context/StateProvider";
import Header from "../Header/Header";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/core";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SET_LOGOUT } from "../../context/types";
import { auth } from "../../firebase/utils";

const override = css`
  display: block;
  margin: 30px auto;
`;

const Profile = () => {
  const [state, dispatch] = useStateValue();

  const logout = () => {
    auth.signOut().then(() => {
      dispatch({ type: SET_LOGOUT });
    });
  };
  return (
    <>
      <Header />

      {state.user ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <h1 className="font-weight-bold text-uppercase pt-3">
            {state.user.name}{" "}
          </h1>
          <Link to="/" className="ml-3" onClick={logout}>
            <AiOutlineLogout size={32} />
          </Link>
        </div>
      ) : (
        <HashLoader color="#e67a00" size={50} css={override} />
      )}
    </>
  );
};

export default Profile;
