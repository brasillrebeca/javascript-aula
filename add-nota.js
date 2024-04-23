// uma const significa que um valor não pode ser reatribuído
// porém um array, mesmo que atribuído a uma const, pode ser manipulado (essa propriedade se sobresai)
const notas = [10, 6, 8];

// funções prontas para modificar o próprio array - invés de outros métodos que geram um novo array baseado no original
// método/função para acrescentar elemento(chave) em um array
notas.push(7);
//excluir o último elemento - não precisa de parâmetro, pq o array sempre manipula o último 
notas.pop();

// como o push tá acima, o JS já considera o array com elementos/chaves  
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// funções prontas para números
console.log(media.toFixed(2)); // arredondar para 2 casas decimais


// valores considerados falsos, ao serem convertidos para booleanos 
/*
Zero: O valor numérico zero (0);
String vazia (''): Uma string sem nenhum caractere;
NaN: Representa "Not-A-Number", frequentemente resultante de operações matemáticas inválidas;
null: Indica a ausência intencional de um valor ou referência nula;
undefined: Indica uma variável que foi declarada, mas ainda não teve um valor atribuído.
*/

const arrayVazio = [];
const arrayNaoVazio = [1, 2, 3];

console.log(Boolean(arrayVazio)); // Saída: true - Mesmo sendo um array vazio, é "truthy"
console.log(Boolean(arrayNaoVazio)); // Saída: true - Um array com elementos também é "truthy"
