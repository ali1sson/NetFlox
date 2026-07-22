import { useEffect, useState } from "react";
import  foto  from "./img/foto.jpg";

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
      <main class="menu">
        <div>
          <h1>NetFlox</h1>
          <ul>
            <li>Inicio</li>
            <li>Séries</li>
            <li>Filmes</li>
            <li>Novidades</li>
            <li>Minha Lista</li>
          </ul>
        </div>
        <section>
          <input type="text" placeholder="Buscar..." />

          <img width="30" height="30" src="https://img.icons8.com/forma-bold/30/ffffff/appointment-reminders.png" alt="appointment-reminders" />
          <img src={foto} alt=""  class="imgDaConta"/>

        </section>
      </main>




      <main class="caixaDeNetFlox">
        <h1>NetFlox</h1>
        <section class="caixaDeItem">

          {elemento.map((resultado) => (
            <div>

              <img src={resultado.show.image.medium} alt="" />
              <nav class="afastamento">
              <h3>{resultado.show.name}</h3>
              <p>{resultado.show.language}</p>
              <main class="oi">
               <section class="aliamento"></section>

                {resultado.show.genres.map((genero) =>
                (

                  <span>{genero}</span>

                ))}
              </main>
              </nav>
              <nav class="filme">
                <a href={resultado.show.url}>assitir</a>
              </nav>


            </div>
          ))}


        </section>
      </main>
    </>
  )
}

