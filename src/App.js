import './App.css';
import Navbar from './components/navbar/navbar.component';
import Hero from './components/hero/hero.component';
import CardSection from './components/cardSection/cardSection.component';
import DailyMissions from './components/dailyMissions/dailyMissions.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardSection />
      <DailyMissions />
    </div>
  );
}

export default App;
