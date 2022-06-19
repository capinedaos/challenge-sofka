import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, Game, Help, History } from './components';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/help" element={<Help />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
