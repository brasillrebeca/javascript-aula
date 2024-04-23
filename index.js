//  arrays esparsos (sparse arrays)
const arrayVazia1 = [];
 
console.log(arrayVazia1)
console.log(arrayVazia1.length)


// O JavaScript manteve as posições vazias e adicionou o
// 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento 
const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)    // [ <3 empty items>, 50 ]
console.log(arrayVazia.length)
