const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
app.use(cors())
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public')); // 'public' is the directory where your images are stored.
app.use(express.json())
require("dotenv").config()
const configDb=require("./src/configDb/configDb")
configDb()

app.listen(process.env.PRODUCTION_URL || process.env.DEVELOPMENT_PORT,()=>{
    console.log("server connected on port",process.env.PRODUCTION_URL || process.env.DEVELOPMENT_PORT)
})