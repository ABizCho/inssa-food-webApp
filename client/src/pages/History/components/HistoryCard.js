import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useCookies } from "react-cookie";
import urlPort from "./../../../data/urlPort.json";

import $ from "jquery";
import axios from "axios";
import "./HistoryCard.css";

const HistoryCard = (props) => {
  const { id, name, nameEng, food_img, desc, colorIdx, shortId, soundUrl, recipeUrl, spicy } = props;

  const navigate = useNavigate();

  const params = useParams();

  const cardPalette = ["#ffca80", "#ffb54d", "#f08000", "#ffb54d"];

  const onClickDetail = () => {
    navigate(`${shortId}/detail`);
  };
  console.log(name);

  return (
    // <Card
    //   sx={{
    //     bgcolor: cardPalette[colorIdx % 4],
    //     display: "block",
    //   }}
    //   className="card-item"
    //   id={id}
    // >
    //   <CardMedia component="img" height="140" image={food_img} />
    //   <CardContent>
    //     <Typography
    //       gutterBottom
    //       variant="h5"
    //       component="div"
    //       sx={{ fontSize: 18, fontWeight: "bold" }}
    //     >
    //       {name}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {desc.substring(0, 70) + "..."}
    //     </Typography>
    //   </CardContent>

    //   <CardActions></CardActions>
    // </Card>

    <div className="card-container">
      <div className="result-container">
        <div className="black-box"></div>
        <img className="main_food_image" src={food_img} alt="foodImg" />
      </div>

      <div className="black-shadow">
        <div className="text-part">
          <div className="result-item name">
            <h1 className="korean_food_name">
              {nameEng} <br /> {name}
            </h1>
          </div>
          {/* <div className="result-item spicy">Spicy: 🌶️ ✖️ {spicy}</div> */}

          <Button className="detail-btn" variant="contained" color="secondary" onClick={() => onClickDetail()}>
            Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
