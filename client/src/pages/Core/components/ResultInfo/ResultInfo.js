import "./ResultInfo.css";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useCookies } from "react-cookie";

const ResultInfo = () => {
  const navigate = useNavigate();
  const onClickSaveHistory = () => {
    navigate("/history");
  };

  //쿠키 사용 준비
  const [cookies, setCookie, removeCookie] = useCookies(["inputImage"]);

  return (
    <div className="resultInfo-container">
      <h1 className="title">Food Info</h1>
      <div className="result-container">
        <div>
          <div className="result-item img-box">
            <img
              className="result-item img"
              src={cookies.inputImage}
              alt="react"
              width={"200px"}
            />
          </div>
          <div className="result-item name">
            <h1>{"name"}</h1>
          </div>
          <div className="result-item spicy">spicy: {"spicy"}</div>
          <div className="result-item caution">caution: {"caution"}</div>
          <div className="result-item desc">
            <span className="desc-title">description</span>
            <div className="desc-content">{"쌸라쌸라쌸라쌸라쌸라쌸라"}</div>
          </div>
        </div>
      </div>
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
