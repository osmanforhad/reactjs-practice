import logo from './logo.svg';
import './App.css';
import Welcome from './mycomponent/Welcome';
import Arrow from './mycomponent/Arrow';
import Stateexample from './mycomponent/Stateexample';
import Changestate from './mycomponent/Changestate';

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <Arrow/>
      <Stateexample></Stateexample>
      <Changestate></Changestate>
    </div>
  );
}

export default App;
