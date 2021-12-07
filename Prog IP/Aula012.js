const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
    let pontosAlicia = 0;
    let pontosBob = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            pontosAlicia ++
        }else if(b[i] > a[i]){
            pontosBob ++
        }
    }
    
    if(pontosAlicia > pontosBob){
        console.log('Alice ganhou com', pontosAlicia, 'pontos')
    }else if(pontosBob > pontosAlicia){
        console.log('Bob ganhou com', pontosBob, 'pontos')
    }else{
        console.log('Empate')
    }
}

encontrarGanhador(alicia, bob)

//EXTRA

function digitalHouse(a, b){
    for(let i = 1; i < 101; i++){
        if(i%a == 0){
            console.log('Digital')
        }else if(i%b == 0){
            console.log('House')
        }else if(i%a == 0 && i%b == 0){
            console.log('Digital House')
        }
    }
}

digitalHouse(35,30)