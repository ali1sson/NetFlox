import { useEffect, useState } from "react"

export default function App() {

  const [contador, setContador] = useState(0)
  const [contador2, setContador2] = useState(0)
  useEffect(() => {
    async function buscarReceita() {
      const res = await fetch('https://dummyjson.com/recipes')
      const data = await res.json()
      console.log(data)
      return data
    }
    buscarReceita()
  })


  return (
    <>
      <h1>Receita</h1>
      <button onClick={() => setContador(contador + 1)}>clique {contador}</button>
      <button onClick={() => setContador2(contador2 + 1)}>clique2 {contador2}</button>

    </>
  )
}