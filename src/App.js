import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Game from "../src/components/Game";


function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
