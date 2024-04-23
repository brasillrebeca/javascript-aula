const notas = [10, 6.5, 8, 7, 6];

// um outro método para editar arrays
// map retorna um array com os resultados - por isso precisa ser guardado em outra variável
// operador ternário trabalha com:
// => é uma arrow function
// 1) verificação que retorna true ou false: nota + 1 >= 10
// 2) ? 10: SE for 10
// 3) retorna: nota + 1
const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas);