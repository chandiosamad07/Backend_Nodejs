const dbconnect = require('./mongodb')

const updateData = async () =>{
    let db = await dbconnect();
    let result = db.updateOne({name:'hot 10'},{
        $set:{name:'13 pro'}})
}

updateData()