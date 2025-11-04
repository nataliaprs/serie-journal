import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Cadastrar from "./pages/Cadastrar";
import Lista from "./pages/Lista";

export default function App() {
  const [series, setSeries] = useState([]);

  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastrar" element={<Cadastrar setSeries={setSeries} />} />
          <Route path="/lista" element={<Lista series={series} setSeries={setSeries} />} />
        </Routes>
      </main>
    </Router>
  );
}