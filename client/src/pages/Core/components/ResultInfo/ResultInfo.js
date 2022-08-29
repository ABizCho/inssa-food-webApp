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
import "./ResultInfo.css";

import OutdoorGrillRoundedIcon from "@mui/icons-material/OutdoorGrillRounded";
import LyricsRoundedIcon from "@mui/icons-material/LyricsRounded";
import AudiotrackRoundedIcon from "@mui/icons-material/AudiotrackRounded";

const ShowDetail = () => {
  const [isflip, setIsFlip] = useState(false);
  const onClickScreen = () => {
    setIsFlip(!isflip);
  };
};

const ResultInfo = () => {
  const [audio, setAudio] = useState("");
  const [mediaMode, setMediaMode] = useState(true);

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
      setAudio(new Audio(`http://115.85.182.215:8000/${res.data.sound_url}`));
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
    <div>
      {foodInfo ? (
        <div>
          <div className="container1">
            <div className="mainImage">
              <img
                className="item-img"
                src={cookies.imgFile}
                alt="react"
                style={{ width: "100%", height: "325px" }}
              />
            </div>
          </div>

          <div className="container-contents">
            <div className="item-name">{foodInfo.name}</div>
            <h1 className="item-nameEng">{foodInfo.name_Eng}</h1>
            <div className="description_container">
              <div className="desc-content">{foodInfo.description}</div>
            </div>

            <div className="shape-square" />

            <div className="caution_container">
              <div className="caution_title">caution</div>
              <div className="result-item spicy">
                {"🌶️".repeat(foodInfo.spicy)}
              </div>
              <div className="foodinfo_caution"> {foodInfo.caution}</div>
            </div>

            <div className="shape-square" />
            <div className="mediaInfo-container">
              <div className="media-btn-box">
                <Button
                className="media-btn"
                  onClick={() => {
                    setMediaMode(true);
                  }}
                  variant="contained"
                >
                  <LyricsRoundedIcon />
                  order
                </Button>

                <Button
                className="media-btn"
                  color="secondary"
                  onClick={() => {
                    setMediaMode(false);
                  }}
                  variant="contained"
                >
                  <OutdoorGrillRoundedIcon />
                  cook
                </Button>
              </div>

              {mediaMode ? (
                <div className="result-item order_learn_audio">
                  <Button
                    className="sound-btn"
                    onClick={() => {
                      audio.play();
                    }}
                  >
                    <AudiotrackRoundedIcon color="white" />
                  </Button>

                  <div className="sound-text">{foodInfo.order_learn_text}</div>
                </div>
              ) : (
                <div>
                  <ReactPlayer
                    className="video-player"
                    url={foodInfo.recipe_url}
                    controls
                    width={340}
                    height={340}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="userInput-container">
            <div className="userInput-title">
              <h1>Leave a comment</h1>
            </div>
            <div className="history-inputs">
              <label className="labels" htmlFor="history-title">
                Title
              </label>
              <TextField
                variant="filled"
                multiline
                color="warning"
                className="textField-title"
                name="title"
                onChange={(e) => {
                  setHistoryInput({ ...historyInput, title: e.target.value });
                }}
              />
              <br />
              <label className="labels" htmlFor="history-comment">
                Comment
              </label>
              <TextField
                variant="filled"
                multiline
                color="warning"
                rows={4}
                className="textField-comment"
                name="comment"
                onChange={(e) => {
                  setHistoryInput({ ...historyInput, comment: e.target.value });
                }}
              />

              <div className="btn-container">
                <Button
                  className="btn-item update-btn"
                  variant="contained"
                  onClick={onClickSaveHistory}
                >
                  Save History
                </Button>

                <Button
                  onClick={() => {
                    window.history.back();
                  }}
                  className="btn-item delete-btn"
                  variant="contained"
                >
                  Retry
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ResultInfo;
