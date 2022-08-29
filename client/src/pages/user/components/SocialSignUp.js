import $ from "jquery";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import urlPort from "../../../data/urlPort.json";
import { useCookies } from "react-cookie";
import "./SocialSignUp.css";
import { useNavigate } from "react-router-dom";

const SocialSignUp = () => {
  const navigate = useNavigate();

  const [cookiesAuth, setCookieAuth, removeCookieAuth] = useCookies(["auth"]);

  const emailRef = useRef();

  const [errorMessage, setErrorMessage] = useState("");

  const [signUpData, setSignUpdata] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
  });

  const onChangeSignUpData = (e) => {
    setSignUpdata({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(cookiesAuth.auth);

    setSignUpdata({
      ...signUpData,
      email: cookiesAuth.auth.kakao_account.email,
    });
  }, []);

  const onClickSignUpButton = () => {
    if (signUpData.email === "") {
      alert("이메일을 입력해주세요.");
      emailRef.current.focus();
      return;
    }

    if (signUpData.password === "") {
      alert("비밀번호를 입력해주세요.");
      $("#password").focus();
      return;
    }

    if (signUpData.rePassword === "") {
      alert("비밀번호 확인을 입력해주세요.");
      $("#rePassword").focus();
      return;
    }

    if (signUpData.name === "") {
      alert("이름을 입력해주세요.");
      $("#name").focus();
      return;
    }

    if (signUpData.password !== signUpData.rePassword) {
      alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
      setSignUpdata({
        ...signUpData,
        password: "",
        rePassword: "",
      });
      $("#password").focus();
      return;
    }

    sendSignUpData()
      .then((res) => {
        console.log(res.data);
        alert(res.data.result);

        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.response.data.error);
      });
  };

  const sendSignUpData = async () => {
    return await axios.post(
      urlPort.cloudServer + urlPort.node + "/user/signUp",
      signUpData
    );
  };

  return (
    <main>
      <section className="py-2 text-center container">
        <div className="social-title">social sign up</div>
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto"></div>
        </div>
      </section>
      <div className="sec2-container album">
        <div className="container">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                disabled
                ref={emailRef}
                value={signUpData.email}
                onChange={onChangeSignUpData}
                className="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nickname
              </label>
              <input
                type="text"
                value={signUpData.name}
                onChange={onChangeSignUpData}
                className="form-control"
                name="name"
                id="name"
                placeholder="Please type your nickname"
                autoFocus
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={signUpData.password}
                onChange={onChangeSignUpData}
                className="form-control"
                name="password"
                id="password"
                placeholder="Please type your password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="rePassword" className="form-label">
                Re-Password
              </label>
              <input
                type="password"
                value={signUpData.rePassword}
                onChange={onChangeSignUpData}
                className="form-control"
                name="rePassword"
                id="rePassword"
                placeholder="Type your password again"
              />
            </div>

            <div className="mb-3">
              <p className="text-danger">{errorMessage}</p>
            </div>
            <button
              type="button"
              onClick={onClickSignUpButton}
              className="social-submit-btn btn btn-dark"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SocialSignUp;
