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