const mongoose = require('mongoose');
 const userSchema= mongoose.Schema({
    packages:{
        type:String
    }
 })

 module.exports=mongoose.model("packages",userSchema)