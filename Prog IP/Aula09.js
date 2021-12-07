let nome = 'Guilherme Pereira';

console.log(nome.length);

console.log(nome.trim());
let nome2 = nome.trim();

console.log(nome2.split(','));

let alfabeto = ['A', 'B', 'C'];
alfabeto.push('D', 'E');
console.log(alfabeto)

let ultimoValor = alfabeto.pop();
console.log(alfabeto);
console.log(ultimoValor);

let primeiroValor = alfabeto.shift();
console.log(primeiroValor);
console.log(alfabeto);

alfabeto.unshift(ultimoValor);
console.log(alfabeto)

alfabeto.unshift('F', 'G');
console.log(alfabeto);

let strNome = alfabeto.join(' - ');
console.log(strNome);

let y = alfabeto.lastIndexOf("G");
console.log(y);

let x = alfabeto.includes("G");
console.log(x);