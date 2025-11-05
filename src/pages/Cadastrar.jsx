import SerieForm from "../components/SerieForm/SerieForm";

// Página que contém o formulário (SerieForm).
// Recebe setSeries, editingSerie e setEditingSerie do App para suportar edição.
export default function Cadastrar({ setSeries, editingSerie, setEditingSerie }) {
  return (
    <div className="page-center">
      <div className="form-wrapper">
        <h1 style={{ marginTop: 0 }}>{editingSerie ? "Editar Série" : "Cadastrar Nova Série"}</h1>
        <SerieForm
          setSeries={setSeries}
          editingSerie={editingSerie}
          setEditingSerie={setEditingSerie}
        />
      </div>
    </div>
  );
}


