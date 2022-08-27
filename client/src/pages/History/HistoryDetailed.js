import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

import urlPort from "../../data/urlPort.json";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";

import { Button } from "@mui/material";
import "./HistoryDetailed.css";

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
    console.log("detail로 넘어온 params_shortId: ", params.id);
    findDetailData();
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
        console.log("findDetail Res:", res);
        setDetailData(res.data);
      });
  };

  useEffect(() => {
    console.log("detailData 받아옴 : ", detailData);
  }, [detailData]);

  const deleteHistory = async () => {
    const historyId = params.id;
    return await axios.get(
      `${urlPort.cloudServer + urlPort.node}/histories/${historyId}/delete`,
      { headers: { accessToken: cookies.userData.accessToken } }
    );
  };

  const onDeleteClick = (shortId) => {
    if (window.confirm("삭제 하시겠습니까?")) {
      deleteHistory(shortId).then(() => {
        navigate("/history/list");
      });
    } else {
      //아니오
    }
  };

  const onUpdateClick = () => {
    const historyId = params.id;
    navigate(`/history/list/${historyId}/update`);
  };

  return (
    <div>
      {detailData ? (
        <div>
          <div className="container1">
            <div className="mainImage">
              <img
                className="item-img"
                src={detailData.user_inputImg}
                alt="react"
                style={{ width: "100%", height: "325px" }}
              />
            </div>
          </div>

          <div className="container-contents">
            <div className="item-name">{detailData.name}</div>
            <h1 className="item-nameEng">{detailData.name_Eng}</h1>
            <div className="description_container">
              <div className="desc-content">{detailData.description}</div>
            </div>

            <div className="shape-square" />

            <div className="caution_container">
              <div className="caution_title">caution</div>
              <div className="foodinfo_caution"> {detailData.caution}</div>
            </div>
          </div>

          <div className="userInput-container">
            <div className="userInput-title">
              <h1>Review</h1>
            </div>
            <div className="history-inputs">
              <label className="labels" htmlFor="history-title">
                Title
              </label>
              <div>{detailData.title}</div>
              <br />
              <label className="labels" htmlFor="history-comment">
                Comment
              </label>
              <div>{detailData.comment}</div>

              <div className="btn-container">
                <Button
                  className="btn-item update-btn"
                  variant="contained"
                  onClick={onUpdateClick}
                >
                  Update
                </Button>

                <Button
                  onClick={onDeleteClick}
                  className="btn-item delete-btn"
                  variant="contained"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1> Wait</h1>
        </>
      )}
    </div>
  );
};

export default Detail;
