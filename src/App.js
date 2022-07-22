import './App.css';
import Navbar from './components/navbar/navbar.component';
import Hero from './components/hero/hero.component';
import Card from './components/card/card.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
