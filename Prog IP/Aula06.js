//parte 1
function adicionar(x, y){
    return x+y
};

function subtrair(x, y){
    return x-y
};

function multiplicar(x, y){
    return x * y
};

function dividir(x, y){
    return x / y
};

//parte 2
console.log('*Início dos Testes*');

console.log('adição', adicionar(5, 4));
console.log('subtração', subtrair(9, 2));
console.log('multiplicação', multiplicar(5, 7));
console.log('divisão', dividir(18, 3));
console.log('divisão com 0', dividir(3, 0));

//parte 3
function quadradoDoNumero(a){
    return multiplicar(a, a)
};
console.log(quadradoDoNumero(2));

function mediaDeTres(a, b, c){
    const soma1 = adicionar(a, b)
    const soma2 = adicionar(soma1, c)
    return dividir(soma2, 3)
};
console.log('média', mediaDeTres(3, 3, 3));

function calculaPorcentagem(n, p){
    const multiplicacao = multiplicar(n, p);
    const porcentagem = dividir(multiplicacao, 100);
    return porcentagem;
};
console.log(calculaPorcentagem(300, 15));

function geradordePorcentagem(a, b){
    const multiplicacao = multiplicar(a, 100);
    const porcentagem = dividir(multiplicacao, b)
    return porcentagem
}

console.log(geradordePorcentagem(2, 200))