const mongoose=require("mongoose");

const configDb=async()=>{
    try{
        const db=await mongoose.connect(process.env.MONGODB_URI_ATLAS || process.env.MONGODB_URI)
        console.log("db connected successfully")
    }catch(e){
        console.log("failed to connected to db")
    }
}

module.exports=configDb