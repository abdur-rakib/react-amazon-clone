import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import CategorySection from "../components/CategorySection/CategorySection";

const home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Banner />
      </div>
      <CategorySection />
    </>
  );
};

export default home;
