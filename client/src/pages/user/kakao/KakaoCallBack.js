import axios from "axios";
import { useEffect } from "react";
import urlPort from "./../../../data/urlPort.json";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const KakaoCallBack = () => {
  //kakao에서 redirect 해준 code 가져오는 부분
  const navigate = useNavigate();
  const [cookiesAuth, setCookieAuth, removeCookieAuth] = useCookies(["auth"]);
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  const KAKAO_PARAMS = new urlPort(window.location.href).searchParams.get(
    "code"
  );

  useEffect(() => {
    //console.log(KAKAO_PARAMS);
    sendCode()
      .then((res) => {
        console.log(res);
        if (res.data.login) {
          //true면 로그인 되어있는 상태
          setCookie("userData", res.data, { path: "/" });
          console.log("로그인 완료");
          navigate("/core");
        } else {
          //false면 회원가입을 진행해야하는 상태
          console.log("회원가입을 해주세요.");
          setCookie("", res.data, { path: "/" });
          navigate("/oauth/l");
        }
      })
      .catch((e) => {
        console.log(e);
        navigate("/");
      });
  }, []);

  const sendCode = async () => {
    return await axios.get(urlPort.server + `/auth/kakao`, {
      params: {
        code: KAKAO_PARAMS,
      },
    });
  };
};

export default KakaoCallBack;
