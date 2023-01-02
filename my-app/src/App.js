import logo from './logo.svg';
import './App.css';
import StatefullGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
        <StatefullGreeting greeting="I'm a stateful greeting"/>
    </div>
  );
}

export default App;
