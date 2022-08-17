import React from "react";
import "./Home.css";
import bibimbap from "./bibimbap.jpg";
import LearnFood from "./LearnFood.png";
import TakeAPhoto from "./TakeAPhoto.png";
import CollectFood from "./CollectFood.png";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  const navigate = useNavigate();

  const onClickStart = () => {
    cookies.userData ? navigate("/core") : navigate("/login");
  };

  return (
    <div className="home-container">
      <section className="Home_section1">
        <div className="leftSide" style={{ margin: "1.5rem" }}>
          <h1 className="intro-text">
            Find out insights
            <br /> about the food
            <br /> with your picture.
          </h1>
          <span>
            Learn about food
            <br />
            and how to order
            <br />
            <br />
            keep your memory
            <br />
            in this safe archive.
          </span>
          <button
            onClick={onClickStart}
            className="css-1hw9j7s"
            tabIndex="0"
            type="button"
          >
            Get started<span className="MuiTouchRipple-root"></span>
          </button>
        </div>
        <div className="rightSide" style={{ margin: "4.5rem" }}>
          <img
            className="intro-img"
            src={bibimbap}
            alt="비빔밥"
            style={{ height: "200px", width: "330px" }}
          />
        </div>
      </section>

      <section className="Home_section2">
        <h1 className="what-text">
          What is <br />
          Inssa Food?
        </h1>
        <p>
          Inssa food is an AI technology that tells you the name of Korean food{" "}
          <br />
          <br />
          When take a photo Korean food on a mobile device. surpport how to
          order food easily at a restaurant <br />
          <br />
          Even if you don't know Korean. You can also save your photos to a
          collection <br />
          and share your food history with your friends and family.
        </p>

        <div className="section2_ImageGroup">
          <div className="section2_eachItem">
            <span>01. Take a Photo</span>
            <img
              src={TakeAPhoto}
              alt="사진없음"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="section2_eachItem">
            <span>02. Learn korean foods</span>
            <img
              src={LearnFood}
              alt="사진없음"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="section2_eachItem">
            <span>03. Fill up on food history</span>
            <img
              src={CollectFood}
              alt="사진없음"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
