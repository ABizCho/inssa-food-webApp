import { useState, useEffect } from "react";
import FoodInfo from "./components/ResultInfo/ResultInfo";
import GetImg from "./components/GetImg/GetImg";
import ServiceInfo from "./components/ServiceInfo/ServiceInfo";
import "./Core.css";

import $ from "jquery";
import { useNavigate } from "react-router-dom";

const Core = () => {
  const navigate = useNavigate();

  //   테스트용 임시 네비게이팅입니다.
  const onClickToResultTemp = () => {
    navigate("/ResultInfo");
  };
  return (
    // <div className="full-container">
    <div className="content-container-row">
      <div className="top-container">
        <div style={{ width: "100%", border: "0", padding: "0" }}>
          <div className="form-container">
            <input type="hidden" name="menu" value="upload" />
            <input type="hidden" name="gofile" value="nion" />
            <input type="hidden" name="service" value="on" />
            <input
              type="hidden"
              name="session_id"
              value="clicm02ddg1or9rjelucajj4p6"
            />

            <p align="left">
              <span>
                <i className="fas fa-camera-alt" aria-hidden="true"></i>
                &nbsp;&nbsp; <b>얼굴 사진과 닮은꼴 연예인을 찾아드려요</b>
              </span>
            </p>
            <p align="left">
              <span>
                <i
                  className="fas fa-exclamation-triangle"
                  aria-hidden="true"
                ></i>{" "}
                용량이 큰 고화질 사진은 오류가 발생해요 (2mb 이하 권장)
              </span>
            </p>
            <p align="left">
              <span>
                If you upload a picture of your face here, you'll find a
                look-alike celebrity. You can also see the age of your face.
              </span>
            </p>
            <input type="file" name="uploadfile" accept="image/*" />
            <button
              onClick={onClickToResultTemp}
              // type="submit"
              className="btn btn-danger btn-block"
              id="formsend"
            >
              <i className="func-btn fas fa-webcam" aria-hidden="true"></i>
              &nbsp;&nbsp; 얼굴인식 시작하기
              <br />
              <span>Getting started with face recognition</span>
            </button>
          </div>

          <div className="demo-container">
            <h1>Demo</h1>
            <div className="demo-box">
              <div>
                <img
                  className="demo-img"
                  src={`${process.env.PUBLIC_URL}/demo_assets/img/TakeAPhoto.png`}
                  alt="react"
                />
              </div>
              <div>
                <img
                  className="demo-img"
                  src={`${process.env.PUBLIC_URL}/demo_assets/img/CollectFood.png`}
                  alt="react"
                />
              </div>
              <div>
                <img
                  className="demo-img"
                  src={`${process.env.PUBLIC_URL}/demo_assets/img/LearnFood.png`}
                  alt="react"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
      <div>
        <a id="kakao-link-btn" href="javascript:kt2('9');"></a>
      </div>
    </div>
    // </div>
  );
};
export default Core;
