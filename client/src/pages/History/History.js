import HistoryCard from "./components/HistoryCard";
import Toggle from "./components/Toggle";
import "./components/Toggle.scss";
import ToggleButtonSizes from "./components/ButtonGroup";
import dummyData from "./data/dummyData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./History.css";

import { useState } from "react";

const History = () => {
  const [isSlide, setIsSlide] = useState(true);

  const onClickAlbum = () => {
    setIsSlide(true);
  };
  const onClickSlide = () => {
    setIsSlide(false);
  };

  const dummy = dummyData.historyCard;
  console.log(dummy[0].id);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 374 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 374, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="history-container">
      <h2>History Page</h2>

      <div className="history-box">
        <ToggleButtonSizes
          className="Toggle"
          onClickAlbum={onClickAlbum}
          onClickSlide={onClickSlide}
        />
        {isSlide ? (
          <div className="grid-container">
            {dummy.map((item, index) => {
              return (
                <img
                  width="125px"
                  height="125px"
                  className="grid-item scale"
                  src={item.food_img}
                  alt="React"
                />
              );
            })}
          </div>
        ) : (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            transitionDuration={500}
          >
            {dummy.map((item, index) => {
              return (
                <HistoryCard
                  key={index}
                  id={item?.id}
                  name={item?.name}
                  food_img={item?.food_img}
                  desc={item?.description}
                />
              );
            })}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default History;
