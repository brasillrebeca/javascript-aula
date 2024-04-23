const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel'];

// concat() é um método útil quando NÃO se deseja ALTERAR o ARRAY ORIGINAL
// Caso isso não seja necessário, considere utilizar push() ou splice()
const salasUnificadas = salaJS.concat(salaPython);
console.log(salasUnificadas);


// uando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, NÃO VAI EXTRAIR os elementos de arrays que estejam ANINHADOS. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.
const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])
 
console.log(arrayConcat)
console.log(arrayOriginal)
/*
[ 50, 60, 70, 80, [ 90, 100 ] ]
[ 50, 60, 70 ]
*/
