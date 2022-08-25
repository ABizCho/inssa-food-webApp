import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

import urlPort from "../../data/urlPort.json";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";

import { Button } from "@mui/material";

const Detail = () => {
  //// 유저 및 history 백엔드까지 완성 시 활성화
  const params = useParams();

  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  const [detailData, setDetailData] = useState({});

  const [historyInput, setHistoryInput] = useState({
    title: "",
    comment: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const onClickRecipe = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  // const dispatch = useDispatch(); //action을 사용하기 위해 값을 보내주는 역할.

  useEffect(() => {
    console.log("HistoryINPUT : ", historyInput);
  }, [historyInput]);

  useEffect(() => {
    findDetailData().then((res) => {
      setDetailData({ ...res.data, recipie_url: "" });
    });
  }, []);

  const findDetailData = async () => {
    return await axios
      .get(
        urlPort.cloudServer + urlPort.node + `/histories/${params.id}/findone`,
        {
          headers: {
            accessToken: cookies.userData.accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setDetailData(res.data.histories);
      });
  };

  useEffect(() => {
    console.log("detailData 받아옴 : ", detailData);
  }, [detailData]);

  const deleteHistory = async (shortId) => {
    return await axios.get(
      `${urlPort.cloudServer + urlPort.node}/histories/${shortId}/delete`,
      { headers: { accessToken: cookies.userData.accessToken } }
    );
  };

  const onDeleteClick = (shortId) => {
    if (window.confirm("삭제 하시겠습니까?")) {
      deleteHistory(shortId);
      navigate("/history/list");
    } else {
      //아니오
    }
  };

  const onUpdateClick = (shortId) => {
    const historyId = params.id;
    navigate(`/history/list/${historyId}/update`);
  };

  return (
    <div className="container1">
      <div className="mainImage">
        <img
          src={detailData.user_inputImg}
          alt="react"
          style={{ width: 413, height: 340 }}
        />
      </div>

      <div className="container2">
        <h1>{detailData.name_Eng}</h1>
      </div>

      <div className="description_container">
        <div className="desc-content">{detailData.description}</div>
      </div>

      <div className="caution_container">
        <div className="cautiona_title">caution</div>
        <div className="foodinfo_caution"> {detailData.caution}</div>
      </div>

      <div className="order_learn_audio">
        <ReactAudioPlayer
          className="audio_player"
          src={detailData.sound_url}
          autoPlay
          controls
        />
      </div>
      <div className="order_learn_text">🗣️: {detailData.order_learn_text}</div>

      <div className="recipe_video" style={{ alignItems: "center" }}>
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
              url={detailData.recipie_url}
              controls
              width={413}
              height={340}
            />
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="history-inputs">
        <label htmlFor="history-title">Title</label>
        <div>{detailData.title}</div>
        <br />
        <label htmlFor="history-comment">Comment</label>
        <div>{detailData.comment}</div>
      </div>

      <div className="btn-container">
        <Button
          className="btn-item"
          variant="contained"
          onClick={onUpdateClick}
        >
          Update
        </Button>

        <Button
          onClick={onDeleteClick}
          className="btn-item retry"
          variant="contained"
          color="grey"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Detail;
