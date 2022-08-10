import * as React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import SwipeIcon from "@mui/icons-material/Swipe";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtonSizes(props) {
  const { onClickAlbum, onClickSlide } = props;
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left" onClick={onClickAlbum}>
      <AppsIcon />
    </ToggleButton>,
    <ToggleButton value="center" key="center" onClick={onClickSlide}>
      <SwipeIcon />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // TODO Replace with Stack
        "& > :not(style) + :not(style)": { mt: 2 },
      }}
    >
      <ToggleButtonGroup size="small" {...control}>
        {children}
      </ToggleButtonGroup>
    </Box>
  );
}
