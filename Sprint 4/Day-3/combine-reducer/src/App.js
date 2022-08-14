import './App.css';
import { Login } from './components/Login';
import { Main } from './components/Main';
import {Routes, Route, useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { addtoken } from './Redux/login/action';

function App() {
  let Navigate= useNavigate();
  let Dispatch= useDispatch();
  let {token}= useSelector((store)=>store.token);
  
  useEffect(()=>{
    Dispatch(addtoken(JSON.parse(localStorage.getItem("token"))));
    token ? Navigate("/") : Navigate("/login");
  },[token]);
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;