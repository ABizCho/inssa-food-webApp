import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import $ from "jquery";

const HistoryCard = (props) => {
  const { id, name, food_img, desc } = props;

  const navigate = useNavigate();

  const onClickDetail = (id) => {
    navigate(`history/${id}/detail`);
  };
  return (
    <Card
      sx={{
        bgcolor: "#fbe4b1",
        display: "block",
      }}
      className="historyCard"
      id={id}
    >
      <CardMedia component="img" height="140" image={food_img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc.substring(0, 70) + "..."}
        </Typography>
      </CardContent>

      <Button color="primary" onClick={onClickDetail}>
        Detail
      </Button>

      <CardActions></CardActions>
    </Card>
  );
};

export default HistoryCard;
