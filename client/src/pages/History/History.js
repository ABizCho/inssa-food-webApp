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
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();

  const [isSlide, setIsSlide] = useState(true);

  const onClickAlbum = () => {
    setIsSlide(true);
  };
  const onClickSlide = () => {
    setIsSlide(false);
  };

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
    // ref: https://velog.io/@moony_moon/Open-API-%EC%97%90%EC%84%9C-%EB%B0%9B%EC%95%84%EC%98%A8-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-CarouselSlider-%EB%A7%8C%EB%93%A4%EA%B8%B0

    //   const getHistoryData = async () => {
    //     const histories = await Promise.all(
    //       new Array().fill(10).map((data) => {
    //         return axios.get(urlPort.server + "/histories/", {
    //           headers: {
    //             accessToken: cookies.userData.accessToken,
    //           },
    //         });
    //       })
    //     ).then((res) => {
    //       res.map((data) => data?.data?.histories);
    //       console.log(res);
    //       // setHistoryData(res.data.histories);
    //     });
    //     setHistoryData(histories);
    //   };
    //   getHistoryData();
    // });

    const getHistoryData = async () => {
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

    getHistoryData();
  }, [""]);

  // 테스트용: 나중에 템플릿 리터럴로 user정보에 따른 get 가져오게 구현해야함

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
                  src={item.food_defaultImg}
                  alt="React"
                />
              );
            })}
          </div>
        ) : historyData === "undefined" ? (
          <></>
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
                return (
                  <HistoryCard
                    key={index}
                    id={item.id}
                    name={item.name_Eng}
                    food_img={item.food_defaultImg}
                    desc={item.description}
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
