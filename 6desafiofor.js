// Agora, se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro. Tente executar isso no código para praticar o que aprendeu ao longo da aula.

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1, notas2, notas3]
 
let media = 0


// Com a matriz criada, vamos iterar sobre os elementos. Mas não poderemos usar o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um array e não mais um valor numérico. Por isso usaremos outro for para acessar esse array.

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      media += notasGerais[i][j]/notasGerais[i].length;  // o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i]
    }
}

// para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas, 8+7+9 e dividir pela quantidade de arrays em notasGerais
media = media/notasGerais.length
 
console.log(media)

  