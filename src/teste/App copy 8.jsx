import { useState } from "react"

export default function App() {

  const [pesquisaAtual, setPesquisaAtual] = useState("")

  const nomes = [
  "Ana","Bruno","Carlos","Daniela","Eduardo","Fernanda","Gabriel","Helena","Igor","Juliana"
];
 
  const [clinkAtualDaPesquisar, setclinkAtualDaPesquisar] = useState(nomes)

  

  function paraDePesquisar(evento){
     setPesquisaAtual(evento.target.value)
  }

  function pesquisaClink(){
    // if (nomes.includes(pesquisaAtual) === true){
    // setclinkAtualDaPesquisar(nomes)
    // }
    // console.log(nomes)
    const arrayNomes = []
    for (let i = 0; i < nomes.length; i++) {
      const nome = nomes[i];
      if(nome.includes(pesquisaAtual) === true){
        arrayNomes.push(nome)
      }
    }
    setclinkAtualDaPesquisar(arrayNomes)
}

  return (
    <>
    <h1>Evento de pesquisar</h1>
    
    <div>
      <input onChange={(evento) => paraDePesquisar(evento)} type="text" placeholder="pesquisar" />
      <button onClick={() =>pesquisaClink()}>clink</button>
    </div>
    <div>{clinkAtualDaPesquisar.map((listaDeNomes) => (
      <p>{listaDeNomes}</p>
    ))}</div>
    </>
  )
}

