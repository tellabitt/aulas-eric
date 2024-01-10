// Blocos de repeticao em JS

// tabuada - tradicional

let tabuada = 10;
console.log(tabuada * 1);
console.log(tabuada * 2);
console.log(tabuada * 3);
console.log(tabuada * 4);
console.log(tabuada * 5);

// estrutura com for - quando se conhece o numero exato de iteracoes
// assinatura for(variavel de controle, condicao, incremento ou decremento)
for (let i = 1; i <= 10; i++) {
  console.log(10 * i);
}

// estrutur while - quando não se conhece a condicao de repeticao antecipadamente

let j = 1;
while (j <= 10) {
  console.log(10 * j);
  j++;
}

// estrutura do-while - executa-se ao menos uma vez

let k = 1;

do {
  console.log(k);
  k++;
} while (k <= 5);

// exemplo de loop com break
for (let l = 1; l <= 5; l++) {
  if (i === 5) {
    break;
  }
}

// continue = pula para a próxima iteracao do loop

for (let m = 1; m <= 5; m++) {
  if (i === 3) {
    continue;
  }
}

// iteracao com arrays

let frutas = ["maca", "banana", "morango"];

for (let n = 0; n < frutas.length; n++) {
  console.log(frutas[n]);
}
