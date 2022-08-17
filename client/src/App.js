
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import Home from "./pages/Home/Home.js";
import History from "./pages/History/History";
import Core from "./pages/Core/Core";
import Detail from './pages/History/HistoryDetailed';

//테스트용 임시 라우팅입니다. 향후 제거합니다.
import ResultInfo from "./pages/Core/components/ResultInfo/ResultInfo";

////리덕스 도입 시 활성화
// import { Provider } from "react-redux";
// import Store from "./app/Store";

//social로그인
import KakaoCallBack from "./pages/user/kakao/KakaoCallBack";
import SocialSignUp from "./pages/user/components/SocialSignUp";
import SignInForm from "./pages/user/components/SignInForm";

//그냥 로그인
import Login from "./pages/user/Login";

function App() {
  return (
    <div className="App">
      {/* <Provider store={Store}> */}
      <Header />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="core" element={<Core />} />
        <Route path="resultInfo" >
        <Route path = ":id" element={<ResultInfo />} />
        </Route>
        <Route path="history" >
          <Route path="list" element = {<History /> } />
          <Route path="list/:id/detail" element={<Detail />} />
        </Route>
        <Route path="oauth">
          <Route path="kakao/callback" element={<KakaoCallBack />} />
          <Route path="kakao/signup" element={<SocialSignUp />} />
        </Route>
        <Route path="about" element={""} />
      </Routes>

      <Footer />
      {/* </Provider> */}
    </div>
  );
}

export default App;
