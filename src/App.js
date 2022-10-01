import logoD_ from "./logoD_.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <img src={logoD_} className="App-logo" alt="logo" />
        </header>

        <main>
          <Dictionary defaultKeyWord="sunset" />
        </main>
        <footer className="App-footer">Coded by Nat Kalnytska</footer>
      </div>
    </div>
  );
}

export default App;
