const express = require('express')
const mongodb = require('mongodb')
const app = express()
const dbconnect = require('./mongodb')

app.use(express.json())

app.get('/Getdata',async (req,res)=>{
    let data = await dbconnect();
    let result = await data.find().toArray();
    res.send(result)
})

app.post('/',async(req,res)=>{
    let data = await dbconnect();
    let result = await data.insertOne(req.body);
    console.log(result)
    res.send(result)
})

app.put('/',async(req,res)=>{
    let data = await dbconnect();
    let result = await data.updateOne({name:req.params.name},{$set: req.body})
    res.send(result)
})

app.delete('/:id',async (req,res)=>{
    let data = await dbconnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId (req.params.id)})
    console.log(result)
    res.send("done")
})

app.listen(5000)