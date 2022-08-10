import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import Intro from "./pages/Intro/Intro";

////리덕스 도입 시 활성화
// import { Provider } from "react-redux";
// import Store from "./app/Store";


//social로그인
import KakaoCallBack from "./pages/user/kakao/KakaoCallBack";
import SocialSignUp from "./pages/user/SocialSignUp";

function App() {
  return (
    <div className="App">
      {/* <Provider store={Store}> */}
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
      <Routes path="oauth">
            <Route path="kakao/callback" element={<KakaoCallBack />} />
            <Route path="signUp" element={<SocialSignUp />} />
      </Routes>

      <Footer />
      {/* </Provider> */}
    </div>
  );
}

export default App;
