function multiplica(valorParaMultiplicar:number, valorDoMultiplicador:number){
 const soma = valorParaMultiplicar*valorDoMultiplicador
return soma
}

const numero= 2
const multiplicador= 3
const resultado = multiplica(numero, multiplicador)

console.log(resultado)


interface IDados {
    nome:string
    idade:number
    cor?:string
}

const dados:IDados = {
    nome:"alisson",
    idade:21,
    cor:""

}