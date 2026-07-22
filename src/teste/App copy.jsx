export default function App() {

  function coletaDeProdutos(evento){
  console.log(evento)
  }

  return (
    <>
    <h1>lista de produtos</h1>
    <div>
      <input onChange={(evento) => coletaDeProdutos(evento)} type="text" placeholder="digite uma palavra" />
      <button>clink</button>
    </div>
    </>
  )
}
