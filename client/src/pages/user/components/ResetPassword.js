import { useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';
import urlPort from './../../../data/urlPort.json';
import { useCookies } from "react-cookie";

const ResetPassword = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
    const [ resetData, setResetData ] = useState({ email : cookies.userData.email, password:"", rePassword:"" });
    const [errorMessage, setErrorMessage] = useState("");
    
    const navigate = useNavigate();

    const onResetChange = (e) => {
        setResetData({
        ...resetData,
        [e.target.name]: e.target.value,
        });
        console.log(resetData);
    };

    const onClickResetButton = () => {

        if (resetData.password === "") {
            alert("비밀번호를 입력해주세요.");
            $("#password").focus();
            return;
            }

        if (resetData.rePassword === "") {
            alert("비밀번호 확인을 입력해주세요.");
            $("#rePassword").focus();
            return;
            }
    
        if (resetData.password !== resetData.rePassword) {
            alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
            setResetData({
                ...resetData,
                password: "",
                rePassword: "",
            });
            $("#password").focus();
            return;
            }
        
            sendResetData()
            .then((res) => {
                console.log(res);
                setCookie("userData", res.data, { path: "/" });
                alert(res.data.result);
                navigate("/core");
            })
            .catch((e) => {
                console.log(e);
                setErrorMessage(e.response.data.fail);
            });
        
        };

        const sendResetData = async () => {
            return await axios.post(urlPort.server + "/user/reset", resetData);
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
            value={resetData.email}
            disabled
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            />
            <label htmlFor="password" className="form-label">
            New Password
            </label>
            <input
            type="password"
            value={resetData.password}
            className="form-control"
            name="password"
            id="password"
            aria-describedby="passwordHelp"
            onChange={onResetChange}
            />
            <label htmlFor="rePassword" className="form-label">
            Check Password
            </label>
            <input
            type="password"
            value={resetData.rePassword}
            className="form-control"
            name="rePassword"
            id="rePassword"
            aria-describedby="rePasswordHelp"
            onChange={onResetChange}
            />
        </div>
        <div className="mb-3">
        <p className="text-danger">{errorMessage}</p>
        </div>
        <button
        type="button"
        onClick={onClickResetButton}
        className="btn btn-primary"
        >
        Reset
        </button>
        </form>
    </div>
    </div>
        </>
    )
    }

export default ResetPassword;