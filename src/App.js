import './App.css';
import Navbar from './components/navbar/navbar.component';
import Hero from './components/hero/hero.component';
import CardSection from './components/cardSection/cardSection.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <CardSection />
    </div>
  );
}

export default App;
