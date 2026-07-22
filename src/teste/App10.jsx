import { useState } from "react";

export default function App() {

  const nomes = [
    "Ana",
    "Bruno",
    "Carlos",
    "Daniel",
    "Eduardo",
    "Fernanda",
    "Gabriel",
    "Helena",
    "Igor",
    "Juliana",
    "Kaique",
    "Larissa",
    "Marcos",
    "Natália",
    "Otávio",
    "Patrícia",
    "Rafael",
    "Sabrina",
    "Thiago",
    "Vanessa",
    "William",
    "Yasmin",
    "Alice",
    "Beatriz",
    "Caio",
    "Diego",
    "Elisa",
    "Felipe",
    "Giovana",
    "Henrique",
    "Isabela",
    "João",
    "Karen",
    "Lucas",
    "Mateus",
    "Nicole",
    "Paulo",
    "Renata",
    "Samuel",
    "Tatiane",
    "Ubirajara",
    "Vinícius",
    "Wellington",
    "Xavier",
    "Yuri",
    "Zilda",
    "Amanda",
    "Bianca",
    "César",
    "Débora",
    "Enzo",
    "Fabiana",
    "Gustavo",
    "Hugo",
    "Íris",
    "Jéssica",
    "Kevin",
    "Leandro",
    "Mirela",
    "Noemi",
    "Olívia",
    "Priscila",
    "Roberto",
    "Sara",
    "Tomás",
    "Valéria",
    "Wesley",
    "Yago",
    "Adriana",
    "Breno",
    "Cláudia",
    "Davi",
    "Emilly",
    "Fábio",
    "Geovana",
    "Heitor",
    "Ivan",
    "Jaqueline",
    "Kauã",
    "Luan",
    "Márcia",
    "Nicolas",
    "Orlando",
    "Pietra",
    "Raquel",
    "Silas",
    "Talita",
    "Ulisses",
    "Vitor",
    "Washington",
    "Yohana",
    "Alisson",
    "Cristiano",
    "Danilo",
    "Emanuel",
    "Flávia",
    "Gilberto",
    "Lorena",
    "Milena",
    "Pedro"
  ];
  const [nomesPesquisado, setnomesPesquisado] = useState(nomes)
  

  function pesquisarDeNomes(valor) {
    const caixaArrey = []
    const pesquisar = valor.target.value
    for (let i = 0; i < nomes.length; i++) {
      const nome = nomes[i];
      if (nome.includes(pesquisar) === true) {
        caixaArrey.push(nome)
      }
    }
    setnomesPesquisado(caixaArrey)

  }


  return (
    <>
      <h1>pesquisa de nome</h1>
      <div>
        <input onChange={(valor) => pesquisarDeNomes(valor) } type="text" />
        {/* <input onChange={(valor) => pesquisarDeNomes(valor)} type="text" placeholder="pesquisar" /> */}

        <div>{nomesPesquisado.map((vai) => (<p>{vai}</p>))}</div>

      </div>
    </>
  )
}
