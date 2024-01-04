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
                  availableTutor.map(async (tutor) => {
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
        const statusFilter = req.query.status;

        let query = { userId: userId };

        if (statusFilter) {
          query.status = statusFilter;
        }



        const mydoubts = await doubtModel.find(query);
       


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

        
      // io.to(existingDoubt.userId).emit("doubtAccepted", {
      //   doubtId: existingDoubt._id,
      //   tutorId: tutorId,
      // });
      // io.to(tutorId).emit("doubtAccepted", {
      //   doubtId: existingDoubt._id,
      //   tutorId: tutorId,
      // });

      // // Send a chat message from the tutor to the user
      // const chatMessage = {
      //   doubtId: existingDoubt._id,
      //   userId: existingDoubt.userId,
      //   message: "Hello, let's start the chat!",
      // };

      // io.to(existingDoubt.userId).emit("message", chatMessage);
  
        res.status(200).send({ msg: "Doubt accepted successfully" });
      } else {
        res.status(403).send({ msg: "Unauthorized - You are not notified about this doubt" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({ err: error });
    }
  });
 
  
  //single doubt 
  doubtRoute.get("/:doubtId", auth, async (req, res) => {
    try {
      const doubtId = req.params.doubtId;
  
     
      const doubtdetails = await doubtModel.findOne({ _id: doubtId});
  
      res.status(200).send(doubtdetails);
    } catch (error) {
      console.log(error);
      res.status(400).send({ "err": error });
    }
  });

// Get all doubts notified to a specific tutor
doubtRoute.get("/notified/:tutorId", auth, async (req, res) => {
  try {
    const tutorId = req.params.tutorId;

    // Find doubts where the tutor is notified
    const notifiedDoubts = await doubtModel.find({
      notifiedTutors: { $in: [tutorId] },
    });

    res.status(200).send(notifiedDoubts);
  } catch (error) {
    console.log(error);
    res.status(400).send({ "err": error });
  }
});

//accepted doubt list for tutor
doubtRoute.get("/assigned/:tutorId", auth, async (req, res) => {
  try {
    const tutorId = req.params.tutorId;

    // Find doubts where the tutor is assigned
    const assignedDoubts = await doubtModel.find({assignedTutor:tutorId });

    res.status(200).send(assignedDoubts);
  } catch (error) {
    console.log(error);
    res.status(400).send({ "err": error });
  }
});


module.exports={
    doubtRoute
}