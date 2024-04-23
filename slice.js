const listaEstudantes = ['Rebeca', 'Rodrigo', 'Cleide', 'Patrícia', 'Tobby'];

// usando o método slice para dividir o array
// o méotod recebe dois parâmetros: início e fim do corte(lembrando que não inclui o último elemento)
const sala1 = listaEstudantes.slice(0, listaEstudantes.lenght/2); // dividir o comprimento pela metade para criar outro array
const sala2 = listaEstudantes.slice(listaEstudantes.lenght/2);  // como gera um novo array, precisamos salvá-lo dentro da variável

console.log(sala1);
console.log(sala2);