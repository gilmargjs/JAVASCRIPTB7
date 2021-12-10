//variavel global
let time

//função para iniciar o setTimeOut
function comecar() {
    time = setTimeout(function() {
        document.querySelector('.demost').innerHTML = 'rodou'
    },2000)
}

//função para 
function parar() {
    clearTimeout(time)
}