import { useNavigate, useParams } from "react-router-dom";
import urlPort from "./../../data/urlPort.json";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

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
      `${urlPort.cloudServer + urlPort.node}/histories/${params.id}/update`,
      updateData
    );
    alert("updated!");
    window.history.back();
  };

  const prepareUpdate = async () => {
    console.log("params: ", params.id);
    return await axios.get(
      `${urlPort.cloudServer + urlPort.node}/histories/${params.id}/findOne`,
      {
        headers: { accessToken: cookies.userData.accessToken },
      }
    );
  };

  const onUpdateDataChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="container1">
        <div className="mainImage">
          <img
            className="item-img"
            src={updateData.user_inputImg}
            alt="react"
            style={{ width: "100%", height: "325px" }}
          />
        </div>
      </div>

      <div className="container-contents">
        <div className="item-name">{updateData.name}</div>
        <h1 className="item-nameEng">{updateData.name_Eng}</h1>
        <div className="description_container">
          <div className="desc-content">{updateData.description}</div>
        </div>

        <div className="shape-square" />

        <div className="caution_container">
          <div className="caution_title">caution</div>
          <div className="foodinfo_caution"> {updateData.caution}</div>
        </div>
      </div>

      <div className="userInput-container">
        <div className="userInput-title">
          <h1>Update</h1>
        </div>
        <div className="history-inputs">
          <TextField
            variant="filled"
            multiline
            color="warning"
            className="textField-title"
            name="title"
            onChange={onUpdateDataChange}
            value={updateData.title}
            placeholder="Title"
            autoFocus
          />
          <br />
          <TextField
            variant="filled"
            multiline
            color="warning"
            rows={4}
            className="textField-comment"
            name="comment"
            onChange={onUpdateDataChange}
            value={updateData.comment}
            placeholder="Comment"
          />

          <div className="btn-container">
            <Button
              className="btn-item update-btn"
              variant="contained"
              onClick={onUpdateClick}
            >
              Update
            </Button>

            <Button
              onClick={() => {
                window.history.back();
              }}
              className="btn-item delete-btn"
              variant="contained"
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HisotyUpdate;
