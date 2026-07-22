import { useEffect, useState } from "react";

export default function App() {
  const [elemento, setElemento] = useState([])

  useEffect(() => {
    async function apiDeFilme() {
      // ================== não mecha =============
      const res = await fetch("https://api.tvmaze.com/search/shows?q=breaking bad")
      const apiRes = await res.json()
      console.log(apiRes)
      // ================== não mecha =============
      setElemento(apiRes)

    }

    apiDeFilme()


  }, [])

  return (
    <>
      <h1>NetFlox</h1>
      <div>
        {elemento.map((resultado) => (
          <>
            <p>{resultado.show.name}</p>
            <img src={resultado.show.image.medium} alt="" />
            <p>{resultado.show.language}</p>

            {resultado.show.genres.map((genero) => (<span>{genero}</span>))}
            <a href="#">oiii</a>


          </>
        ))}

      </div>
    </>
  )
}
