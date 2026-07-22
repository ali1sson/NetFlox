import { useState } from "react"

export default function App() {

  const [multiplica, setMultiplica] = useState(0)
  const [clika, setClika] = useState(0)

  const vaiSerMultiplicado = [1,2,3,4,5,6,7,8,9,10]
  
  function multiplicador(evento){
    const numero = Number(evento.target.value)
    if(numero >= 0 ){
       setMultiplica(numero)
    }else{
      alert("oii")
    }
  }
  
  function butãoClick(){
    setClika(multiplica)
  }

  return (
    <>
    <div>
      <input onChange={(evento) => multiplicador(evento)} type="number" placeholder="numero" />
      <button onClick={() => butãoClick()}>clink</button>
    </div>
    <div>{vaiSerMultiplicado.map((ok) => (
      <div > <p>{ok} X {clika} = {ok*clika} </p></div>
    ))}</div>
    </>
  )
}
