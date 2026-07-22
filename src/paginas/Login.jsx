import { useState } from "react"


export default function App() {
  const [emailAtual, setEmailAtual] = useState()
  const [senhalAtual, setSenhaAtual] = useState()

  function loginDeFilme(evento) {
    const email = evento.target.value
    setEmailAtual(email)
  }
  function senhaDeFilme(evento2) {
    const Senha = evento2.target.value
    setSenhaAtual(Senha)
  }
  function continuarFilme() {


    if (senhalAtual !== "jaja1") {
      alert("senha errada")
    } else if (emailAtual !== "jaja1") {
      alert("email errada")
    } else {

      alert("foiii")

      window.location.href = "http://localhost:5173/net"

    }



  }

  return (
    <>
      <main class="caixaCentral">
        <section class="caixaDeLogin">
          <h1>Login</h1>

          <input onChange={(evento) => loginDeFilme(evento)} type="text" placeholder="Email:" />
          <input onChange={(evento2) => senhaDeFilme(evento2)} type="text" placeholder="Senha:" />
          <button onClick={() => continuarFilme()}>continua</button>

        </section>
        <section class="caixaDeSenha" >
          <p>Email: <span>jaja1</span></p>
          <p>Senha: <span>jaja1</span></p>
        </section>
      </main>


    </>
  )

}
