// Crie uma função que receba dois arrays e os concatene em um único array

// primeiro declaro a função - sem esquecer do return

// dois jeitos de fazer
function juntos(inverno, temperaturasMinimas) {
    return inverno.concat(temperaturasMinimas);
}


// segunda parte do exercício 
const inverno = ['Canada', 'Russia', 'Groelandia'];
const temperaturasMinimas = [-40, -20, -10];
// criar a variável que recebe a concatenação
const juntos = inverno.concat(temperaturasMinimas);

console.log(juntos);
