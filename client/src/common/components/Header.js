import "./Header.css";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@mui/material";

const Header = () => {
  // 야매:라우팅 권한관리로 개선되어야할 로직---------------
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.userData === undefined) {
      navigate("/");
    }
  }, [cookies]);

  // -----------------------------------------

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
    <header className="p-3 header-container">
      <div className="logo-box">
        <img
          src={`${process.env.PUBLIC_URL}/InssaFood_logo2.png`}
          alt="logo"
          style={{ height: 3 * logoSizeNum, width: 8 * logoSizeNum }}
        />
      </div>

      <div className="logBtn-box text-end">
        {cookies.userData === undefined ? (
          <div className="logTrue-box">
            <Button
              className="logIn-btn log-btn btn"
              variant="contained"
              onClick={onClickLogin}
            >
              Login
            </Button>
          </div>
        ) : (
          <div className="logFalse-box">
            <Button
              className="signUp-btn log-btn btn"
              variant="contained"
              onClick={onClickLogOut}
            >
              Log out
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="contained"
              className="resetPw-btn log-btn btn"
              onClick={() => navigate("/login/resetpassword")}
            >
              Reset pw
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
