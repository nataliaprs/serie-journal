import SerieForm from "../components/SerieForm/SerieForm";

export default function Cadastrar({ setSeries }) {
  return (
    <div className="page-center">
      <h1>Cadastrar Série</h1>
      <SerieForm setSeries={setSeries} />
    </div>
  );
}

