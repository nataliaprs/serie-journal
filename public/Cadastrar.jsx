import React from 'react'
import SerieForm from '../components/SerieForm/SerieForm'
import sampleSeries from '../data/sampleSeries'

export default function Cadastrar({ setSeries }) {
  // Se quiser pré-popular ao abrir a página, descomente as linhas abaixo **uma vez**
  // React.useEffect(()=> {
  //   setSeries(prev => prev.length ? prev : sampleSeries)
  // }, [])

  return (
    <section style={{ marginTop: 12 }}>
      <SerieForm setSeries={setSeries} />
    </section>
  )
}
