import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import urlPort from './../../../data/urlPort.json';
import $ from "jquery";

const FindPassword = () => {
    const [ findData, setFindData ] = useState({ email : "" });
    
    const [errorMessage, setErrorMessage] = useState("");
    
    const navigate = useNavigate();

    const onChangeFindData = (e) => {
        setFindData({
          ...findData,
          [e.target.name]: e.target.value,
        });
        console.log(findData);
      };

    const onClickFindButton = () => {
        if (findData.email === "") {
          alert("이메일을 입력해주세요.");
          $("#email").focus();
          return;
        }
    
        if (findData.password === "") {
          alert("비밀번호를 입력해주세요.");
          $("#password").focus();
          return;
        }
        
        sendfindData()
        .then((res) => {
            console.log(res);
            alert("가입하신 이메일로 새로운 비밀번호를 보내드렸습니다.");
            navigate("/login");
        })
        .catch((e) => {
            console.log(e);
            setErrorMessage(e.response.data.fail);
        });
    };
    
    const sendfindData = async () => {
        return await axios.post(urlPort.server + "/user/find/password", findData);
    };
    
    return (
        <>
    <div className="album">
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={findData.email}
            onChange={onChangeFindData}
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <p className="text-danger">{errorMessage}</p>
        </div>
        <button
          type="button"
          onClick={onClickFindButton}
          className="btn btn-primary"
        >
          Find
        </button>
      </form>
    </div>
  </div>
        </>
    )
}

export default FindPassword;