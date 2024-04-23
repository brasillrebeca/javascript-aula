const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// para usar o slice - criar outras variável que receba a divisão
const parteNumeros = numeros.slice(3, 8);
console.log('Parte dos números: ', parteNumeros);


const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'kiwi', 'pessego');
console.log(frutas);
