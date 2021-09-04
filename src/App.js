import logo from './logo.svg';
import './App.css';
import ScrollList from "./ScrollList";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        <img src={logo} className="App-logo" alt="logo"/>
        <a>
          <ScrollList/>
        </a>
      {/*</header>*/}
    </div>
  );
}

export default App;
