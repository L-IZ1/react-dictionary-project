import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <h1>What word are you looking for?</h1>
        </header>
        <main>
          <Dictionary defaultkeyword="sustainability"/>
        </main>
        <footer className="App-footer">
          <small>Coded by Elise</small>
        </footer>
      </div>
    </div>
  );
}
