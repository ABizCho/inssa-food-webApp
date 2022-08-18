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
import urlPort from './../../../data/urlPort.json'

import $ from "jquery";
import axios from "axios";
const HistoryCard = (props) => {
  const { id, name, food_img, desc, colorIdx, history_card_id } = props;

  const navigate = useNavigate();

  const params = useParams();

  const cardPalette = ["#ffca80", "#ffb54d", "#f08000", "#ffb54d"];

  const onClickDetail = () => {
    navigate(`${history_card_id}/detail`);
  };
  console.log(name);

  

  const onClickUpdateHistory = async (id) => {
    await axios.post('/histories/update', () => {
      
    })
  }

  return (
    <Card
      sx={{
        bgcolor: cardPalette[colorIdx % 4],
        display: "block",
      }}
      className="card-item"
      id={id}
    >
      <CardMedia component="img" height="140" image={food_img} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: 18, fontWeight: "bold" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc.substring(0, 70) + "..."}
        </Typography>
      </CardContent>

      <Button color="primary" onClick={() => onClickDetail()}>
        Detail
      </Button>

      <CardActions></CardActions>
    </Card>
  );
};

export default HistoryCard;
