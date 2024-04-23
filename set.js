// remover nomes repetidos da lista
// usando set - parece com o array, ams não tem os método do array(tipo push, pop...) - ele forma listas únicas, semrepetir elementos
// como o set não é array, para transformar - usa função de espalhamento
const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

/*
const nomesAtualizados = new Set(nomes);
const listaNomesAtualizados = [...nomesAtualizados];
*/
// reduzindo a expressão:
// nomeia a constante + passa a função new Set + e onde ela vai agir
const listaNomesAtualizados = [...new Set(nomes)];

console.log(listaNomesAtualizados);