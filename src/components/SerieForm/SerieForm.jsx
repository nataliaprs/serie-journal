import { useState, useEffect } from "react";
import "./SerieForm.css";

export default function SerieForm({ setSeries, editingSerie, setEditingSerie }) {
  const [titulo, setTitulo] = useState("");
  const [temporadas, setTemporadas] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [diretor, setDiretor] = useState("");
  const [produtora, setProdutora] = useState("");
  const [categoria, setCategoria] = useState("");
  const [dataAssistiu, setDataAssistiu] = useState("");

  useEffect(() => {
    if (editingSerie) {
      setTitulo(editingSerie.titulo || "");
      setTemporadas(editingSerie.temporadas ?? editingSerie.numTemporadas ?? "");
      setDataLancamento(editingSerie.dataLancamento || "");
      setDiretor(editingSerie.diretor || "");
      setProdutora(editingSerie.produtora || "");
      setCategoria(editingSerie.categoria || "");
      setDataAssistiu(editingSerie.dataAssistiu || "");
    } else {
      // limpa se não estiver editando
      setTitulo("");
      setTemporadas("");
      setDataLancamento("");
      setDiretor("");
      setProdutora("");
      setCategoria("");
      setDataAssistiu("");
    }
  }, [editingSerie]);

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      id: editingSerie ? editingSerie.id : Date.now(),
      titulo,
      temporadas,
      dataLancamento,
      diretor,
      produtora,
      categoria,
      dataAssistiu,
    };

    if (editingSerie) {
      setSeries((prev) => prev.map((s) => (s.id === editingSerie.id ? payload : s)));
      setEditingSerie(null);
    } else {
      setSeries((prev) => [payload, ...prev]);
    }

    // limpa o formulário
    setTitulo("");
    setTemporadas("");
    setDataLancamento("");
    setDiretor("");
    setProdutora("");
    setCategoria("");
    setDataAssistiu("");
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>Título:</label>
      <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />

      <label>Número de Temporadas:</label>
      <input type="number" value={temporadas} onChange={(e) => setTemporadas(e.target.value)} />

      <label>Data de Lançamento da Temporada:</label>
      <input type="date" value={dataLancamento} onChange={(e) => setDataLancamento(e.target.value)} />

      <label>Diretor:</label>
      <input type="text" value={diretor} onChange={(e) => setDiretor(e.target.value)} />

      <label>Produtora:</label>
      <input type="text" value={produtora} onChange={(e) => setProdutora(e.target.value)} />

      <label>Categoria:</label>
      <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />

      <label>Data em que assistiu:</label>
      <input type="date" value={dataAssistiu} onChange={(e) => setDataAssistiu(e.target.value)} />

      <div style={{ display: "flex", gap: 10 }}>
        <button type="submit" className="btn-submit">
          {editingSerie ? "Atualizar Série" : "Salvar Série"}
        </button>
        {editingSerie && (
          <button
            type="button"
            className="btn"
            onClick={() => {
              setEditingSerie(null);
            }}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}


