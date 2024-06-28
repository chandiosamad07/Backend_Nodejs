const http = require('http')

http.createServer((req,res)=>{
    res.write("Hello i am abdul samad");
    res.end()
}).listen(5000);