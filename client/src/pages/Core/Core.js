import { useState, useEffect, useRef } from "react";

import "./Core.css";

import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import urlPort from "../../data/urlPort.json";

const Core = () => {
  const navigate = useNavigate();

  const [imageURL, setImageURL] = useState(null);
  const imgRef = useRef();

  //쿠키 사용 준비
  const [cookies, setCookie, removeCookie] = useCookies([
    "inputImage",
    "imgFile",
  ]);

  // 파일 저장
  const onChangeImg = async (e) => {
    setImgFile(e.target.files[0]);

    const imgURL = URL.createObjectURL(e.target.files[0]);
    setImageURL(imgURL);
  };

  const onClickToResult = async (id) => {

    await axios.get(urlPort.server + "/yeah").then((res) => {
      console.log(res.data);
    });

    const formData = new FormData();
    formData.append("file", imgFile);
    await axios.post(urlPort.cloudServer + "/api/upload", formData).then((res) => {

      console.log(res.data);
      setCookie("imgFile", res.data);
    });

    navigate(`/resultinfo/${id}`);
  };

  // ---------------------

  const [imgFile, setImgFile] = useState("");

  return (
    // <div className="full-container">
    <div className="content-container-row">
      <div className="core-notice">
        <h2 className="title">Find your food</h2>
        <span className="title-sub-txt">Put your food image in this box</span>
      </div>

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

            <p className="text-notice" align="center"></p>
            {imageURL && (
              <img
                className="selected-img"
                alt="sample"
                id="imgPreview"
                // ref={imgRef}
                src={imageURL}
                style={{ margin: "auto", width: "224px", height: "224px" }}
              />
            )}
            <button type="button" className="upload-btn">
              Upload
              <input
                className="fileSelect-btn"
                type="file"
                onChange={onChangeImg}
                accept="image/*"
              />
            </button>
            <button
              onClick={() => {
                onClickToResult(1);
              }}
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
    </div>
    // </div>
  );
};
export default Core;
