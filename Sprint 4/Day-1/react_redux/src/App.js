import {Routes, Route} from "react-router-dom";
import './App.css';
import { Navbar } from './components/Navbar';
import { Todos } from './components/Todo';
import { Todolist } from "./components/Todolist";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Todos />} />
        <Route path="/todo/:id" element={<Todolist/>}/>
      </Routes>
    </div>
  );
}

export default App;
