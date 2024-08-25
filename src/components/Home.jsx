import React, { useState } from "react";
import NavbarPage from "../pages/NavbarPage";
import HeroSec from "./HeroSec";

const Home = () => {
  let [isChangeDetect, setIsChangeDetect] = useState();

  const chartDataChange = (chartData) => {
    setIsChangeDetect(chartData);
    // console.log(!isChangeDetect); // This will log the value that `isChangeDetect` will have after the update
  };

  return (
    <div style={{ backgroundColor: "#e4eff5" }}>
      <NavbarPage chartData={chartDataChange} />
      <br />
      <HeroSec dataChange={isChangeDetect} />
    </div>
  );
};

export default Home;
