import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Game, Help, History } from "./components";
import background from "../src/assets/images/imgSofka.png";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <img src={background} alt="" />
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
