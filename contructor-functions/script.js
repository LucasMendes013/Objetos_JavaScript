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
