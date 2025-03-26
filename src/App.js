import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Ajoute ces imports
import Footer from "./components/Footer";
import Home from './components/Home'; // composant pour la page d'accueil
import About from './components/About'; // composant pour la page à propos
import Contact from './components/Contact'; // composant pour la page de contact

import "./App.css";

const App = () => {
  return (
    <div className="App-header">


<Router> {/* Enveloppe toute l'application dans Router */}
      <div className="App">
        <header className="header-primary">
         <h1>🚀 Web developpement project</h1>

        {/* Navigation avec les liens */}
          <nav>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Utilisation du composant Hello si nécessaire */}
     
      </div>
    </Router>
      
      {/* ajouter les routes */}
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {/* structure */}




    {/*   <Hello />
      <Section /> */}
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
