//valor do PI
let valor = Math.PI
document.querySelector('.demost1').innerHTML =`Esse é o Numero do PI <strong>${valor}</strong>`

//arredondar o valor  de acordo com o o número 
//se acima de 0.5 vai pra o numero proximo ou menos 0.5 vai pro anterior
let valor2 = Math.round(4.45)
document.querySelector('.demost2').innerHTML = `O valor a menos depois da virgula é <strong>${valor2}</strong>`

//arrendondar a cima de 0.5
let valor3 = Math.round(4.65)
document.querySelector('.demost3').innerHTML = `o valor menor que .5 é <strong>${valor3}</strong>`

//floor arredonda sempre pra baixo
let valor4 = Math.floor(5.68)
document.querySelector('.demost4').innerHTML = `o floor sempre arredonda pra baixo <strong>${valor4}</strong>`

//ceil arredonda pra cima
let valor5 = Math.ceil(5.02)
document.querySelector('.demost5').innerHTML =`o ceil sempre arredonda pra cima <strong>${valor5}<strong>`

//valor absoluto ou positivo 
let valor6 = Math.abs(-589.2235)
document.querySelector('.demost6').innerHTML =`o valor absoluto do número é <strong>${valor6}</strong>`

//min busca o menor número na lista 
let valor7 = Math.min(7,8,1,9,6,-1)
document.querySelector('.demost7').innerHTML = `O menor valor entre os números é ${valor7}`

//max busca o maior número na lista
let valor8 = Math.max(8,9,100,-100,5)
document.querySelector('.demost8').innerHTML = `o maior valor na lista de números é ${valor8}`

//random retorna números aleatórios
function mostrar(){
let valor9 =Math.floor(Math.random() * 100)
document.querySelector('.demost9').innerHTML = `o valor aleatório é ${valor9}`
}
//setInterval(mostrar, 2000)