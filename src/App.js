import './App.css';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';

function App() {
  return (
    // BEM class naming convention
    <div className="app">

      <Header />
      <TinderCards />
      <SwipeButtons />

    </div>
  );
}

export default App;
