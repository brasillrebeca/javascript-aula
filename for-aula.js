const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0  // inicializando a variável

for (let valor of notas) {
    somaDasNotas += valor;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);


// formas de aplicar os dois tipos de for para um mesmo problema
// com for clássico
const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

for (let i = 0; i < precos.length; i++) {
 precos[i] = precos[i] * desconto;
}

console.log(precos);


// com for of
const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

for (let preco of precos) {
 preco = preco * desconto;
}

console.log(precos);

// mais possibilidades com o for:  decremento
const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}


// números pares
const numerosPares = [];
 
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
 
console.log(numerosPares);

// procurar explicação no chat GPT
const lista = [1, 2, 3, 4, 5];
 
for (let i = 0, j = 0; i < lista.length; i++, j++) {
 console.log(lista[i] + j); 
}



