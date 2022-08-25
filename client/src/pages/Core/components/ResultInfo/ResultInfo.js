// import "./ResultInfo.css";
import { useNavigate, useParams } from "react-router-dom";

import { Button, useScrollTrigger } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import axios from "axios";

import urlPort from "./../../../../data/urlPort.json";

import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import mainfoodImage from "./떡볶이.jpg";
import { style } from "@mui/system";

const ShowDetail = () => {
  const [isflip, setIsFlip] = useState(false);
  const onClickScreen = () => {
    setIsFlip(!isflip);
  };
};

const ResultInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickRecipe = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  //params
  const params = useParams();

  const [foodInfo, setFoodInfo] = useState(null);
  const [historyInput, setHistoryInput] = useState({
    title: "",
    comment: "",
  });

  const [cookies, setCookie, removeCookie] = useCookies([
    "inputImage",
    "imgFile",
    "foodInfo",
  ]);

  // let foodInfo = null;
  useEffect(() => {
    console.log("resultInfo 첫렌더링");
    getFoodInfo().then((res) => {
      console.log("getFoodInfo res:", res);
      console.log("cookies url:", cookies.imgFile);

      // foodInfo = res.data
      setFoodInfo(res.data);
    });
  }, []);

  const getFoodInfo = async () => {
    return await axios.get(
      `${urlPort.cloudServer + urlPort.node}/foodInfo/${params.id}/find`
    );
  };

  useEffect(() => {
    setCookie("foodInfo", foodInfo);
    console.log("cookie에 있는 foodInfo : ", foodInfo);
  }, [foodInfo]);

  //HistoryInput 변하면 console 찍기
  useEffect(() => {
    console.log("HistoryINPUT : ", historyInput);
  }, [historyInput]);

  const onClickSaveHistory = async () => {
    const historyInfo = {
      ...historyInfoOne,
      title: historyInput.title,
      comment: historyInput.comment,
      // email:
    };

    await postHistoryData(historyInfo);
    await navigate("/history/list");
  };

  const postHistoryData = async (historyInfo) => {
    return await axios.post(
      urlPort.cloudServer + urlPort.node + "/histories",
      historyInfo
    );
  };

  //유저 인풋(Title, Comment) 제외한 히스토리 정보 => onClickSaveHistory 실행시 인풋정보랑 합침!!!
  const historyInfoOne = {
    img: cookies.imgFile,

    food: cookies.foodInfo,
    userId: cookies.userData.email,
  };

  return (
    <div className="resultInfo-container">
      <h1 className="title">We will tell you What you ate</h1>
      {foodInfo === null ? (
        <></>
      ) : (
        <div className="result">
          <div className="result-container">
            <div className="black-box"></div>
            <img
              className="main_food_image"
              src={cookies.imgFile}
              alt="react"
              crossOrigin="anonymous"
              referrerpolicy="unsafe-url"
            />

            <label htmlFor="history-title">Title</label>
            <input
              name="history-title"
              onChange={(e) => {
                setHistoryInput({ ...historyInput, title: e.target.value });
              }}
              type="text"
            />
            <label htmlFor="history-comment">Comment</label>
            <textarea
              name="history-comment"
              onChange={(e) => {
                setHistoryInput({ ...historyInput, comment: e.target.value });
              }}
              type="text"
            />
          </div>

          <div className="black-shadow">
            <div className="text-part1">
              <div className="result-item name">
                <h1 className="korean_food_name">{foodInfo.name_Eng}</h1>
                {/* <h1 className="food_Number">No. 3</h1> */}
              </div>
              <div className="result-item spicy">
                {" "}
                Spicy: 🌶️ ✖️ {foodInfo.spicy}
              </div>
            </div>
          </div>

          <div className="food_detail_back">
            <div className="simple_list">
              <div className="result-item caution">
                caution <br />{" "}
                <div className="foodinfo_caution"> {foodInfo.caution}</div>
              </div>
            </div>
            <div className="result-item order_learn_audio">
              <ReactAudioPlayer
                className="audio_player"
                src={"http://115.85.182.215:8000/" + foodInfo.sound_url}
                autoPlay
                controls
              />
            </div>
            <div className="result-item order_learn_text">
              🗣️: {foodInfo.order_learn_text}
            </div>
            <div className="result-item desc">
              <span className="desc-title">Description</span>
              <div className="desc-content">{foodInfo.description}</div>
            </div>
          </div>
          <div className="recipe_video" style={{ alignItems: "center" }}>
            <br />
            <div>
              RECIPE
              <button onClick={onClickRecipe} className="recipe_button">
                Click
              </button>
            </div>
            {isOpen ? (
              <>
                <ReactPlayer
                  className="video-player"
                  url={foodInfo.recipe_url}
                  controls
                  width={340}
                  height={340}
                />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}

      <div className="btn-container">
        <Button
          className="btn-item"
          variant="contained"
          endIcon={<SendIcon />}
          onClick={onClickSaveHistory}
        >
          Save History
        </Button>

        <Button className="btn-item retry" variant="contained" color="grey">
          Retry
        </Button>
      </div>
    </div>
  );
};

export default ResultInfo;
