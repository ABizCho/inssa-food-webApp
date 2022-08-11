import "./Header.css";
import kakaLoginButtonImg from "../../img/kakao_login_medium.png";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const REST_API_KEY = "0abf97780f442400eccc7cd004baabab";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";

  // 야매:라우팅 권한관리로 개선되어야할 로직---------------
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.userData === undefined) {
      navigate("/");
    }
  }, [cookies]);

  // -----------------------------------------

  // ------------------kakao Oauth-------------------
  //1번
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  //---------------------------------------------------

  const onClickSignUp = () => {
    navigate("/signUp");
  };

  const onClickLogin = () => {
    navigate("/login");
  };
  const onClickLogOut = () => {
    console.log("a");
    removeCookie("userData", { path: "/" });
    navigate("/");
  };

  const logoSizeNum = 15;
  return (
    <header className="p-3 text-bg-dark header-container">
      <div className="logo-box">
        <img
          src={`${process.env.PUBLIC_URL}/InssaFood_logo2.png`}
          alt="logo"
          style={{ height: 3 * logoSizeNum, width: 8 * logoSizeNum }}
        />
      </div>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#"
                onClick={() => {
                  navigate("/home");
                }}
                className="nav-link px-2 text-white"
              >
                Home
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  navigate("/core");
                }}
                href="#"
                className="nav-link px-2 text-white"
              >
                Search
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link px-2 text-white"
                onClick={() => {
                  navigate("/history");
                }}
              >
                History
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <div className="logBtn-box text-end">
            {cookies.userData === undefined ? (
              <div className="logTrue-box">
                <a className="kakao-btn" href={KAKAO_AUTH_URI}>
                  <img src={kakaLoginButtonImg} width={70} height={35} />
                </a>
                <button
                  onClick={onClickLogin}
                  className="logIn-btn log-btn btn btn-secondary "
                >
                  Login
                </button>
              </div>
            ) : (
              <div className="logFalse-box">
                <button
                  className="signUp-btn log-btn btn btn-outline-danger"
                  onClick={onClickLogOut}
                >
                  LogOut
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
