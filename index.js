const express = require ('express')
const reqFilter =require('./middleware')
const app = express()
const route = express.Router()


route.use(reqFilter)
app.get('',(req,res)=>{
   res.send('Hello this is  Home page')
});

route.get('/about',(req,res)=>{
   res.send('This is about page')
});
route.get('/help',(req,res)=>{
   res.send('This is Help page')
});

app.use('/',route)

app.listen(5000)