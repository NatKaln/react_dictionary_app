import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <a href="/" className="btn btn-primary">
        Hello
      </a>
    </div>
  );
}

export default App;
