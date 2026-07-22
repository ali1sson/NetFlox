import { useState } from "react"

export default function App() {
  const [depositar, setDepositar] = useState(0)
  const [saquar, setSaquar] = useState(0)
  const [resultadoDoDinheiro, setResultadoDoDinheiro] = useState([])

  function depositarDinhero(evento) {
    setDepositar(Number(evento.target.value))
  }
  
  function saquarDinheiro(evento1){
    setSaquar(Number( evento1.target.value))
   
  }
  function pixDoDinheiro(){
    
    setResultadoDoDinheiro([...resultadoDoDinheiro, depositar-saquar])

  }


  return (
    <>
    <div>
      <input onChange={(evento) => depositarDinhero(evento)} type="number" placeholder="depositar" />
      <input onChange={(evento1) => saquarDinheiro(evento1)} type="number" placeholder="saquar" />
      <button onClick={() =>pixDoDinheiro()}>pix</button>

    </div>
    
    <div>{resultadoDoDinheiro.map((fazMim)=>(<p>{fazMim}</p>))}</div>

    
    
    

    </>
  )
}
