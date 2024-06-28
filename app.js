const http = require('http')

http.createServer((req,res)=>{
   res.write(JSON.stringify({name:'Abdul Samad',email:'absamadchandio@gmail.com'}));
   res.end()
}).listen(5000);