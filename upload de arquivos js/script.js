async function enviar(){
     let arquivo = document.querySelector('#arquivo').files[0]
     
     let body = new FormData()
     body.append('titulo','bla bla bla')
     body.append('arquivo',arquivo)

     let req = await fetch('https://wwww.meusite.com.br/opload',{
          method:'POST',
          body:body,
          headers:{
               'content-Type':'multipart/form-data'
          }
     })
}