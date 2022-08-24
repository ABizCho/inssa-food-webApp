import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

import urlPort from "../../data/urlPort.json";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";

const Detail = () => {
  //// 유저 및 history 백엔드까지 완성 시 활성화
  const params = useParams();

  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  const [detailData, setDetailData] = useState({});

  const navigate = useNavigate();

  // const dispatch = useDispatch(); //action을 사용하기 위해 값을 보내주는 역할.

  useEffect(() => {
    findDetailData().then((res) => {
      // console.log(res);
      setDetailData({ ...res.data, recipie_url: "" });
    });
  }, []);

  useEffect(() => {
    console.log("detailData 받아옴 : ", detailData);
  }, [detailData]);

  const findDetailData = async () => {
    return await axios
      .get(
        urlPort.cloudServer + urlPort.node + `/histories/${params.id}/find`,
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
    // 구현 백엔드작업 때 상세구현 요망
    <div className="album">
      <div className="container">
        <div className="result-item desc">
          <span className="desc-title">description</span>
          <div className="desc-content">{detailData.description}</div>
        </div>
        <div className="result-item spicy">spicy: {detailData.spicy}</div>
        <div className="result-item caution">caution: {detailData.caution}</div>
        <div className="result-item name_Eng">
          English Name: {detailData.name_Eng}
        </div>
        <div className="result-item order_learn_audio">
          <ReactAudioPlayer src={detailData.sound_url} autoPlay controls />
        </div>
        <div className="result-item order_learn_text">
          🗣️: {detailData.order_learn_text}
        </div>
        <div>
          RECIPE
          <ReactPlayer
            url={detailData.recipie_url}
            controls
            width={300}
            height={300}
          />
        </div>
        <div className="card mb-3">
          <div className="card-img-top" style={{ textAlign: "center" }}>
            <img
              style={{ width: "100px", height: "100px" }}
              src={detailData.user_inputImg}
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
            <p className="card-text">
              <small className="text-muted"></small>
            </p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <div className="card">
            <p className="card-body">{detailData.title}</p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            내용
          </label>
          <div className="card">
            <p className="card-body">{detailData.comment}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            window.history.back();
          }}
          className="btn btn-outline-danger"
        >
          뒤로가기
        </button>

        <button onClick={onDeleteClick}>Delete</button>
        <button onClick={onUpdateClick}>Update</button>
      </div>
    </div>
  );
};

export default Detail;
