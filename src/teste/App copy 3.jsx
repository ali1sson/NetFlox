import { useState } from "react"

export default function App() {

  const [tarefa,setTarefa] = useState("") 
  const [listaDeTarefa,setListaDeTarefa] = useState([])
  console.log(listaDeTarefa)
  //let tarefa = "" => criação da vareavel
  //tarefa = "abc" => atualização
  //setTarefa("novo valor") => atualizar do react


  function salvatexto(){
    setListaDeTarefa([...listaDeTarefa, tarefa])

  }
  //                #3
  function printar(evento){
  setTarefa(evento.target.value)


  }

  return (
    <>
    <section>
      <h1>todo list</h1>
      <div>
        {/*                 #1                  #2 */}
        <input onChange={(evento) => printar(evento)} type="text" placeholder="list" value={tarefa}  />

        <button onClick={ () => salvatexto() }>salva</button>
      </div>

      <div>
        {listaDeTarefa.map((valorDaLista) => (
          <p>{valorDaLista}</p>
        ))}
      </div>

    </section>
    </>
  )
}
