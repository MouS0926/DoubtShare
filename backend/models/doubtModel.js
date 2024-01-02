const mongoose=require("mongoose")
const doubtSchema=mongoose.Schema({
    userId :String,
    username : String,
      
    subject : {
        type: String,
        required: true,
      },
   
    description:{
        type: String,
        required: true,
      },
   
      createdAt: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ['Open', 'Accepted', 'Closed'],
        default: 'Open',
      },

      language:String,

      notifiedTutors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      }],
    
      assignedTutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    
},{
    versionKey:false
})

const doubtModel=mongoose.model("doubt",doubtSchema)

module.exports={
    doubtModel
}