const express = require('express')
const mongodb = require('mongodb')
const app = express()
const dbconnect = require('./mongodb')

app.get('/',async (req,res)=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);

})

app.listen(5000)