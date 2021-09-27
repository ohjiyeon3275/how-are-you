import logo from "./logo.svg";
import ojygame from "./ojygame.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ojygame} className="title" alt="title" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>오징어게임에 과몰입한 오징어가 낳은 괴물</p>
        <a
          className="App-link"
          href="https://github.com/ohjiyeon3275/how-are-you"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repogitory
        </a>
      </header>
    </div>
  );
}

export default App;
