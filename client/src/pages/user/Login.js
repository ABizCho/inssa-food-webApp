import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

import { Button } from "@mui/material";
import { KakaoLogo, googleLogo } from "./components/SocialLogo";
import "./Login.css";

import urlPort from "../../data/urlPort.json";

const Login = () => {
  const navigate = useNavigate();
  // ------------------kakao Oauth-------------------

  const REST_API_KEY = "0abf97780f442400eccc7cd004baabab";
  const REDIRECT_URI = urlPort.cloudServer + "/oauth/kakao/callback";

  //1번
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  //---------------------------------------------------

  const [view, setView] = useState({
    signIn: false,
    signUp: false,
    nothing: true,
  });
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
  });

  const onChangeSignInData = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
    console.log(signInData);
  };

  const onChangeSignUpData = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
    console.log(signUpData);
  };

  const [cookies, setCookie, removeCookie] = useCookies("userData");

  return (
    <main className='log-container'>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Inssa Food</h1>
            <p className="lead text-muted">
              Find out Information
              <br />
              about the food with a picture
            </p>
          </div>
        </div>
        {!cookies.userData ? (
          <p>
            <button
              className="signIn-btn btn btn-outline-primary my-2 m-1"
              onClick={() => {
                setView({
                  signIn: true,
                  signUp: false,
                  nothing: false,
                });
              }}
            >
              Log In
            </button>
            <button
              className="btn btn-outline-secondary my-2 m-1"
              onClick={() => {
                setView({
                  signIn: false,
                  signUp: true,
                  nothing: false,
                });
              }}
            >
              Sign Up
            </button>
          </p>
        ) : (
          <div>
            <h3>Welcome to InssaFood</h3>
            <h3>You are signed in</h3>
          </div>
        )}
        <div className="socialSignIn-btnBox ">
          <Button
            className="social-btn kakao"
            // startIcon={<KakaoLogo />}
            variant="contained"
            onClick={() => {
              window.location.replace(KAKAO_AUTH_URI);
            }}
          >
            Sign in with Kakao
          </Button>
          <Button
            className="social-btn google"
            // startIcon={<googleLogo />}
            variant="contained"
          >
            Sign in with Google
          </Button>
          <Button
            className="social-btn google"
            // startIcon={<googleLogo />}
            variant="contained"
            onClick={() => navigate("/login/findpassword")}
          >
            Find Password
          </Button>
        </div>
      </section>
      {view.signIn ? (
        <SignInForm
          signInData={signInData}
          onChangeSignInData={onChangeSignInData}
          setView={setView}
        />
      ) : (
        <></>
      )}
      {view.signUp ? (
        <SignUpForm
          signUpData={signUpData}
          onChangeSignUpData={onChangeSignUpData}
          setSignUpData={setSignUpData}
          setView={setView}
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default Login;
