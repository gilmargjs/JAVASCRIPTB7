async function inserirPost(){
    document.querySelector('.demost').innerHTML = "carregando... "
    //requisição
    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        //stringify converte de json para string 
        body:JSON.stringify({
            title:"Titulo de teste",
            body:"corpo de testes",
            userid:4
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    //resultado
    let json = await req.json()
    console.log(json)
}