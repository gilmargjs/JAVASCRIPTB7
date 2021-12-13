//função para acionar onclick
function mostrar(){
    //pegando a o id da do input
    let imagem = document.querySelector('#imagem').files[0]

    //criando  tag imagem
    let img = document.createElement('img')

    //adicionando uma url a imagem
    img.src = URL.createObjectURL(imagem)

    //tamanho que a imagem vai aparecer 
    img.width = 200
    
    //enviando a imagem PARA a div
    document.querySelector('.area').appendChild(img)
}