function mostrar(){
    let reader = new FileReader()
    //pegar a imagem selecionada
    let imagem = document.querySelector('#arquivo').files[0]

    //função callback
    reader.onloadend = function(){
        //criando tag imagem
        let img = document.createElement('img')
        //resultado da imagem
        img.src = reader.result
        img.width = 200
        //colocando o conteudo na tela
        document.querySelector('.area').appendChild(img)
    }
    reader.readAsDataURL(imagem)
}