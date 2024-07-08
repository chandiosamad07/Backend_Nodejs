const express = require('express');
const dbconnect = require('./mongodb');
const app =express()

app.use(express.json());

app.get('/',async (req,res)=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data)
    res.send(data)
})

app.post('/',async (req,res)=>{
    let data = await dbconnect();
    let result = await data.insertOne(req.body)
    res.send(result)

})

app.put('/:name', async(req,res)=>{
    let data = await dbconnect();
    let result = await data.updateOne({
        name:req.params.name
    },{
        $set:req.body
    }
)
res.send(result)
})

app.listen(5000)