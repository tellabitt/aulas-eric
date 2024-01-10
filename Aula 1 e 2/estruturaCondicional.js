// Estruturas condicionais em JS

// if, else if, else, switch case

// Estrutura if
let temperatura = 25;

if (temperatura > 30) {
  console.log("Está quente");
}
// if(temperatura > 30) console.log("Está quente")

// estrutura if else

let idade = 18;

if (idade >= 18) console.log("Maior de idade");
else console.log("Menor de idade");

// Operador ternario
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";

// else if = quando houver mais de uma condicao
let hora = 14;

if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa Tarde!");
} else {
  console.log("Boa noite!");
}

// switch case

let diaDaSemana = 3;
var mensagem;

switch (diaDaSemana) {
  case 1:
    mensagem = "Domingo";
    break;
  case 2:
    mensagem = "Segunda-feira";
    break;
  case 3:
    mensagem = "Terça-feira";
    break;
  default:
    mensagem = "Dia desconhecido";
}
