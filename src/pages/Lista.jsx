import SerieList from "../components/SerieList/SerieList";
import { Link } from "react-router-dom";

export default function Lista({ series, setSeries, setEditingSerie }) {
  return (
    <div className="page-center">
      <h1 style={{ marginBottom: "20px" }}>Lista de Séries</h1>
      <SerieList series={series} setSeries={setSeries} setEditingSerie={setEditingSerie} />
      
      <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
        <Link to="/cadastrar" onClick={() => setEditingSerie(null)}>
          <button className="btn" style={{ padding: "10px 14px", borderRadius: 8 }}>
            Cadastrar nova série
          </button>
        </Link>
      </div>
    </div>
  );
}

