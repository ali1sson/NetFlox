import { useState } from "react"

export default function App() {
  // altura * altura / peso
  const [peso,setPeso] = useState(0)
  const [altura,setAltura] = useState(0)
  const [resultado,setResultado] = useState(0)
  //const nome = 0
  function  pesoDaPesoa(evento){
    const inputPeso = evento.target.value
    //console.log(evento.target.value)
   setPeso(Number(inputPeso))

  }

  function alturaDaPesoa(evento2){
    const inputAltura = evento2.target.value
    //console.log(evento2.target.value)
    setAltura(Number(inputAltura))
  }

  function pesoIdeal(){
    const valorDoIMC = peso / (altura * altura)
    setResultado(valorDoIMC)
  }
  
  
  return (
    <>
      <input onChange={(evento) => pesoDaPesoa(evento) } type="number" placeholder="peso" />
      <input onChange={(evento2) => alturaDaPesoa(evento2)}  type="number" placeholder="altura" />
      <div>
        <button onClick={() => pesoIdeal()}>conveter</button>
      </div>

      <span>{resultado.toFixed(2)}</span>
    </>
  )
}
