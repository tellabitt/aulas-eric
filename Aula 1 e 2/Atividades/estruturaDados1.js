var pessoa = {
  nome: "Carlos",
  idade: 28,
  profissao: "Programador",
};

console.log(pessoa.nome); // Carlos

// Array de numeros
let numbers = [1, 2, 3, 4, 5];
//             0  1  2  3   4
// metodo join
console.log("Array original: " + numbers.join(", "));
// ('Array') (`array`) ("array: ", variavel.metodo())
// Recomendado: "" e acima de duas variaveis utilizar template string.

// adicionar um elemento no final da array
numbers.push(6)
console.log(numbers)

// remove ultimo elemento
numbers.pop()
console.log(numbers)

// adiciona um elemento no inicio da array
numbers.unshift(0)
console.log(numbers)

// remove um elemento no inicio da array
numbers.shift()
console.log(numbers)

// localiza posicao do elemento na array
let posicaoDois = numbers.indexOf(2)
console.log(posicaoDois)

// remove elemento atraves de uma determinada posicao
numbers.splice(1, 2)
console.log(numbers)