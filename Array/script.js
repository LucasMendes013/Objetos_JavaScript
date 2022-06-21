const todasLis = document.querySelectorAll('li')
console.log(todasLis)

const todasLisArray = Array.from(todasLis)
console.log(todasLisArray)

const obj = {
  0: 'Andre',
  1: 'Rafael',
  2: 'Teste',
  length: 3
}

const objTransformado = Array.from(obj)
//Só conseguimos modificar o contructor de nodeList para Array em objetos caso coloquemos length: em sua estrutura




const instrumentos = ['Guitarra', 'Violão', 'Piano']
console.log(instrumentos)
instrumentos.sort() //Organiza em ordem alfabética os itens da Array
console.log(instrumentos) 






const carros = ['Ford', 'Fiat', 'Gol']
const corCarros = ['Amarelo', 'Vermelho', 'Azul']
carros.unshift('Fusca', 'Ferrari') //Adiciona os itens no início da Array
console.log(carros)
carros.push('Mercedes', 'IA')  //Adiciona os itens no final da Array
console.log(carros)
carros.pop()  //Remove o ultimo item da Array
console.log(carros)
carros.shift() //Remove o primeiro item da Array
console.log(carros)
carros.reverse() //Torna a ordem da Array contrária.
console.log(carros)
carros.splice(1,2, 'Parati') //A partir do item 1(2), remove dois itens a frente e adiciona 'parati'
console.log(carros)
carros.fill('Moto', 1, 3) //substitui o item criado antes pelo que especificarmos, lembrando que os próximos parâmetros são onde inicia e onde para de substituir. Onde parar deve ser um número a mais.
console.log(carros) //['Mercedes', 'Moto', 'Moto', 'Ferrari']

console.log(carros.concat(corCarros)) //Concatena, junta a variavel carros com a corCarros
console.log(carros.includes('Moto')) //true, na const carro inclui o item 'Moto'
console.log(carros.indexOf('Motos')) //1, verifica se existe o item pesquisado, e retorna em qual array ele está. Caso não exista o valor será -1
console.log(carros.lastIndexOf('Moto')) //2, retorna o index(ordem de chamada) em que o ultimo item está. Caso tenha dois com o mesmo valor, retorna o ultimo.

console.log(carros.join(' ')) // Retorna o valor da array junto. Passamos de parâmetro o que ficará entre os index.

carros.slice(0, 1)//Retorna o item que inicia ate o que termina, também clona Arrays caso colocado em uma nova variável.:
// const linguagem = [1, 2, 3 ,4]
// const clone = linguagem.slice()  //aqui foi clonado, o 'clone' tera modificacoes próprias a partir desse ponto
console.log(carros)







