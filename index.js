const express = require ('express')
const app = express()

const reqFilter=(req,res,next)=>{
   if(!req.query.age){
      res.send("please provide age")
   }
   else{
      next()
   }
   
}

// app.use(reqFilter)
app.get('',(req,res)=>{
   res.send('Hello this is  Home page')
});

app.get('/about',reqFilter,(req,res)=>{
   res.send('This is about page')
});
app.get('/help',(req,res)=>{
   res.send('This is Help page')
});


app.listen(5000)