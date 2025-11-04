export default function SerieList({ series, setSeries }) {
  function remover(id) {
    setSeries(series.filter((s) => s.id !== id));
  }

  return (
    <div>
      {series.map((s) => (
        <div className="serie-card" key={s.id}>
          <strong>{s.titulo}</strong><br/>
          {s.temporadas} temporadas <br/>
          {s.categoria} <br/>
          Assistido em: {s.dataAssistiu}
          <br/><br/>
          <button onClick={() => remover(s.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}
