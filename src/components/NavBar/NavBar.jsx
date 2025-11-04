import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Página Inicial</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/cadastrar">Cadastrar Séries</Link>
      <Link to="/lista">Lista de Séries</Link>
    </nav>
  );
}