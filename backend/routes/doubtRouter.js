const express=require("express")
const { auth } = require("../middleware/auth.middleware")
const { doubtModel } = require("../models/doubtModel")
const { userModel } = require("../models/userModel")



const doubtRoute=express.Router()

//create doubt
doubtRoute.post("/add",auth,async(req,res)=>{
   

    try {
        const newDoubt=new doubtModel(req.body)
      



            // Find online tutors matching language and doubt subject
            const availableTutor = await userModel.find({
                role: "tutor",
                language: req.body.language,
                subject: req.body.subject,
                // online: true,
              });


              if(availableTutor.length>0)
              {
                await Promise.all(
                    onlineTutors.map(async (tutor) => {
                      newDoubt.notifiedTutors.push(tutor._id);
                      
                    })
                  );

                  await newDoubt.save();
                  res.status(200).send({ msg: "Doubt request sent to online tutors" });
              }
              else{
                res.status(200).send({ msg: "No relevent tutor is found" });
              }
             

             

          
    } catch (error) {
        console.log((error));
        res.status(400).send({"err":error})
    }

})

//get all doubts of authorised user

doubtRoute.get("/alldoubts",auth,async(req,res)=>{
   

    try {
        const userId=req.body.userId
        const mydoubts=await doubtModel.find({userId:userId})
        
        res.status(200).send(mydoubts)
    } catch (error) {
        console.log(error);
        res.status(400).send({"err":error})
    }

})


// tutor accepts the doubt
doubtRoute.post("/accept/:doubtId", auth, async (req, res) => {
    try {
      const { doubtId } = req.params;
      const tutorId = req.body.userId;
  
      const existingDoubt = await doubtModel.findById(doubtId);
  
      if (!existingDoubt) {
        return res.status(404).send({ msg: "Doubt not found" });
      }
  
     
      if (existingDoubt.assignedTutor) {
        return res.status(403).send({ msg: "Doubt already assigned to another tutor" });
      }
  
      // Check if the tutor is in the notifiedTutors list
      if (existingDoubt.notifiedTutors.includes(tutorId)) {
        // Mark the doubt as accepted
        existingDoubt.status = 'Accepted';
        existingDoubt.assignedTutor = tutorId;
  
        // Save the updated doubt
        await existingDoubt.save();
  
        res.status(200).send({ msg: "Doubt accepted successfully" });
      } else {
        res.status(403).send({ msg: "Unauthorized - You are not notified about this doubt" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({ err: error });
    }
  });
  

module.exports={
    doubtRoute
}