export default function App() {
  const produtos = [
  {
    id: 1,
    nome: 'Notebook Gamer',
    categoria: 'Eletrônicos',
    preco: 4500,
    estoque: true,
  },
  {
    id: 2,
    nome: 'Mouse RGB',
    categoria: 'Eletrônicos',
    preco: 150,
    estoque: true,
  },
  {
    id: 3,
    nome: 'Teclado Mecânico',
    categoria: 'Eletrônicos',
    preco: 300,
    estoque: false,
  },
  {
    id: 4,
    nome: 'Camiseta Preta',
    categoria: 'Roupas',
    preco: 50,
    estoque: true,
  },
  {
    id: 5,
    nome: 'Calça Jeans',
    categoria: 'Roupas',
    preco: 120,
    estoque: false,
  },
  {
    id: 6,
    nome: 'Tênis Esportivo',
    categoria: 'Calçados',
    preco: 250,
    estoque: true,
  },
  {
    id: 7,
    nome: 'Chinelo',
    categoria: 'Calçados',
    preco: 30,
    estoque: true,
  },
  {
    id: 8,
    nome: 'Livro JavaScript',
    categoria: 'Livros',
    preco: 80,
    estoque: true,
  },
  {
    id: 9,
    nome: 'Livro React',
    categoria: 'Livros',
    preco: 95,
    estoque: false,
  },
  {
    id: 10,
    nome: 'Monitor 24',
    categoria: 'Eletrônicos',
    preco: 900,
    estoque: true,
  },
];
  function renderizaProtos(listaDeProdutos){
    const caixaVazia = []
    for (const produtosAtual of listaDeProdutos ){
      if(produtosAtual.estoque === true){
        caixaVazia.push(produtosAtual)

      }
     
    }
    
    return   caixaVazia
  }
  
  return (
    <div>{renderizaProtos(produtos).map((vamosVer)=>(
      <>
        <p key={vamosVer.id} >{vamosVer.nome}</p>
        <p>{vamosVer.categoria}</p>
        <span>{vamosVer.preco}</span>
        <br />
        <br />
        <br />
      </> 
    ))}</div>
    
  )
}

  