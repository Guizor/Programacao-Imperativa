const contaBancaria = [
    {
        "numero": "5486273622",
        "tipo": "Conta Corrente",
        "saldo": "27771",
        "titular": "Abigael Natte"
    },
    {
        "numero": "1183971869",
        "tipo": "Conta Poupança",
        "saldo": "8675",
        "titular": "Ramon Connell"
    },
    {
        "numero": "9582019689",
        "tipo": "Conta Poupança",
        "saldo": "27363",
        "titular": "Jarret Lafuente"
    },
    {
        "numero": "1761924656",
        "tipo": "Conta Poupança",
        "saldo": "32415",
        "titular": "Ansel Ardley"
    },
    {
        "numero": "7401971607",
        "tipo": "Conta Poupança",
        "saldo": "18789",
        "titular": "Jacki Shurmer"
    },
    {
        "numero": "630841470",
        "tipo": "Conta Corrente",
        "saldo": "28776",
        "titular": "Jobi Mawtus"
    },
    {
        "numero": "4223508636",
        "tipo": "Conta Corrente",
        "saldo": "2177",
        "titular": "Thomasin Latour"
    },
    {
        "numero": "185979521",
        "tipo": "Conta Poupança",
        "saldo": "25994",
        "titular": "Lonnie Verheijden"
    },
    {
        "numero": "3151956165",
        "tipo": "Conta Corrente",
        "saldo": "7601",
        "titular": "Alonso Wannan"
    },
    {
        "numero": "2138105881",
        "tipo": "Conta Poupança",
        "saldo": "33196",
        "titular": "Bendite Huggett"
    }
]

module.exports = contaBancaria



//Alunos: Fabrina, Moises, Alisson Souza, Guilherme Pereira

const contas = require('./aula15-2-ex');
let contasBancarias = [];

function Conta(numero, tipo, saldo, titular){
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
};

function addConta(array, array2){
    for(i = 0; i<array.length; i++){
        array2.push(new Conta(array[i].numero, array[i].tipo, array[i].saldo, array[i].titular))
    }
    return array2
}

addConta(contas, contasBancarias)

const banco = {
    clientes: contasBancarias,
    consultarCliente: function consultarCliente(titular){
        for(i = 0; i<this.clientes.length; i++){
            if(titular == this.clientes[i].titular){
                return 'Cliente', this.clientes[i].titular
            }else{
                return 'Cliente inexistente'
            }
        }
    }
}

console.log(banco.consultarCliente('Moises'))