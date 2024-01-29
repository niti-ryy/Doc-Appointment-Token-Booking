const mongoose=require("mongoose")
const {Schema,model}=mongoose

const ClinicSchema=new Schema({
    clinicName:{type:"string"},
    address:{type:"string"},
    city:{type:"string"},
    state:{type:"string"},
    zip:{type:"string"},
    phone:{type:"string"},
    doctor_name:{type:"string"},
    qualification:{type:"string"},
    specialist:{type:"string",enum:["Cardiologist","ENT","Pediatrics","Ophthalmology","Gastroenterology"]},
    doctor_Image:{type:"string"},
    clinic_Image:{type:"string"},
    email:{type:"string"},
    isAvilable:{type:"boolean"},
    avilability:[String],
    token_Count:{type:Number,default:0}
})

const Clinic=model("Clinic",ClinicSchema)