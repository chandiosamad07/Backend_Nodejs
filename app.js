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



// const express = require ('express')
// const reqFilter =require('./middleware')
// const app = express()
// const route = express.Router()


// route.use(reqFilter)
// app.get('',(req,res)=>{
//    res.send('Hello this is  Home page')
// });

// route.get('/about',(req,res)=>{
//    res.send('This is about page')
// });
// route.get('/help',(req,res)=>{
//    res.send('This is Help page')
// });

// app.use('/',route)

// app.listen(5000)
http.createServer((req,res)=>{
   res.write(JSON.stringify({name:'Abdul Samad',email:'absamadchandio@gmail.com'}));
   res.end()
}).listen(5000);