import { useState } from "react";
import "./SerieForm.css";

export default function SerieForm({ setSeries }) {
  const [titulo, setTitulo] = useState("");
  const [temporadas, setTemporadas] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [diretor, setDiretor] = useState("");
  const [produtora, setProdutora] = useState("");
  const [categoria, setCategoria] = useState("");
  const [dataAssistiu, setDataAssistiu] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const novaSerie = {
      id: Date.now(),
      titulo,
      temporadas,
      dataLancamento,
      diretor,
      produtora,
      categoria,
      dataAssistiu,
    };

    // usa o setSeries passado pelo App
    setSeries((prev) => [novaSerie, ...prev]);

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
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <label>Número de Temporadas:</label>
      <input
        type="number"
        value={temporadas}
        onChange={(e) => setTemporadas(e.target.value)}
      />

      <label>Data de Lançamento da Temporada:</label>
      <input
        type="date"
        value={dataLancamento}
        onChange={(e) => setDataLancamento(e.target.value)}
      />

      <label>Diretor:</label>
      <input
        type="text"
        value={diretor}
        onChange={(e) => setDiretor(e.target.value)}
      />

      <label>Produtora:</label>
      <input
        type="text"
        value={produtora}
        onChange={(e) => setProdutora(e.target.value)}
      />

      <label>Categoria:</label>
      <input
        type="text"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />

      <label>Data em que assistiu:</label>
      <input
        type="date"
        value={dataAssistiu}
        onChange={(e) => setDataAssistiu(e.target.value)}
      />

      <button type="submit" className="btn-submit">Salvar Série</button>
    </form>
  );
}

