import { useState, useEffect } from "react";
import FoodInfo from "./components/FoodInfo/FoodInfo";
import GetImg from "./components/GetImg/GetImg";
import ServiceInfo from "./components/ServiceInfo/ServiceInfo";

const Intro = () => {
  return (
    <div className="intro-container">
      {/* <div className="temp-head">
        <h1>Intro Page입니다.</h1>
        <p>해당 페이지는 root로 접속 시 가장 먼저 노출됩니다.</p>
        <p>
          사진 입력, 음식 상세정보 출력, 페이지 기능 소개 등의 컴포넌트가 담기게
          될 예정입니다.
        </p>
      </div> */}
      <GetImg />
      <ServiceInfo />
    </div>
  );
};
export default Intro;
