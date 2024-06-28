const express = require ('express')
const app = express()

// app.get('',(req,res)=>{
//    res.send('Hello this is  Home page')
// });

// app.get('/about',(req,res)=>{
//    res.send('This is about page')
// });
// app.get('/help',(req,res)=>{
//    res.send('This is Help page')
// });

app.get('',(req,res)=>{
      res.send('<h1>Hello this is  Home page<h1>')
   });
   
   app.get('/about',(req,res)=>{
      res.send('<input type=text placeholder="username"><br><button>Click me</Button>')
   });
   app.get('/help',(req,res)=>{
      res.send([
         {
            name:"abdul samad",
            email:"absamadchandio@gmail.com"
         },
         {
            name:"abdul samad",
            email:"absamadchandio@gmail.com"
         },
         {
            name:"abdul samad",
            email:"absamadchandio@gmail.com"
         }, {
            name:"abdul samad",
            email:"absamadchandio@gmail.com"
         }
      ])
   });

app.listen(5000)