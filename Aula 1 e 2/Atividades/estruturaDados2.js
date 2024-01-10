// fakeServer - simulando um banco de dados
let pessoas = [
  { nome: "Alice", idade: 25, profissao: "Engenheira" }, // linhas da tabela
  { nome: "Bob", idade: 30, profissao: "Designer" },
  { nome: "Charlie", idade: 22, profissao: "Dev" },
];

  pessoas.push({ nome: "Ana", idade: 30, profissao: "Designer"})

  // exibe
  console.log(pessoas)
    
  // acessa propriedade de um objeto na array
  console.log("Nome: ", pessoas[1].nome)
  console.log("Idade: ", pessoas[1].idade)
  console.log("Profissao: ", pessoas[1].profissao)

// Verifica tamanho array
console.log(pessoas.length)

// Filtra pessoas com idade superior a 25 anos
let maioresDe25 = pessoas.filter(element => element.idade > 25)
console.log(maioresDe25)

// transforma array em nova array de nomes

let nomes = pessoas.map(nomes => nomes.nome)
console.log(nomes)

