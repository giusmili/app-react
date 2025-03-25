import logo from "./logo.svg";
import Hello from "./components/Hello";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App-header">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {/* structure */}
      <Hello />
      <Section />
      <Footer />
    </div>
  );
};

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */
export default App;
