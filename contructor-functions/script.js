// Exercícios

// Transforme o objeto abaixo em uma Constructor Function
// const Pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//   console.log(this.nome + ' andou');
//   }
//  } 

function Pessoa(nome, idade){
  this.nome = nome,
  this.idade = idade,
  this.andar = function(){
    console.log(this.nome + ' andou')
  }
}

function Animal(cor,raca) {
  this.cor = cor,
  this.raca = raca,
  this.latir = function() {
    console.log(`O cão de cor ${cor} e raça ${raca} latiu`)
  }
}
 // Crie 3 pessoas, João - 20 anos,
 // Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('Joao',20)
console.log(joao)
const maria = new Pessoa('Maria',25)
console.log(maria)
const bruno = new Pessoa('Bruno',15)
console.log(bruno)

const alberto = new Animal('branco', 'Poodle')
const juju = new Animal('marrom', 'Pastor Alemão')
const salsicha = new Animal('preto', 'Salsicha')


 // Crie uma Constructor Function (Dom) para manipulação
 // de listas de elementos do dom. Deve conter as seguintes
 // propriedades e métodos:
 //
 // elements, retorna NodeList com os elementos selecionados
 // addClass(classe), adiciona a classe a todos os elementos
 // removeClass(classe), remove a classe a todos os elemento


 function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    })
  }
}

const listaItens = new Dom('li');
const ul = new Dom('ul');


const Carro = {
  marca: 'ford',
  valor: 2000,
  andar(){
    return true
  }
}


// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoas(nome,sobrenome,idade) {
  this.nome = nome, 
  this.sobrenome = sobrenome,
  this.idade = idade
}
// Crie um método no protótipo que retorne
// o nome completo da pessoa
Pessoa.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}

const andre = new Pessoa('Lucas', 'Mendes', 20)
// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// basta colocar NodeList.prototype no navegador


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();
// Qual o construtor do dado abaixo:
li.hidden.constructor.name


//Retorne um número aleatorio entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(aleatorio)

//Retorne o maior número da lista abaixo
const maiorNumero = '4, 5, 200, 8, 9'
const arrayNumero = maiorNumero.split(', ')
const numeroMaximo = Math.max(...arrayNumero)

//Crie uma funcao para limpar os precos e retornar os numeros com centavos arredondados depois retorne a soma total

const listaPrecos =  ['R$ 59,99', 'R$100,222', 'R$230', 'R$200']

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',','.')
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco)
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
limparPreco(listaPrecos[0])