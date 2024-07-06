const dbconnect = require('./mongodb');

const updateData = async() =>{
    let data= await dbconnect();
    let result = await data.updateOne(
        {name:"Note 7"},
        {$set:{name:'Note  7 Pluse'}}
    )
    console.warn(data);
} 

updateData();