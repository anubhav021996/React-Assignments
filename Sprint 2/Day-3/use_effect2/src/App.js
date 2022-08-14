import logo from './logo.svg';
import './App.css';
import { Stopwatch } from './components/times';
import { useState } from 'react';
const init=0;
const end=10;

function App() {
  const [show,setShow]= useState(true);
  return (
    <div className="App" >
      {show ? <Stopwatch init={init} end={end} /> : ""}
      <button onClick={()=>{
        setShow(!show);
      }}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
