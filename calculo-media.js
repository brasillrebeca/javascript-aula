//const nota1 = 10;
//const nota2 = 6.5;
//const nota3 = 8;
// const nota4 = 7.5;

// chaves de um objeto e os elementos são armazenados sequencialmente na memória, conforme são adicionados ao array
// acessar rapidamente os elementos usando seus índices correspondentes
const notas = [10, 6.5, 8, 7.5];

//const media =(nota1 + nota2 + nota3 + nota4) / 4;

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);
console.log(notas.lenght)