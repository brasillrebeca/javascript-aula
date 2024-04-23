const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]; // o array tem DOIS elementos - não importa se são 2 arrays

console.log(lista);

// para acessar um elemento que está dentro: passar o valor do índice do array que quero acessar e depois o índice do elemento
console.log(
    `Aluna da posição 1: ${lista[0][1]}.
    a nota dessa aluna é ${lista[1][1]}`
);
