function loadPost() {
    document.querySelector('.demost').innerHTML = "carregando ... "
    fetch('https://jsonplaceholder.typicode.com/posts')
        //resposta
        .then(function (resultado) {
            //retorno de convertido pra json
            return resultado.json()
        })
        //enviando a resposta para a pagina
        .then(function(json){
            document.querySelector('.demost').innerHTML = `O Total de Post é <strong>${json.length}</strong> posts`        })

        .catch(function (error) {
                console.log('Deu Problema!')
        })

}