import React from "react";
import { Icon } from "@material-ui/core";
import kakaoIcon from "../../../img/kakaoSvg.svg";

// 방법1
const KakaoLogo = () => (
  <Icon
    className="exIcon"
    style={{ width: "100%", height: "100%", color: "red" }}
  >
    <img src={kakaoIcon} height={20} width={20} alt={"kakaoIcon"} />
  </Icon>
);

const googleLogo = () => (
  <Icon
    className="exIcon"
    style={{ width: "100%", height: "100%", color: "red" }}
  >
    <img src={kakaoIcon} height={20} width={20} alt={"googleIcon"} />
  </Icon>
);

export { KakaoLogo, googleLogo };
