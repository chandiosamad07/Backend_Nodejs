const {MongoClient} = require('mongodb');
const url ='mongodb://localhost:27017';
const client = new MongoClient(url);

async function getData(){
   try {
   let result = await client.connect();
   let db= result.db('E-com');
   let collection = db.collection('Product');
   let response = await collection.find({}).toArray();

   console.log('Fetching data from collection...');

   if (response.length > 0) {
     console.log('Data fetched successfully:', response);
   } else {
     console.log('No data found in the collection.');
   }
 } catch (error) {
   console.error('Error:', error);
 } 
}

getData();