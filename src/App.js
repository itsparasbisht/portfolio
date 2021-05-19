import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
