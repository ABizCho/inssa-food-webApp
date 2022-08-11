import React from "react";
import "./Home.css";
import bibimbap from "./bibimbap.jpg";
import LearnFood from "./LearnFood.png";
import TakeAPhoto from "./TakeAPhoto.png";
import CollectFood from "./CollectFood.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onClickStart = () => {
    navigate("login");
  };

  return (
    <div className="home-container">
      <section className="Home_section1">
        <div className="leftSide" style={{ margin: "5.5rem" }}>
          <h1>
            Find out information <br />
            about the food <br />
            with a picture.
          </h1>
          <span>
            Learn about food info
            <br />
            And how to order.
          </span>
          <button
            onClick={onClickStart}
            className="start-btn css-1hw9j7s"
            tabIndex="0"
            type="button"
          >
            Get started<span className="MuiTouchRipple-root css-w0pj6f"></span>
          </button>
        </div>
        <div className="rightSide" style={{ margin: "5.5rem" }}>
          <img
            src={bibimbap}
            alt="비빔밥"
            style={{ height: "450px", width: "550px" }}
          />
        </div>
      </section>

      <section className="Home_section2">
        <h1>What is Learning Food?</h1>
        <p>
          Learning food is an artificial intelligence technology that tells you
          the name of Korean food <br />
          When take a photo Korean food on a mobile device. surpport how to
          order food easily at a restaurant <br />
          Even if you don't know Korean. You can also save your photos to a
          collection <br />
          and share your food history with your friends and family.
        </p>

        <div className="section2_ImageGroup">
          <div className="section2_eachItem">
            <img
              src={TakeAPhoto}
              alt="사진없음"
              style={{ height: "370px", width: "370px" }}
            />
            <span>01. Take a Photo</span>
          </div>
          <div className="section2_eachItem">
            <img
              src={LearnFood}
              alt="사진없음"
              style={{ height: "370px", width: "370px" }}
            />
            <span>02. Learn korean foods</span>
          </div>
          <div className="section2_eachItem">
            <img
              src={CollectFood}
              alt="사진없음"
              style={{ height: "370px", width: "370px" }}
            />
            <span>03. Fill up on food history</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
