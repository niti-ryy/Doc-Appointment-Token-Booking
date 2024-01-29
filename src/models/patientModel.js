const mongoose=require("mongoose")
const {Schema,model}=mongoose

const patientSchema=new Schema({
    name:{type:String},
    age:{type:Number},
    gender:{type:String,enum:["Male","Female"]},
    phone:{type:String},
    visiting_Reason:{type:String},
    appointments:[mongoose.Types.Schema.ObjectId],
    email:{type:String},
    notifications: [{ type: mongoose.Types.ObjectId, ref: 'Notification' }],
})

const Patient=model("Patient",patientSchema)

module.exports={Patient,patientSchema}