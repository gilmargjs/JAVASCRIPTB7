function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log("pegando temperatura....")
        setTimeout(function(){
            resolve('40 na sombra')
        },2000)
    })
}

//usando a promise
console.log("codigo antes")
let temp = pegarTemperatura()


//destinando o resultado da promise
//quando o resultado é positivo

console.log("codigo durante")
temp.then(function(resultado){
    console.log("TEMPERATURA = "+resultado)
})


//retorno quando o resultado é negativo
temp.catch(function(error){
    console.log("eita deu erro!")
})

console.log("codigo depois")