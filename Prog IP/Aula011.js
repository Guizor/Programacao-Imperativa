let filme = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
let filme2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

//EX 1
function maiuscula(array){
    for(let i=0; i < array.length; i++){
        array[i] = array[i].toUpperCase();
    }
    return array
};

console.log(maiuscula(filme))

//EX 2
function trocaElementos(filme, array2){
    while(array2.length > 0){
        filme.push(array2.pop().toUpperCase());
    }

    //let qtd = array2.length
    //for (let i = 0; i < qtd; i++){
    //    filme,.push(array2.pop().toUpperCase())
    //}

    return filme;
}

console.log(trocaElementos(filme, filme2))

//EX 3
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararNotas(array, array2){
    let notasComparadas = [];

    for (i=0; i < array.length; i++){
        notasComparadas[i] = array[i] === array2[i]
    }

    return notasComparadas
}

console.log(compararNotas(asiaScores, euroScores))