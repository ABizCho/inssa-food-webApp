// import "./ResultInfo.css";
import { useNavigate, useParams } from "react-router-dom";

import { Button, TextField, useScrollTrigger } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import axios from "axios";

import urlPort from "./../../../../data/urlPort.json";

import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
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
<<<<<<< HEAD
      <h1 className="title">Food Info</h1>
      <div className="result-container">
        <div className="item-container">
          <div className="result-item img-box">
            <img
              className="result-item img"
              src={urlPort.cloudServer + cookies.imgFile.url}

              alt="react"
            />
          </div>
          <div className="result-item name">
            <h1>{"name"}</h1>
          </div>
          <div className="result-item spicy">spicy: {foodInfo.spicy}</div>
          <div className="result-item caution">caution: {foodInfo.caution}</div>
          <div className="result-item name_Eng">
            English Name: {foodInfo.name_Eng}
          </div>
          <div className="result-item order_learn_audio">
            <ReactAudioPlayer src={foodInfo.sound_url} autoPlay controls />
          </div>
          <div className="result-item order_learn_text">
            🗣️: {foodInfo.order_learn_text}
          </div>
          <div>
            RECIPE
            <ReactPlayer
              className="video-player"
              url={foodInfo.recipie_url}
              controls
              width={300}
              height={300}
=======
      <h1 className="title">We will tell you What you ate</h1>
      {foodInfo === null ? (
        <></>
      ) : (
        <div className="result">
          <div className="result-container">
            <img
              className="main_food_image_resultinfo"
              src={cookies.imgFile}
              alt="react"
              crossOrigin="anonymous"
              referrerPolicy="unsafe-url"
              style={{ margin: "auto", width: "100%", height: "100%" }}
>>>>>>> 37eab0ef3a1837b8a8c759d3109f5297153a6141
            />
          </div>
          <div className="container-contents">
          <div className="item-name">{foodInfo.name}</div>
            <div className="text-part1">
                <h1 className="item-nameEng">{foodInfo.name_Eng}</h1>
                {/* <h1 className="food_Number">No. 3</h1> */}
              <div className="result-item spicy">
                Spicy: 🌶️ ✖️ {foodInfo.spicy}
              </div>
            </div>
            </div>

          <div className="food_detail_back">
            <div className="simple_list">
              <div className="result-item caution">
                caution <br />
                <div className="foodinfo_caution"> {foodInfo.caution}</div>
              </div>
            <div className="shape-square" />
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
      <div className="userInput-container">
        <div className="userInput-title">
         <h1>What did you think?</h1>
          </div>
          <div className="history-inputs">
        <h1>
          <label htmlFor="history-title">Title</label>
          </h1>
          <TextField
            variant="filled"
            multiline
            color="warning"
            className="textField-title"
            name="history-title"
            placeholder="Title"
            autoFocus
            onChange={(e) => {
              setHistoryInput({ ...historyInput, title: e.target.value });
            }}
          />
            </div>
            <div className="history-inputs">
            <label htmlFor="history-comment">Comment</label>
            <TextField
            variant="filled"
            multiline
            color="warning"
            className="textField-title"
            name="history-comment"
            placeholder="Title"
            autoFocus
            onChange={(e) => {
              setHistoryInput({ ...historyInput, comment: e.target.value });
            }}
          />
          </div>
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
        <br />
          </div>
    </div>
  );
};

export default ResultInfo;
