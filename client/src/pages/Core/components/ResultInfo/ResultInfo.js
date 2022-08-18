import "./ResultInfo.css";
import { useNavigate, useParams } from "react-router-dom";

import { Button, useScrollTrigger } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import axios from "axios";

import urlPort from "./../../../../data/urlPort.json";

import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";

const ResultInfo = () => {
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
    "foodInfo",
    "imgFile",
  ]);

  useEffect(() => {
    getFoodInfo().then((res) => {
      console.log("getFoodInfo res:", res);
      setFoodInfo(res.data.food);
    });
  }, []);

  const getFoodInfo = async () => {
    return await axios.get(
      `${urlPort.cloudServer + urlPort.node}/foodInfo/${params.id}/find`
    );
  };

  // useEffect(() => {
  //   setCookie("foodInfo", foodInfo);
  //   console.log("cookie에 있는 foodInfo : ", foodInfo);
  // }, [foodInfo]);

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
    img: urlPort.cloudServer + cookies.imgFile.url,

    food: cookies.foodInfo,
    userId: cookies.userData.email,
    // recipie_url: cookies.foodInfo.recipie_url
  };

  return (
    <div className="resultInfo-container">
      <h1 className="title">Food Info</h1>
      {foodInfo === null ? (
        <></>
      ) : (
        <>
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
              <div className="result-item caution">
                caution: {foodInfo.caution}
              </div>
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
                />
              </div>

              <div className="result-item desc">
                <span className="desc-title">description</span>
                <div className="desc-content">{foodInfo.description}</div>
              </div>
            </div>
            <div className="history-inputs">
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
          </div>
        </>
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
