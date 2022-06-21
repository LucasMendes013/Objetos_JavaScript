//Exercicios
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
const semPrimeiroValor = comidas.shift()
console.log(semPrimeiroValor)

const semUltimoValor = comidas.pop()
console.log(semUltimoValor)

comidas.push('Arroz')
comidas.unshift('Peixe','Batata')
console.log(comidas)
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array






const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber',
'Julia'];

const ordemAlfabetica = estudantes.sort()
console.log(ordemAlfabetica)
// Arrume os estudantes em ordem alfabética
const ordemContraria = estudantes.reverse()
console.log(ordemContraria)
// Inverta a ordem dos estudantes
const verificaJoana = estudantes.includes('Joana')
const verificaJoana = estudantes.includes('Juliana')


function verificacao(aluno, genero, verificaPessoa){
  if(verificaJoana){
    console.log(`${aluno} é ${genero}!`)
  } else {
    console.log(`${aluno} não é ${genero}!`)
  }
}
console.log(verificacao('Joana', 'Aluna'))

// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
let html = `<section>
 <div>Sobre</div>
 <div>Produtos</div>
 <div>Contato</div>
 </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li')
console.log(html)




const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variáve

const carrosCopia = carros.splice()
carros.pop()

