const dbconnect =  require('./mongodb');

const deleteData = async()=>{
    let data = await dbconnect();
    let result = await data.deleteOne({
        name:'Note 6'
    })
    console.warn(result)
}

deleteData();