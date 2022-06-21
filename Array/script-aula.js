//Arrays
// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];
const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor:
'Azul', preco: 2000}], function andar(nome) { console.log(nome)
}];
dados[2]('Ford');
dados[1][2].cor; // azul



//Construção de Arrays
// Toda array herda os métodos e propriedades do protótipo do construtor Array

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corola', 'Mustang', 'Honda');
carros[1] // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11
//Os valores das array's não são estáticos



//Array.from()
//Array.from() é um método utilizado para transformar array-like objects, em uma array.

let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // Array
const carros = {
 0: 'Fiat',
 1: 'Honda',
 2: 'Ford',
 length: 4,
}
const carrosArray = Array.from(carros)


//Array.isArray()
//Verifica de o valor passado é uma array e retorna o valor em booleano

let li = document.querySelectorAll('li')  //Nodelist
Array.isArray(li) //false

li = Array.from(li) //Array
Array.isArray(li) //true


//Array.of(), Array() e new Array()
//Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessaria para utilizar o constructor Array.

Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4); // [1,2,3,4]



//Propriedades e Métodos do Prototype
//[].length retorna o tamanho da array.

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3
frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2



//Métodos Modificadores[].sort[]
//Os próximos métodos que vamos falar sobre, são métodos modificadores(mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', Violão]
const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]





//[].unshift() e [].push()
//[].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];
carros.push('Ferrari'); // 6
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];




//[].shift() e [].pop()
//[].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // 'Ford'
carros; // ['Fiat', 'VW', 'Honda'];
const ultimoCarro = carros.pop(); // 'Honda'
carros; // ['Fiat', 'VW'];





//[].reverse()
//[].reverse() inverte os itens da array e retorna a nova array.

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];