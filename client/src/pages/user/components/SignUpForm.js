import $ from "jquery";
import { useRef, useState } from "react";
import axios from "axios";
import urlPort from "../../../data/urlPort.json";

const SignUpForm = ({ signUpData, onChangeSignUpData, setSignUpdata }) => {
  const emailRef = useRef();

  const [errorMessage, setErrorMessage] = useState("");

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
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.response.data.error);
      });
  };

  const sendSignUpData = async () => {
    return await axios.post(
      urlPort.localClient + urlPort.node + "/user/signUp",
      signUpData
    );
  };

  return (
    <div className="album">
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={signUpData.name}
              onChange={onChangeSignUpData}
              className="form-control"
              name="name"
              id="name"
            />
          </div>
          <div className="mb-3">
            <p className="text-danger">{errorMessage}</p>
          </div>

          <button
            type="button"
            onClick={onClickSignUpButton}
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
