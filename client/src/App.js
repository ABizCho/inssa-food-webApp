import './App.css';
import { Route, Routes } from 'react-router-dom';


import Header from './common/components/Header';
import Footer from './common/components/Footer';
import Home from './pages/Home/Home.js';
import History from "./pages/History/History";

import History from "./pages/History/History";

////리덕스 도입 시 활성화
// import { Provider } from "react-redux";
// import Store from "./app/Store";

function App() {
  return (
    <div className='App'>
      {/* <Provider store={Store}> */}
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />


        <Route path="/history" element={<History/>} />
      </Routes>
      <Footer />
      {/* </Provider> */}
    </div>
  );
}

export default App;
