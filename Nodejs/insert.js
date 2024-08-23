const dbconnect = require('./mongodb')
const insert = async ()=>{
    let db = await dbconnect()
    let result = db.insertMany([
        {
            name:"16 pro",Company:"Apple"
        },
        {
            name:"14 pro",Company:"Apple"
        }
    ])
    console.log(result);
}

insert();
