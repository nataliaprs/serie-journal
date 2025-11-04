import { useState } from "react";

export default function SerieForm({ setSeries }) {
  const [form, setForm] = useState({
    titulo: "",
    temporadas: "",
    dataLancamento: "",
    diretor: "",
    produtora: "",
    categoria: "",
    dataAssistiu: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSeries((prev) => [...prev, { ...form, id: Date.now() }]);
    setForm({
      titulo: "",
      temporadas: "",
      dataLancamento: "",
      diretor: "",
      produtora: "",
      categoria: "",
      dataAssistiu: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Título" value={form.titulo} onChange={e => setForm({ ...form, titulo: e.target.value })}/>
      <input placeholder="Número de Temporadas" value={form.temporadas} onChange={e => setForm({ ...form, temporadas: e.target.value })}/>
      <input type="date" value={form.dataLancamento} onChange={e => setForm({ ...form, dataLancamento: e.target.value })}/>
      <input placeholder="Diretor" value={form.diretor} onChange={e => setForm({ ...form, diretor: e.target.value })}/>
      <input placeholder="Produtora" value={form.produtora} onChange={e => setForm({ ...form, produtora: e.target.value })}/>
      <input placeholder="Categoria" value={form.categoria} onChange={e => setForm({ ...form, categoria: e.target.value })}/>
      <input type="date" value={form.dataAssistiu} onChange={e => setForm({ ...form, dataAssistiu: e.target.value })}/>
      <button type="submit">Salvar</button>
    </form>
  );
}
