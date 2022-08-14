import './Header.css';
import lflogo from './lflogo.jpg';
import kakaLoginButtonImg from '../../img/kakao_login_medium.png';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect } from "react";


const Header = () => {
  const REST_API_KEY = '0abf97780f442400eccc7cd004baabab';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.userData === undefined) {
        navigate("/");
    }
}, [cookies]);

  //1번
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onLoginClick = () => {
    navigate('/login');
  };
  const onSignUpClick = () => {
    navigate('/signUp');
  };

  return (
    <header className='p-3 text-bg-dark header-container'>
      <div>
        <img onClick={ ()=> navigate("/")} src={lflogo} alt='logo' style={{ height: '200px', width: '200px' }} />
      </div>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <a href='/' className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'>
            <svg className='bi me-2' width='40' height='32' role='img' aria-label='Bootstrap'>
              <use></use>
            </svg>
          </a>

          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <a href='#' className='nav-link px-2 text-white'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-white'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-white'>
                Search
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-white'>
                History
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-white'>
                About
              </a>
            </li>
          </ul>

          <div className='text-end'>
            <a href={KAKAO_AUTH_URI} >
              <img src={kakaLoginButtonImg} />
            </a>
            
            <button type='button' onClick={onLoginClick} className='btn btn-outline-light me-2' >
              Login
            </button>
            <button type='button'onClick={onSignUpClick} className='btn btn-warning'>
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
