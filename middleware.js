module.exports = reqFilter=(req,res,next)=>{
    if(!req.query.age){
       res.send("please provide age")
    }
    else{
       next()
    }
    
 }