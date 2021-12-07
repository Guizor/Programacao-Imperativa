//Exercício 01
function conversor(pol) {
    return pol * 2.54
}
console.log(conversor(1));

//Exercício 02
function url(text) {
    return "https://www." + text + ".com.br"
}
console.log(url("rafael"));

//Exercício 03
function exclamacao(string) {
    console.log(string)
    return string + "!"
}
console.log (exclamacao("teste"));

//Exercício 04
function idadeDog(idade) {
    return idade * 7
}
console.log(idadeDog(3))

//Exercício 05
function valorDaHora(salario, horas) {
    return salario / horas
}
console.log(valorDaHora(500, 160))

//Exercício 06
function imc(peso, altura) {
    return peso / (altura*altura)
}
console.log(imc(100, 183))
console.log(imc(70, 172))
console.log(imc(70, 167))
console.log(imc(92, 175))

//Exercício 07
function capsLock(texto) {
    return texto.toUpperCase()
}
console.log(capsLock("beatriz"))

//Exercício 08
function tipo(x){
    return typeof x
}
console.log(tipo(2));

//Exercício 09
function circle(r){
    return 2 * Math.PI * r
}
console.log(circle(3))