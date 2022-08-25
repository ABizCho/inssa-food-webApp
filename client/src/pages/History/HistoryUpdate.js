import { Navigate, useNavigate, useParams } from "react-router-dom";
import dummyData from "./data/dummyData";
import urlPort from "./../../data/urlPort.json";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";

const HisotyUpdate = () => {
  const params = useParams();
  const [cookies, setCookie, removeCookie] = useCookies("userData");
  const [updateData, setUpdateData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    prepareUpdate().then((res) => {
      setUpdateData(res.data);
    });
  }, []);

  const onUpdateClick = async () => {
    console.log("params: ", params.id);
    await axios.post(
      `${urlPort.server}/histories/${params.id}/update`,
      updateData
    );
    alert("updated!");
    navigate("/history/list");
  };

  const prepareUpdate = async () => {
    console.log("params: ", params.id);
    return await axios.get(`${urlPort.server}/histories/${params.id}/find`, {
      headers: { accessToken: cookies.userData.accessToken },
    });
  };

  const onUpdateDataChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => console.log(updateData), [updateData]);

  return (
    <div className="album">
      <div className="container">
        <div className="result-item desc">
          <span className="desc-title">description</span>
          <div className="desc-content">{updateData.description}</div>
        </div>
        <div className="result-item spicy">spicy: {updateData.spicy}</div>
        <div className="result-item caution">caution: {updateData.caution}</div>
        <div className="result-item name_Eng">
          English Name: {updateData.name_Eng}
        </div>
        <div className="result-item order_learn_audio">
          <ReactAudioPlayer src={updateData.sound_url} autoPlay controls />
        </div>
        <div className="result-item order_learn_text">
          🗣️: {updateData.order_learn_text}
        </div>
        <div>
          RECIPE
          <ReactPlayer
            url={updateData.recipe_url}
            controls
            width={300}
            height={300}
          />
        </div>
        <div className="card mb-3">
          <div className="card-img-top" style={{ textAlign: "center" }}>
            <img
              style={{ width: "100px", height: "100px" }}
              src={updateData.user_inputImg}
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
            <input
              name="title"
              className="card-body"
              defaultValue={updateData.title}
              onChange={onUpdateDataChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            내용
          </label>
          <div className="card">
            <textarea
              name="comment"
              className="card-body"
              onChange={onUpdateDataChange}
              defaultValue={updateData.comment}
            />
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

        <button onClick={onUpdateClick}>Update</button>
      </div>
    </div>
  );
};

export default HisotyUpdate;
