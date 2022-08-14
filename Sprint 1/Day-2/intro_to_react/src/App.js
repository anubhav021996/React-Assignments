import logo from './logo.svg';
import './App.css';

function App() {
  const os = ["Android","Blackberry","iPhone","Windows Phone"];
  const man = ["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>{os.map((e)=>{return print(e)})}</ul>

      <h1>Mobile Manufacturers</h1>
      <ul>{man.map((e)=>{return print(e)})}</ul>
    </div>
  );
}

function print (x){
  return (<li>{x}</li>)
}

export default App;
