import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import Home from "./pages/Home/Home.js";
import History from "./pages/History/History";
import Core from "./pages/Core/Core";

//테스트용 임시 라우팅입니다. 향후 제거합니다.
import ResultInfo from "./pages/Core/components/ResultInfo/ResultInfo";

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
        <Route path="/" element={<Home />} />

        <Route path="/core" element={<Core />} />
        <Route path="/history" element={<History />} />
        {/* ResultInfo는 테스트용으로 임시 라우팅했습니다. */}
        <Route path="/resultInfo" element={<ResultInfo />} />
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
