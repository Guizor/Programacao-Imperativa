let numeros = [1, 2, 3, 4];

let dobro = numeros.map((item) => {
    return item * 2
});

//console.log(dobro);

let idades = [22, 25, 14, 19, 15];

let maiores = idades.filter(function(item){
    //console.log(item >= 18);
    return item >= 18
})

//console.log(maiores)

let soma = numeros.reduce(function(acumulador, item){
    return acumulador + item
})

//console.log(soma)

let paises = ['Brasil', 'Cuba', 'Russia', 'EUA'];

paises.forEach(function(item){
    console.log('Hello from', item)
});