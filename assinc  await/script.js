
async function loadPost() {
    document.querySelector('.demost').innerHTML = "carregando ... "

    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json()
    montarBlog(json)
}
        //forma sem async e await

        // .then(function (resultado) {
        //     //retorno de convertido pra json
        //     return resultado.json()
        // })
        // //enviando a resposta para a pagina
        // .then(function (json) {
        //     montarBlog(json)

        // })
        //     .catch(function (error) {
        //         console.log('Deu Problema!')
        //     })

//função para montar html
function montarBlog(lista) {
    let html = ' '
    //lista montando o html com os titulos e o body
    for (i in lista) {
        html += `<h3>${lista[i].title}</h3>`
        html += ` ${lista.body} "<br/>"`
        html += "<hr/>"
    }
    //enviando para a pagina index o conteudo
    document.querySelector('.demost').innerHTML = html

}