import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>
        <span>React</span>
        <span> Budget</span>
      </h1>
      <h2>SIDEBAR</h2>
      <h2>Dashboard</h2>
      <h2>Combined</h2>
      <h2>Income</h2>
      <h2>Outgoings</h2>
    </div>
  );
}

export default App;
