const {MongoClient} = require('mongodb');
const url ='mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbconnect(){

   let result = await client.connect();
   let db= result.db('E-com');
      return db.collection('Product');
   // let response = await collection.find({}).toArray();
}

module.exports = dbconnect;