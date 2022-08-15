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
import galbi from "../ResultInfo/order_food/1.galbi.mp3";

const ResultInfo = () => {
  const navigate = useNavigate();

  //params
  const params = useParams();

  //state
  const [foodInfo, setFoodInfo] = useState({});

  //쿠키 사용 준비
  const [cookies, setCookie, removeCookie] = useCookies(["inputImage", "foodInfo"]);

  useEffect(() => {
    console.log("params.id : ", params.id);

    getFoodInfo().then((res) => {
      // console.log(res);
      setFoodInfo(res.data.food);
    });
  }, []);

  useEffect(() => {
    setCookie("foodInfo", foodInfo);
    console.log(foodInfo);
  }, [foodInfo]);

  const onClickSaveHistory = async () => {
    await postHistoryData();
    await navigate("/history");
  };
  const postHistoryData = async () => {
    return await axios.post(urlPort.server + "/histories", historyInfo);
  };

  const historyInfo = {
    img: cookies.inputImage,
    food: cookies.foodInfo,
    userId: cookies.userData.id,
  };

  const getFoodInfo = async () => {
    return await axios.get(`${urlPort.server}/foodInfo/${params.id}/find`);
  };

  return (
    <div className="resultInfo-container">
      <h1 className="title">Food Info</h1>
      <div className="result-container">
        <div>
          <div className="result-item img-box">
            <img className="result-item img" src={cookies.inputImage} alt="react" width={"200px"} />
          </div>
          <div className="result-item name">
            <h1>{"name"}</h1>
          </div>
          <div className="result-item spicy">spicy: {foodInfo.spicy}</div>
          <div className="result-item caution">caution: {foodInfo.caution}</div>
          <div className="result-item name_Eng">English Name: {foodInfo.name_Eng}</div>
          <div className="result-item order_learn_audio">
            <ReactAudioPlayer src={galbi} autoPlay controls />
          </div>
          <div className="result-item order_learn_text">🗣️: {foodInfo.order_learn_text}</div>
          <div>
            RECIPE
            <ReactPlayer url={foodInfo.recipie_url} controls width={300} height={300} />
          </div>

          <div className="result-item desc">
            <span className="desc-title">description</span>
            <div className="desc-content">{foodInfo.description}</div>
          </div>
        </div>
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
