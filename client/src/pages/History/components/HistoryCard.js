import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./HistoryCard.css";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import $ from "jquery";

const HistoryCard = (props) => {
  const { id, name, food_img, desc, colorIdx } = props;

  const navigate = useNavigate();

  const cardPalette = ["#ffca80", "#ffb54d", "#f08000", "#ffb54d"];

  const onClickDetail = (id) => {
    navigate(`history/${id}/detail`);
  };
  console.log(name);
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
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 18, fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc.substring(0, 70) + "..."}
        </Typography>
      </CardContent>

      <Button className="detail_button" color="primary" onClick={onClickDetail}>
        Detail
      </Button>

      <CardActions></CardActions>
    </Card>
  );
};

export default HistoryCard;
