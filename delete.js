const dbconnect =  require('./mongodb');

const deleteData = async()=>{
    let data = await dbconnect();
    let result = await data.deleteMany({
        name:'Note 7'
    })
    console.warn(result)
}

deleteData();