const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./db/connectdb');
const { json } = require('body-parser');
const cors = require('cors');
const app=express()
app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded())
app.use("/",require("./routes/useroutes"))
connectDb()

const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log("started")
})

