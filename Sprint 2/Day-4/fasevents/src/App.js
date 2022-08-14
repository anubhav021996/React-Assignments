import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Employees } from './components/employee';
import { EmployeeShow } from './components/employeeShow';

function App() {
  const [show,setShow]= useState([]);

  useEffect(()=>{
    handleShow();
  },[])

  const handleShow= () => {
    axios.get("http://localhost:3001/posts").then((res)=>{
      setShow(res.data);
    })
  }

  return (
    <div className="App">
      <Employees handleShow={handleShow}/>
      {show.map((e)=>(
        <EmployeeShow value={e} key={e.id}/>
      ))}
    </div>
  );
}

export default App;
