const http = require('http')


const server = http.createServer((req,res)=>{

    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    res.write("Hello this is server")
    res.end()
})

server.listen(3000,()=>{
    console.log("App is runing")
})