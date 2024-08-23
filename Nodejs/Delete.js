const dbconnect = require('./mongodb')

const  deletData = async () =>{
    let db = await dbconnect()
    let result = await db.deleteOne({name:"16 pro"})
   if(result.acknowledged){
    console.log("Record deleted")
   }
} 
deletData()