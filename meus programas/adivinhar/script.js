
function analisar() {
    let div1 = document.querySelector('#div1').value
    let div2 = document.querySelector('#div2').value
    let div3 = document.querySelector('#div3').value
    let div4 = document.querySelector('#div4').value
    let div5 = document.querySelector('#div5').value
    let div6 = document.querySelector('#div6').value
lista1 = [div1,div2,div3,div4,div5,div6]
for(i in lista1){
    ret = lista1[1]
    console.log(ret)
    document.querySelector('.ret').innerHTML = ret
}
}


setTimeout(function mostrar() {
    let rt1 = Math.floor(Math.random() * 100)
    let rt2 = Math.floor(Math.random() * 100)
    let rt3 = Math.floor(Math.random() * 100)
    let rt4 = Math.floor(Math.random() * 100)
    let rt5 = Math.floor(Math.random() * 100)
    let rt6 = Math.floor(Math.random() * 100)

    let lista = [rt1, rt2, rt3, rt4, rt5, rt6]
    console.log(lista)

    document.querySelector('#res1').innerHTML = lista[0]
    document.querySelector('#res2').innerHTML = lista[1]
    document.querySelector('#res3').innerHTML = lista[2]
    document.querySelector('#res4').innerHTML = lista[3]
    document.querySelector('#res5').innerHTML = lista[4]
    document.querySelector('#res6').innerHTML = lista[5]
}, 2000)

