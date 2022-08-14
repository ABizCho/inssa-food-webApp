import axios from "axios";

import HistoryCard from "./components/HistoryCard";
import Toggle from "./components/Toggle";
import "./components/Toggle.scss";
import ToggleButtonSizes from "./components/ButtonGroup";
import dummyData from "./data/dummyData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./History.css";

import urlPort from "../../data/urlPort.json";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const History = () => {
  const [historyData, setHistoryData] = useState(["undefined"]);
  const [cookies, setCookie, removeCookie] = useCookies(["userData","foodInfo"]);

  const navigate = useNavigate();

  const userInputImg = cookies.inputImage;

  

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

  // --- to 서버 ----

  useEffect(() => {
    // History card 저장 로직
    

    console.log("history 접속");
    getHistoryData();
    postHistoryData()

    console.log(cookies.foodInfo)
    console.log(userInputImg);
  }, []);


  // 테스트용: 나중에 템플릿 리터럴로 user정보에 따른 get 가져오게 구현해야함


  const historyInfo = {img: userInputImg, food: cookies.foodInfo, userId: cookies.userData}

  const postHistoryData = async () => {
    return await axios.post(urlPort.server + '/histories', historyInfo)
    
  }

  const getHistoryData = () => {
    try {
      axios
        .get(urlPort.server + "/histories/", {
          headers: {
            accessToken: cookies.userData.accessToken,
          },
        })
        .then((res) => {
          console.log(res);
          setHistoryData(res.data.histories);
        });
    } catch (e) {
      console.log(`[응답오류]: ${e}`);
      navigate("/core");
    }
  };

  useEffect(() => {
    console.log("histories 구성");
  }, [historyData]);

  return (
    <div className="history-container">
      <h1 className="title">History Page</h1>

      <div className="history-box">
        <ToggleButtonSizes
          className="Toggle"
          onClickAlbum={onClickAlbum}
          onClickSlide={onClickSlide}
        />
        {isSlide ? (
          <div className="grid-container">
            {historyData?.map((item, index) => {
              return (
                <img
                  key={index}
                  width="125px"
                  height="125px"
                  className="grid-item scale"
                  src={item.userImage}
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
            <div>
              {historyData?.map((item, index) => {
                console.log("map 실행:", item);
                return (
                  <HistoryCard
                    key={index}
                    id={item?.id}
                    name={item?.name_Eng}
                    food_img={item?.food_defaultImg}
                    desc={item?.description}
                    colorIdx={index}
                  />
                );
              })}
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default History;
