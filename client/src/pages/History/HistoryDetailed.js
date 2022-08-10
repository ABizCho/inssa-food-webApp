import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import url from "./../../data/port.json";

import dummyData from "./data/dummyData"; // 백엔드 활성화시 제거

const Detail = () => {
  //// 유저 및 history 백엔드까지 완성 시 활성화
  // const params = useParams();

  // const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  // const [detailData, setDetailData] = useState({});

  // useEffect(() => {

  //     findDetailData().then(res => {
  //         // console.log(res);
  //         setDetailData(res.data);
  //     });

  // }, []);

  // const findDetailData = async () => {
  //     return await axios.get(url.url + `/histories/${params.id}/find`, {
  //         headers: {
  //             accessToken: cookies.userData.accessToken
  //         }
  //     })
  // }

  return (
    // 구현 백엔드작업 때 상세구현 요망
    <div className="album">
      <div className="container">
        <div className="card mb-3">
          <div className="card-img-top" style={{ textAlign: "center" }}>
            <img src={dummyData[0].food_img} alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
            <p className="card-text">
              <small className="text-muted">{dummyData[0].food_img}</small>
            </p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            이름
          </label>
          <div className="card">
            <p className="card-body">{dummyData[0].name}</p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            내용
          </label>
          <div className="card">
            <p className="card-body">{dummyData[0].desc}</p>
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
      </div>
    </div>
  );
};

export default Detail;
