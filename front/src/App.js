import './App.css';
import Header from './pages/Header';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import StartPage from './pages/StartPage';
import FindIdPage from './pages/FindIdPage';
import FindPwPage from './pages/FindPwPage';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import TicketingPage from './pages/TicketingPage';
import MovieListPage from './pages/MovieListPage';
import QRCodePage from './pages/QRCodePage';
import LicenseBanner from './components/public/LincenseBanner';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <div style={{
              height: "auto",
              minHeight: "100%",
              paddingBottom: 85,
            }}>
            <Routes>
              <Route path='/' element={<StartPage />} />
              <Route path="/login" element={<LoginPage />}/>
              <Route path='/findid' element={<FindIdPage />} />
              <Route path='/findpw' element={<FindPwPage />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/mainpage' element={<MainPage />} />
              <Route path='/mypage' element={<MyPage />} />
              <Route path='/ticketpage' element={<TicketingPage />} />
              <Route path='/movielist' element={<MovieListPage />} />
              <Route path='/qrpage' element={<QRCodePage />} />
            </Routes>
          </div>
          <LicenseBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;
