import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";

const home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Banner />
      </div>
    </>
  );
};

export default home;
