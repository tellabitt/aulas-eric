let number = prompt("Digite um número: ");

if (isNaN(parseInt(number))) {
  alert("Digite um numero");
} else {
  let resultado = number % 2 === 0 ? "par" : "impar";

  alert(`O numero ${number} é ${resultado}`);
}
