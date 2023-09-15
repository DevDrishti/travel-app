const handler = require("express-async-handler");

const jwt=require("jsonwebtoken")

const validate=handler(async(req,res,next)=>{
    let token
    let auth=req.headers.Authorization || req.headers.authorization
    if(auth&& auth.startsWith("Bearer"))
        token=auth.split(" ")[1]
    jwt.verify(token,"secretkey",(err,decoded)=>{
        if(err){
            res.status(401)
        }
        else{
            console.log(decoded)
        }
    })
    next()
})

module.exports=validate