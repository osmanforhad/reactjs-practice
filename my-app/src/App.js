import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';

function App() {
  return (
    <div className="App">
     <Hello name="Rupom" age="28"></Hello>
     <Hello name="Rain" age="34"></Hello>
     <Hello name="Rifat" age="17"></Hello>
     <Hello name="Saif" age="2"></Hello>

     <Welcome city="Dhaka" district="Gazipur"></Welcome>
     <Welcome city="Sylhet" district="Moulobibazar"></Welcome>
     <Welcome city="Rangpur" district="Naogaon"></Welcome>
    </div>
  );
}

export default App;
