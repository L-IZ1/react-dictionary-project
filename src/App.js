
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
          <small>This project was coded by Elise Petitjean and is </small>
          <small>
            {" "}
            <a className="link-git"
              href="https://github.com/L-IZ1/react-dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-Source 
            </a>
             and {" "}
            <a className="link-git"
              href="https://zingy-bublanina-398945.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
