const mongoose=require('mongoose');
const {Schema,model}=mongoose

const appointmentSchema=new Schema({
    clinicName:{type:mongoose.Types.Schema.ObjectId,ref:"Clinic"},
    patientName:{type:mongoose.Types.Schema.ObjectId,ref:"Patient"},
    date:{type:Date},
    time:{type:String},
    appointment_status:{type:String,enum:["started","complete","cancelled"]},
    paymentStatus:{type:String,enum:["pending","complete","failed"],default:"pending"}
})