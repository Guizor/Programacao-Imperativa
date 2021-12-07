//Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1. Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:

let espectadores = [
    { idade: 18, opiniao: 2 },
    { idade: 19, opiniao: 2 },
    { idade: 20, opiniao: 3 },
    { idade: 21, opiniao: 2 },
    { idade: 41, opiniao: 3 },
    { idade: 23, opiniao: 1 },
    { idade: 24, opiniao: 1 },
    { idade: 25, opiniao: 3 },
    { idade: 26, opiniao: 2 },
    { idade: 17, opiniao: 1 },
    { idade: 28, opiniao: 2 },
    { idade: 29, opiniao: 3 },
    { idade: 30, opiniao: 3 },
    { idade: 40, opiniao: 1 },
    { idade: 32, opiniao: 2 }
 ];
 
 // 1. calcular a média das idades das pessoas que responderam ótimo
 let opiniaoOtimo = espectadores.filter(function(espectador){
    return espectador.opiniao == 3
 });
 
 let totalEspectadoresOtimo = opiniaoOtimo.length;
 
 let idadeEspectadoresOtimo = opiniaoOtimo.reduce(function (acumulador, item){
    // console.log('acumulador', acumulador)
    // console.log('item', item.idade)
    return item.idade + acumulador
 }, 0)
 
 const mediaIdades = (idadeEspectadoresOtimo/totalEspectadoresOtimo)
 
 //console.log(mediaIdades);
 
 // 2. calcular a quantidade de pessoas que responderam regular
 let opiniaoRegular = espectadores.filter(function(espectador){
    return espectador.opiniao == 1
 });
 
 let totalRegular = opiniaoRegular.length;
 
 // console.log(totalRegular);
 
 // 3.calcular a porcentagem de pessoas que responderam bom entre todos os espectadores analisados
 let opiniaoBom = espectadores.filter(function(espectador){
    return espectador.opiniao == 2
 });
 
 let totalBom = opiniaoBom.length;
 let totalEspectadores = espectadores.length
 let percentualBom = (100* totalBom)/totalEspectadores
 
 //console.log(percentualBom, "%")