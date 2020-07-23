import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import CategorySection from "../components/CategorySection/CategorySection";
// import { useStateValue } from "../context/StateProvider";

const Home = () => {
  // const [state, dispatch] = useStateValue();
  // console.log(state.search);
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

export default Home;
