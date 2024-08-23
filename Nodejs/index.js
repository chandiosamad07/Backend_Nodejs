const http = require('http');
const data = require('./data')
const db = require('./mongodb')


// async function main(){
//     let result = await db()
//     let data = await result.find({}).toArray()
//     console.log(data);
// }

// main();

async function Getdata(){
    let result = await db()
    let data = await result.find({}).toArray()
    console.log(data)
}

Getdata()
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html'); // Set Content-Type to 'text/html'
//     res.write('<h1>Hello</h1><p>Welcome to my Node.js server!</p>'); // Send HTML content
//     res.end()
// });


// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'application/json'})
//     res.write(JSON.stringify(data))
//     res.end();
// })
// const port = 5000;
// server.listen(port, () => {
//     console.log(`App is running on port ${port}`);
// });
