//import SignInForm from "./pages/user/SignInForm";
import SignUpForm from './pages/user/SignUpForm';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const SignUp = () => {
  const [view, setView] = useState({
    signIn: false,
    signUp: false,
  });
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  });

  const onChangeSignUpData = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
    console.log(signUpData);
  };

  const [cookies, ,] = useCookies('userData');

  return (
    <main>
      <section className='py-5 text-center container'></section>
      <SignUpForm signUpData={signUpData} onChangeSignUpData={onChangeSignUpData} setSignUpData={setSignUpData} />
    </main>
  );
};

export default SignUp;
