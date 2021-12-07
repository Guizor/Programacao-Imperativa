function podeSubir(altura, acompanhado){
    if(altura >= 1.4 && altura< 2){
        console.log('Acesso autorizado')
        return true
    } else if(altura < 1.4 && altura >=1.2 && acompanhado == true){
        console.log('Acesso autorizado mediante acompanhante')
        return acompanhado
    }else if(altura < 1.2){
        console.log('Acesso negado')
        return false
    }
}

podeSubir(1.3, true)