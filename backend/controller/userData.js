const user = require('../model/user');
//const jwt=require("jsonwebtoken")
const sign= async (req,res)=>{
    try {
        const {email,name}=req.body
        const allready= await user.findOne({email})
        if(!allready)
        {
        const account= await user.create(req.body)
        console.log(req.body)
        res.status(201).json("Created")
        console.log(account.id)
        }
        else
        {
            console.log("already created")
            res.send("already created")
        }
       } 
    catch (error) 
    {
        res.send(error)
    }
}
const login = async (req,res)=>{
    try 
    {
        const {email,password}=req.body
        const check= await user.findOne({email,password})
        if(!check)
         { 
            console.log(email,password)
            console.log("Not found")
            res.sendStatus(404).send("Logged in")
        }
        else
        {   console.log(req.body)
            /* jwt.sign({check},"secretkey",{expiresIn:'30s'},(err,token)=>{
                console.log(token)
                res.send(token)
            }) */
           res.sendStatus(200)
        }
    } 
    catch (error) 
    {
        console.log(error)      
    }
}
module.exports={sign,login}