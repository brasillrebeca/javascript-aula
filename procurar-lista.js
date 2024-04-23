const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

// função para procurar um aluno específico dentro da lista
// usar método FUNCTION - dizer o que ela vai fazer - passar o parâmetro 
// a função só retorna um valor de média, SE o ALUNO fizer parte da lista 
// como LISTA é um array de duas dimensões, preciso especificar em qual dos arrays quero fazer a busca - passar índice
// SE a lista incluir o aluno procurado - preciso do índice da posição dele dentro do array - uso esse mesmo índice para buscar a média, no outro array
// sempre cirar variáveis para receber cada valor e reutilizá-lo
function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    }   else {
        console.log(`Estudante não existe na lista`);
    }
}

exibeNomeENota(`Juliana`);
exibeNomeENota(`Vini`);