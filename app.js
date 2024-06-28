const http = require('http')

// app.get('',(req,res)=>{
//     res.send('<h1>Hello this is  Home page<h1>')
//  });
 
//  app.get('/about',(req,res)=>{
//     res.send('<input type=text placeholder="username"><br><button>Click me</Button>')
//  });
//  app.get('/help',(req,res)=>{
//     res.send([
//        {
//           name:"abdul samad",
//           email:"absamadchandio@gmail.com"
//        },
//        {
//           name:"abdul samad",
//           email:"absamadchandio@gmail.com"
//        },
//        {
//           name:"abdul samad",
//           email:"absamadchandio@gmail.com"
//        }, {
//           name:"abdul samad",
//           email:"absamadchandio@gmail.com"
//        }
//     ])
//  });


http.createServer((req,res)=>{
   res.write(JSON.stringify({name:'Abdul Samad',email:'absamadchandio@gmail.com'}));
   res.end()
}).listen(5000);