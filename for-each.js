// funções callback: chamam outras funções dentro dela
// MÉTODO DO OBJETO ARRAY -ao contrário dos outros FOR
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// usar o nome do array + função forEach + parâmetro que vou CRIAR dentro do function: para usar ela dentro da definição do for
// function executada para cada elemtno dentro do array - não precisamos especificar
// não precisar especificar uma variável pra armazenar os elementos - nem especificar onde começa e onde termina
notas.forEach (function (nota) {
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);


// exemplos
const lista = [1, 2, 3, 4, 5];
let soma = 0;
 
lista.forEach(numero => soma += numero);
console.log(soma) //15


// ou ainda pode ser escrita:
lista.forEach(numero => {
    soma += numero
   });


// e ainda:
lista.forEach(function (numero) {
    soma += numero
   });

// O forEach() utiliza callbacks assim como map(), filter() e alguns outros métodos de array, o que facilita a utilização desses métodos em conjunto ou a troca de um para outro dependendo da necessidade do código ou de uma refatoração. Alguns guias de estilo de código desenvolvidos pela comunidade, como o famoso guia do AirBNB, indica preferencialmente o uso do forEach() no lugar do for…of para manter a consistência no estilo do código.