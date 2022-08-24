import { useState, useEffect, useRef } from "react";

import "./Core.css";

import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import urlPort from "../../data/urlPort.json";

const Core = () => {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null);
  const [sampleImg, setSampleImg] = useState(null);

  const [formChange, setFormChange] = useState("");
  let urlLet = "";

  //쿠키 사용 준비
  const [cookies, setCookie, removeCookie] = useCookies([
    "inputImage",
    "imgFile",
  ]);

  const onChangeImg = async (e) => {
    let formData = new FormData();
    // 파일 저장
    setSampleImg(URL.createObjectURL(e.target.files[0]));
    console.log("onChange e.target.files:", e.target.files[0]);
    // setImageUrl(imgURL);
    formData.append("file", e.target.files[0]);
    setFormChange(formData);
    urlLet = formData;
    console.log("onChange FormDATA 구성");

    await axios
      .post(urlPort.cloudServer + urlPort.node + "/api/upload", urlLet)
      .then((res) => {
        console.log("axios1-modelExp 이후 res : ", res.data);
        setCookie("imgFile", "http://115.85.182.215:8000" + res.data.url);
        setImageUrl(res.data.url);
        console.log("axios1-onChange Axios imageUrl state:", imageUrl);
      });

    // await axios
    //   .post(urlPort.cloudServer + urlPort.node + "/api/upload", formChange)
    //   .then((res) => {
    //     console.log("modelExp 이후 res : ", res.data);
    //     setCookie("imgFile", res.data.url);
    //     setImageUrl(res.data.url);
    //     console.log("onChange Axios imageUrl state:", imageUrl);
    //   });
  };


  useEffect(() => {
    console.log("setFormChange 변경 on onchange:", formChange);
  }, [formChange]);

  const onClickToResult = async () => {
    console.log(imageUrl);
    await axios
      .get(urlPort.cloudServer + `8000/modelExp${imageUrl}`)
      .then((res) => {
        console.log("res.data.resIndex : ", res.data.resIndex);
        let foodRes = res.data.resIndex;
        // navigate(`/resultinfo/${foodResult}`);
        navigate(`/resultinfo/${foodRes}`);
      });
  };

  // ---------------------

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
            {sampleImg && (
              <img
                className="selected-img"
                alt="sample"
                id="imgPreview"
                // ref={imgRef}
                src={sampleImg}
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
              onClick={onClickToResult}
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
