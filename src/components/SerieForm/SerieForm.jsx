import { useState, useEffect } from "react";
import "./SerieForm.css";

// Formulário controlado para cadastrar ou editar uma série.
// - No modo cadastro: cria uma nova série e adiciona ao estado (setSeries).
// - No modo edição (editingSerie): preenche os campos e atualiza o item existente.
// - Limpa os campos após salvar/atualizar.

export default function SerieForm({ setSeries, editingSerie, setEditingSerie }) {
  const [titulo, setTitulo] = useState("");
  const [temporadas, setTemporadas] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [diretor, setDiretor] = useState("");
  const [produtora, setProdutora] = useState("");
  const [categoria, setCategoria] = useState("");
  const [dataAssistiu, setDataAssistiu] = useState("");
  const [mensagem, setMensagem] = useState("");

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
      setMensagem("Série atualizada com sucesso!");
    } else {
      setSeries((prev) => [payload, ...prev]);
      setMensagem("Série salva com sucesso!");
    }

    // limpa o formulário
    setTitulo("");
    setTemporadas("");
    setDataLancamento("");
    setDiretor("");
    setProdutora("");
    setCategoria("");
    setDataAssistiu("");

    // faz a mensagem sumir após 3 segundos
    setTimeout(() => setMensagem(""), 3000);
  }

  return (
    <div>
      {mensagem && (
        <div
          style={{
            background: "#ffe6f0",
            color: "#b30059",
            padding: "10px",
            borderRadius: "8px",
            textAlign: "center",
            fontWeight: "600",
            marginBottom: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          {mensagem}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-container">
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <label>Número de Temporadas:</label>
        <input
          type="number"
          value={temporadas}
          onChange={(e) => setTemporadas(e.target.value)}
          required
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
          required
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: "10px",
          }}
        >
          <button type="submit" className="btn-submit">
            {editingSerie ? "Atualizar Série" : "Salvar Série"}
          </button>
          {editingSerie && (
            <button
              type="button"
              className="btn"
              onClick={() => setEditingSerie(null)}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}