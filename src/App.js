import logoD from "./logoD.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <img src={logoD} className="App-logo" alt="logo" />
        </header>

        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Nat Kalnytska</footer>
      </div>
    </div>
  );
}

export default App;
