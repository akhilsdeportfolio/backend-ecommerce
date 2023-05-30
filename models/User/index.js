const { Schema, default: mongoose } = require("mongoose");


const userSchema= new Schema({
    email:{type:String,isRequired:true},
    name:{type:String,isRequired:true},
    password:{type:String,isRequired:false},
    phoneNumber:{type:String,isRequired:false},
    isEmailVerified:{type:String,isRequired:false},
    authToken:{type:String,isRequired:false},
    id:{type:mongoose.Schema.Types.ObjectId}
},{timestamps:true})

const userModel= mongoose.model('users',userSchema);
module.exports=userModel;