//pessoa: sexo & altura
//array: conjunto de pessoas

const pessoas = [{
    "sexo": "F",
    "nome": "Abigael Natte",
    "altura": 1.61
 },
 {
    
    "sexo": "M",
    "nome": "Ramon Connell",
    "altura": 1.75
 },
 {
    
    "sexo": "M",
    "nome": "Jarret Lafuente",
    "altura": 1.55
 },
 {
    
    "sexo": "F",
    "nome": "Ansel Ardley",
    "altura": 1.67
 },
 {
    
    "sexo": "F",
    "nome": "Jacki Shurmer",
    "altura": 1.75
 },
 {
    
    "sexo": "M",
    "nome": "Jobi Mawtus",
    "altura": 1.88
 },
 {
    
    "sexo": "M",
    "nome": "Thomasin Latour",
    "altura": 1.67
 },
 {
    
    "sexo": "F",
    "nome": "Lonnie Verheijden",
    "altura": 1.63
 },
 {
    
    "sexo": "M",
    "nome": "Alonso Wannan",
    "altura": 1.92
 },
 {
    
    "sexo": "F",
    "nome": "Bendite Huggett",
    "altura": 1.80
 }
 ]
 
 //                             calcular a maior e a menor altura do grupo
 pessoas.sort(function (pessoa1, pessoa2) {
    return pessoa1.altura - pessoa2.altura
 })
 
 const menorAltura = pessoas[0].altura;
 
 // console.log(pessoas)
 // console.log('A menor altura do grupo é', menorAltura)
 
 pessoas.sort(function (pessoa1, pessoa2) {
    return pessoa2.altura - pessoa1.altura
 })
 
 const maiorAltura = pessoas[0].altura;
 
 // console.log(pessoas)
 // console.log('A maior altura do grupo é', maiorAltura)
 
 //                        calcular a média de altura das mulheres
 
 // let alturaMulheres = 0
 // let totalMulheres = 0
 // let totalHomens = 0
 
 pessoas.forEach(function (pessoa) {
   if (pessoa.sexo === 'F') {
     totalMulheres += 1
     alturaMulheres += pessoa.altura
   } else {
     totalHomens += 1
   }
 })
 
 // let mediaAlturaMulheres = (alturaMulheres / totalMulheres).toFixed(2)
 
 // console.log(`A média de altura das mulheres é ${mediaAlturaMulheres}`)
 
 let listarMulheres = pessoas.filter(function (pessoa){
    return pessoa.sexo === 'F'
 })
 
 let totalMulheres = listarMulheres.length;
 
 let alturaMulheres = listarMulheres.reduce(function (acumulador, item){
    console.log('acumulador', acumulador)
    console.log('item', item.altura)
    return item.altura + acumulador
 }, 0)
 
 // console.log(alturaMulheres.toFixed(2));
 
 const mediaAltura = (alturaMulheres/totalMulheres).toFixed(2)
 // console.log(mediaAltura)
 
 //                          calcular numero de homens
 
 let listarHomens = pessoas.filter(function (pessoa){
    return pessoa.sexo === 'M'
 })
 
 let totalHomens = listarHomens.length;
 //console.log('Total Homens', totalHomens)