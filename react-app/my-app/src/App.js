import logo from './logo.svg';
import './App.css';
import Welcome from './mycomponent/Welcome';
import Arrow from './mycomponent/Arrow';
import Stateexample from './mycomponent/Stateexample';

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <Arrow/>
      <Stateexample></Stateexample>
    </div>
  );
}

export default App;
