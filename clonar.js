// se eu crio uma variável e atribuo a ela outra variável - ambas ficam com o mesmo valor - depois consigo alterar qualquer uma delas, separadamento, chamando o nome da variável a atribuindo um novo valor

const notas = [7, 7, 8, 9];
/* const novaListaNotas = notas; */

// a intenção era add o 10 só em uma das variáveis, porém não funciona - array se comportam diferente de dados primitivos(number,str, float)
/* novaListaNotas.push(10); */
// então usamos um outro tipo de operador (spread operator) para modificar arrays clonados

const novaListaNotas = [...notas, 10];
