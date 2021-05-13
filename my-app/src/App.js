import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';

function App() {
  return (
    <div className="App">
     <Hello name="Rupom" age="28"></Hello>

     <Welcome city="Dhaka" district="Gazipur"></Welcome>
    </div>
  );
}

export default App;
