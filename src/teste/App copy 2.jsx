import { useState } from "react"

export default function App() {
  const [contador,setContador] = useState(0)
  // setContador(1)
  return (
    <>
      <button onClick={()=> setContador(1+contador)}>clique</button>
      <br />
      <span>{contador}</span>
    </>
  )
}
