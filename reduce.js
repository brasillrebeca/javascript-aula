// com a média de todos os alunos de 3 salas, calcule a média geral de cada sala
const salasJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// se eu tenho que calcular uma coisa para cada array - melhor criar uma função que faça isso
// nomear a função - definir um parâmetro
function calculaMedia(listaDeNotas) {

    // sintaxe do reduce: 1º parâmetro: acumulador + elemento do array que está sendo iterado no momento
    // reduce recebe 2 parâmetros - a função + valor de início do acumulador
    // nomear uma variável + chamar o parâmetro da função + laço de repetições especiais que chama outra função: reduce
    /*
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    */
    // forma reduzida
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);
    // a function foi feita para calcular, por isso a const media e o return ficam dentro
    const media = somaDasNotas / listaDeNotas.lenght;
    return media;
}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));



//

const numeros = [43, 50, 65, 12]
 
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
 
console.log(soma) //170

/*
O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.
A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: o valor acumulado (acum) e o valor atual.
A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acc) não precisamos usar chaves e nem da palavra-chave return.
Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.
*/