const {MongoClient} = require('mongodb')
const url ='mongodb://localhost:27017'
const client  = new MongoClient(url)

const connectDB =async()=>{
    let result = await client.connect()
    let db =  result.db("MERN")
   return  db.collection("dataDB")

}

module.exports = connectDB