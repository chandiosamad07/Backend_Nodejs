const http = require('http')


const server = http.createServer((req,res)=>{

    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    res.write("<h1>Hello this is server</h1>")
    res.end()
})

const port =5000
server.listen(port,()=>{
    console.log(`App is runing on port ${port}`)
})