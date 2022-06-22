//[].forEach()
//[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

  const carros = ['Ford', 'Fiat', 'Honda'];
  carros.forEach(function(item, index, array) {
  console.log(item.toUpperCase());
  });
  // com Arrow Function
  carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
  });
//O método sempre retorna undefined





