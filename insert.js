const dbconnect = require('./mongodb')

const insert = async ()=>{
    const db= await dbconnect();
    const result= db.insertMany(
        [
            {name:'Note 6' , brand:'vivo',price:250},
            {name:'Note 7' , brand:'vivo',price:25000},
        ]
        );
    
}

insert();