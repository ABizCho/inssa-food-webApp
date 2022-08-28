import "./Header.css";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@mui/material";
<<<<<<< HEAD

=======
>>>>>>> 37eab0ef3a1837b8a8c759d3109f5297153a6141

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
      {/* <div className="nav-container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <span
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></span>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <span
                onClick={() => {
                  navigate("/");
                }}
                className="nav-link px-2 text-white"
              >
                Home
              </span>
            </li>

            <li>
              <span
                onClick={() => {
                  navigate("/core");
                }}
                href=""
                className="nav-link px-2 text-white"
              >
                Search
              </span>
            </li>
            <li>
              <span
                href=""
                className="nav-link px-2 text-white"
                onClick={() => {
                  navigate("/history/list");
                }}
              >
                History
              </span>
            </li>
            <li>
              <span
                href=""
                onClick={() => {
                  navigate("about");
                }}
                className="nav-link px-2 text-white"
              >
                About
              </span>
            </li>
          </ul>
        </div>
      </div> */}
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
<<<<<<< HEAD
              LogOut
            </button>
            &nbsp;&nbsp;
            <button
            className="logIn-btn log-btn btn btn-secondary"
            // startIcon={<googleLogo />}
            variant="contained"
            onClick={() => navigate('/login/resetpassword')}
          >
            Reset Password
          </button>
=======
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
>>>>>>> 37eab0ef3a1837b8a8c759d3109f5297153a6141
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
