import SerieList from "../components/SerieList/SerieList";

export default function Lista({ series, setSeries }) {
  return (
    <div className="page-center">
      <h1>Lista de Séries</h1>
      <SerieList series={series} setSeries={setSeries} />
    </div>
  );
}

