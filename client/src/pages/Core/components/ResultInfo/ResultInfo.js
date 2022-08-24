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

  const [cookies, setCookie, removeCookie] = useCookies(["inputImage", "foodInfo", "imgFile"]);

  useEffect(() => {
    getFoodInfo().then((res) => {
      console.log("getFoodInfo res:", res);
      setFoodInfo(res.data);
    });
  }, []);

  const getFoodInfo = async () => {
    return await axios.get(`${urlPort.localClient + urlPort.node}/foodInfo/${params.id}/find`);
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
    return await axios.post(urlPort.localClient + urlPort.node + "/histories", historyInfo);
  };

  //유저 인풋(Title, Comment) 제외한 히스토리 정보 => onClickSaveHistory 실행시 인풋정보랑 합침!!!
  const historyInfoOne = {
    img: urlPort.localClient + cookies.imgFile.url,

    food: cookies.foodInfo,
    userId: cookies.userData.email,
    // recipie_url: cookies.foodInfo.recipie_url
  };

  return (
    <div className="container1">
      <div className="mainImage">
        <img src={mainfoodImage} style={{ width: 413, height: 340 }} />
      </div>

      <div className="container2">
        <h1>Tteokbboki</h1>
      </div>

      <div className="description_container">
        <div className="desc-content">{foodInfo.description}</div>
      </div>

      <div className="caution_container">
        <div className="cautiona_title">caution</div>
        <div className="foodinfo_caution"> {foodInfo.caution}</div>
      </div>

      <div className="order_learn_audio">
        <ReactAudioPlayer className="audio_player" src={foodInfo.sound_url} autoPlay controls />
      </div>
      <div className="order_learn_text">🗣️: {foodInfo.order_learn_text}</div>

      <div className="recipe_video" style={{ alignItems: "center" }}>
        <div>
          RECIPE
          <button onClick={onClickRecipe} className="recipe_button">
            Click
          </button>
        </div>
        {isOpen ? (
          <>
            <ReactPlayer className="video-player" url={foodInfo.recipie_url} controls width={413} height={340} />
          </>
        ) : (
          <></>
        )}
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
        <br />
        <label htmlFor="history-comment">Comment</label>
        <textarea
          name="history-comment"
          onChange={(e) => {
            setHistoryInput({ ...historyInput, comment: e.target.value });
          }}
          type="text"
        />
      </div>

      <div className="btn-container">
        <Button className="btn-item" variant="contained" endIcon={<SendIcon />} onClick={onClickSaveHistory}>
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
