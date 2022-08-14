import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./components/Home";
import { Products } from './components/Products';
import { Products_details } from './components/Products_details';
import { Nav } from './components/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<Products_details />}/>
      </Routes> 
    </div>
  );
}

export default App;
