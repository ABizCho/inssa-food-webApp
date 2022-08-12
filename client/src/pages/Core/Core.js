import { useState, useEffect, useRef } from "react";
import FoodInfo from "./components/ResultInfo/ResultInfo";
import GetImg from "./components/GetImg/GetImg";
import ServiceInfo from "./components/ServiceInfo/ServiceInfo";
import "./Core.css";

import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Core = () => {
  const navigate = useNavigate();

  const [ imageURL, setImageURL ] = useState("");
  const imgRef= useRef();

  //쿠키 사용 준비
  const [cookies, setCookie, removeCookie] = useCookies(["inputImage"]);

  // 파일 저장
  const saveImageURL = async (e) => {
    const imgURL = URL.createObjectURL(e.target.files[0])
    await setImageURL(imgURL);
    setCookie("inputImage", imgURL, { path: "/" });
  const inputImg = document.getElementById('imgPreview');
      //쿠키에 이미지 넣음
      console.log('이미지 파일 : ', inputImg);
      console.log('이미지 URL : ', imgURL);

  };


  //   테스트용 임시 네비게이팅입니다.
  const onClickToResultTemp = () => {
    navigate("/ResultInfo");
  };
  return (
    // <div className="full-container">
    <div className="content-container-row">
      <h2 className="title">Find your food</h2>
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

            <p className="text-notice" align="center">
              <span className="">Put your food image in this box</span>
            </p>
            {imageURL &&
            <img
                  alt="sample"
                  id="imgPreview"
                  ref={imgRef}
                  src={imageURL}
                  style={{ margin: "auto", width:"224px", height:"224px" }}
                />}
            <input type="file" onChange={saveImageURL} name="uploadfile" accept="image/*" />
            <button
              onClick={onClickToResultTemp}
              className="btn btn-danger btn-block"
              id="formsend"
            >
              <i className="func-btn fas fa-webcam" aria-hidden="true"></i>
              Discover
            </button>
          </div>

          <div className="demo-container">
            <h2 className="title">Demo</h2>
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
