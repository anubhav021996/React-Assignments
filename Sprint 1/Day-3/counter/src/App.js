import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';

function App() {
  return (
    <div className="App">
      <Counter value={0}/>
    </div>
  );
}

export default App;
