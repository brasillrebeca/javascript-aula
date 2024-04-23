const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

// desestruturando - eu posso criar uma variável que desmembre o array biderecional - para acessar os elementos com mais facilidade dentro da função
function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        
        const [alunos, medias] = lista;
                    // lista[0]
        const indice = alunos.indexOf(aluno);
                    // lista[1]
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    }   else {
        console.log(`Estudante não existe na lista`);
    }
}

exibeNomeENota(`Juliana`);
exibeNomeENota(`Vini`);