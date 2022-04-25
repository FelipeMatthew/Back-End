// console.log("Hello world")

// Criar um servidor com node js

const http= require("http")
const port=2000
const htmlSobre= require('./ModuloSobre')
// const { hasUncaughtExceptionCaptureCallback } = require("process")

// Criar servidor
// Servidor vai ficar rodando incessantemente até dar ordem de parar

// Rota 1
// Requisição e resposta, serve para criar o servidor 
var sever= http.createServer((req,res,) =>{
    if(req.url == '/'){
        
        let htmlHome=
        `
            <html>   
            <head>
            <meta charset="utf-8">
            <title>Meu primeiro servidor</title>
            </head>

            <body>
            <a href="/" >Home</a>
            <a href="/sobre" >Sobre</a>
            <a href="/contato" >Contato</a>

            <h1>Sever 2000 de Felps</h1>

            </body>
            </html>      
        
        `
        res.end(htmlHome) //Mandando a resposta 

        // Criamos a pagina agora precisa mandar como resposta
    }else if(req.url==('/sobre')){
        res.end(htmlSobre)

    }
    else if(req.url==('/contato')){
        let htmlContato=
        `
            <html>   
            <head>
            <meta charset="utf-8">
            <title>Contato</title>
            </head>

            <body>
            <a href="/" >Home</a>
            <a href="/sobre" >Sobre</a>
            <a href="/contato" >Contato</a>

            <h1>Página de contato</h1>

            </body>
            </html>      
        
        `
        res.end(htmlContato) 
    }
    else{
        let htmlErro= 
        `
            <html>   
            <head>
            <meta charset="utf-8">
            <title>Erro</title>
            </head>

            <body>
            <a href="/" >Home</a>
            <a href="/sobre" >Sobre</a>
            <a href="/contato" >Contato</a>

            <h1>Opps...Erro</h1>

            </body>
            </html>      
        
        `
        res.statusCode=404
        res.end(htmlErro)
    }
    
} ) 
// Creat sever - 2 parametros 
// 
// Req - Requisição || / é a parte home 


// Inicaialização do servidor
sever.listen(port, 'localhost', () =>{
    console.log(`Servidor escutando na porta ${port}`)
    console.log('Pressione CTRL+C para encerrar')
})
// Listen - Escuta função 
// Ta perguntando se o servidor ta escutando a porta 3000
// Crase serve para informar diferentes tipos de dados, nesse caso o dado vai ser port



