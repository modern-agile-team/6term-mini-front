import './App.css';
import Header from './pages/Header';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import StartPage from './pages/StartPage';
import FindIdPage from './pages/FindIdPage';
import FindPwPage from './pages/FindPwPage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path="/login" element={<LoginPage />}/>
            <Route path='/findid' element={<FindIdPage />} />
            <Route path='/findpw' element={<FindPwPage />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
