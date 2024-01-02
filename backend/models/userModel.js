const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name : {
        type: String,
        required: true,
      },
    email : {
        type: String,
        required: true,
      },
    password : {
        type: String,
        required: true,
      },
    role:{
        type: String,
        required: true,
      },
      language:{
        type: String,
        required: true,
      },
    grade:String,
    subject:String,
    online:{
        type: Boolean,
        default: false,
      }
    
},{
    versionKey:false
})

const userModel=mongoose.model("user",userSchema)

module.exports={
    userModel
}