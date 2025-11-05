import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Cadastrar from "./pages/Cadastrar";
import Lista from "./pages/Lista";

// Gerencia o estado global das séries (no App) e define as rotas da aplicação.
// - `series` guarda a lista de séries (estado centralizado).
// - `setSeries` é passado para componentes que alteram a lista (cadastrar/editar/excluir).
// - `editingSerie` e `setEditingSerie` controlam o modo de edição (quando um item é editado).

export default function App() {
  const [series, setSeries] = useState([]);
  const [editingSerie, setEditingSerie] = useState(null);

  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/cadastrar"
            element={
              <Cadastrar
                setSeries={setSeries}
                editingSerie={editingSerie}
                setEditingSerie={setEditingSerie}
              />
            }
          />
          <Route
            path="/lista"
            element={
              <Lista
                series={series}
                setSeries={setSeries}
                setEditingSerie={setEditingSerie}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}
