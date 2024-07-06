const dbconnect = require('./mongodb')
// dbconnect()
//   .then((collection) => {
//     return collection.find({}).toArray(); // Correctly call toArray()
//   })
//   .then((data) => {
//     console.warn(data);
//   })

const main = async ()=>{
   let data = await dbconnect();
   data = await data.find().toArray();
   console.warn(data)
}

main();