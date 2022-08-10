import { useState, useEffect } from "react";
import FoodInfo from "./components/FoodInfo/FoodInfo";
import GetImg from "./components/GetImg/GetImg";
import ServiceInfo from "./components/ServiceInfo/ServiceInfo";

const Core = () => {
  return (
    <div className="core-container">
      <GetImg />
      <ServiceInfo />
    </div>
  );
};
export default Core;
