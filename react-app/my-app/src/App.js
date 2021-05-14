import logo from './logo.svg';
import './App.css';
import Welcome from './mycomponent/Welcome';
import Arrow from './mycomponent/Arrow';
import Stateexample from './mycomponent/Stateexample';
import Changestate from './mycomponent/Changestate';
import Condition1 from './mycomponent/Condition1';

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <Arrow/>
      <Stateexample></Stateexample>
      <Condition1></Condition1>
      <Changestate></Changestate>
      
    </div>
  );
}

export default App;
