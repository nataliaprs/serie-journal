import React from "react";
import { useNavigate } from "react-router-dom";
import "./SerieList.css";

export default function SerieList({ series = [], setSeries, setEditingSerie }) {
  const navigate = useNavigate();

  if (!Array.isArray(series)) return null;

  const handleDelete = (id) => {
    if (confirm("Deseja realmente excluir essa série?")) {
      setSeries(series.filter((s) => s.id !== id));
    }
  };

  const handleEdit = (serie) => {
    setEditingSerie(serie);
    navigate("/cadastrar");
  };

  return (
    <section className="serie-list">
      <ul className="serie-list-ul">
        {series.length === 0 ? (
          <li className="serie-empty">Nenhuma série cadastrada.</li>
        ) : (
          series.map((s) => (
            <li key={s.id} className="serie-item">
              <div className="serie-line">
                <span className="serie-text">
                  {s.titulo} - {s.temporadas ?? s.numTemporadas} temporadas - {s.dataLancamento} - {s.diretor} - {s.produtora} - {s.categoria} - {s.dataAssistiu}
                </span>

                <span className="serie-controls">
                  <button className="btn small" onClick={() => handleEdit(s)}>Editar</button>
                  <button className="btn small danger" onClick={() => handleDelete(s.id)}>Excluir</button>
                </span>
              </div>

              <hr className="serie-separator" />
            </li>
          ))
        )}
      </ul>
    </section>
  );
}