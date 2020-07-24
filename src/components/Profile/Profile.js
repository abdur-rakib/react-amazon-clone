import React, { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import Header from "../Header/Header";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/core";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SET_LOGOUT } from "../../context/types";
import { auth } from "../../firebase/utils";

import Modal from "react-bootstrap/Modal";

const override = css`
  display: block;
  margin: 30px auto;
`;

const Profile = () => {
  const [state, dispatch] = useStateValue();
  const [show, setShow] = useState(false);

  const logout = () => {
    auth.signOut().then(() => {
      dispatch({ type: SET_LOGOUT });
    });
  };
  return (
    <>
      <Header />

      <Modal
        show={show}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setShow(false)}
      >
        <Modal.Body className="text-center myModal">
          <h4>Are you sure to logout?</h4>
          <div className="">
            <Link to="/" className="btn btn-success px-4 mr-2" onClick={logout}>
              Yes
            </Link>
            <button
              className="btn btn-danger px-4"
              onClick={() => setShow(false)}
            >
              No
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {state.user ? (
        <>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <h1 className="font-weight-bold text-uppercase pt-3">
              {state.user.name}{" "}
            </h1>
            <AiOutlineLogout
              className="ml-3"
              onClick={() => setShow(true)}
              size={32}
              color="#e67a00"
              style={{ cursor: "pointer" }}
            />
          </div>
          <h3 className="text-center mt-2">
            <Link to="/change">Change password</Link>
          </h3>
        </>
      ) : (
        <ClockLoader color="#e67a00" size={50} css={override} />
      )}
    </>
  );
};

export default Profile;
