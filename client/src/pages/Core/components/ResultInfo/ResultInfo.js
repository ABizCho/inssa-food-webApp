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
        <img src={mainfoodImage} style={{ width: 410, height: 300 }} />
      </div>

      <div className="container2">
        <h1>떡볶이</h1>
        <p>
          이렇게 맛있는 <br />
          떡볶이는 처음이지?
        </p>
      </div>

      <div className="container3">
        <span></span>
      </div>

      <div className="food_detail_back">
        <div className="simple_list">
          <div className="result-item caution">
            caution <br /> <div className="foodinfo_caution"> {foodInfo.caution}</div>
          </div>
        </div>
        <div className="result-item order_learn_audio">
          <ReactAudioPlayer className="audio_player" src={foodInfo.sound_url} autoPlay controls />
        </div>
        <div className="result-item order_learn_text">🗣️: {foodInfo.order_learn_text}</div>
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
            <ReactPlayer className="video-player" url={foodInfo.recipie_url} controls width={400} height={340} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ResultInfo;
