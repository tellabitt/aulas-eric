const fakeServer = [
  { nome: "Alice", idade: 25, profissao: "Engenheira" },
  { nome: "Bob", idade: 30, profissao: "Designer" },
  { nome: "Charlie", idade: 22, profissao: "Dev" },
  { nome: "Ana", idade: 33, profissao: "Arquiteto" },
  { nome: "Fulano", idade: 35, profissao: "Medico" },
];

// exemplo 1
fakeServer.map((element) => console.log(element.nome));

// exemplo 2
fakeServer.map((element, key) => {
  console.log("Nome: ", element.nome);
  console.log("iteracao: ", key);

  // execucao de mais de uma funcao
});
