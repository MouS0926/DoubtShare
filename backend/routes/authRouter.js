const express=require("express")
const { userModel } = require("../models/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { blacklistModel } = require("../models/blacklistModel")
const { auth } = require("../middleware/auth.middleware")

const authRoute=express.Router()


authRoute.post("/register",async(req,res)=>{
    const {role,email,password,name,language,grade,subject}=req.body
    try {
        const user=await userModel.findOne({email})
        if(user){
            res.status(201).send({"msg":`user with email ${email} already exist`})
        }
        else{
            bcrypt.hash(password, 5,async (err, hash)=> {
                if(err)
                {
                    res.status(400).send({"err":err}) 
                }
                else{
                    const newuser=new userModel({...req.body,password:hash})
                    await  newuser.save()
                    res.status(200).send({"msg":`One New User is created`})
                }
                
            });
        }
    } catch (error) {
        console.log(error);
       res.status(400).send({"err":error})
    }
})

// authRoute.post("/login",async(req,res)=>{
//     const {email,password}=req.body
//     try {
//         const user=await userModel.findOne({email})

//         if(user){
//         //    console.log(user);
//             bcrypt.compare(password, user.password, (err, result)=> {
//                 if(result)
//                 {
//                     var token = jwt.sign({ userId:user._id,username:user.name,userrole:user.role ,language:user.language}, 'DoubtShare');
//                     res.status(200).send({"msg":"Logedd in Successfully",token,username:user.name,userrole:user.role})
//                 }
//                 else{
//                     res.status(400).send("Invalid password") 
//                 }
//             });
//         }

//         else{
//             res.status(401).send({"msg":"Invalid email"})
//         }

//     } catch (error) {
//         console.log(error);
//         res.status(400).send({"err":error})
//     }
// })




authRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });
  
      if (user) {
        bcrypt.compare(password, user.password)
          .then((result) => {
            if (result) {
              // Update online status to true when the user logs in
              userModel.findOneAndUpdate(
                { email },
                { $set: { online: true } },
                { new: true }
              )
                .then(updatedUser => {
                  var token = jwt.sign(
                    {
                      userId: updatedUser._id,
                      username: updatedUser.name,
                      userrole: updatedUser.role,
                      language: updatedUser.language,
                    },
                    "DoubtShare"
                  );
                  res.status(200).send({
                    "msg": "Logged in Successfully",
                    token,
                    username: updatedUser.name,
                    userrole: updatedUser.role,
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).send({ "msg": "Internal Server Error" });
                });
            } else {
              res.status(400).send("Invalid password");
            }
          });
      } else {
        res.status(401).send({ "msg": "Invalid email" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({ "err": error });
    }
  });

// authRoute.post("/logout",async(req,res)=>{
//     const token=req.headers.authorization?.split(" ")[1]
//     if (!token) {
//         return res.status(400).send({ "msg": "No token provided" });
//       }

//       try {
//         const blacklisted= await blacklistModel.findOne({token})
//         if(blacklisted){
//             return res.status(200).send({"msg":"token already blacklisted"})
//         }
//         else{
//             await blacklistModel.create({ token })
//             res.status(200).send({ "msg": "Logged out successfully" });
//         }
//       } catch (error) {
//         console.error(error);
//          res.status(500).send({ "msg": "Internal Server Error" });
//       }
    
   
// })



authRoute.post("/logout",auth, async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(400).send({ "msg": "No token provided" });
    }
  
    try {
      // Retrieve user information using the userId from the request body
      const user = await userModel.findById(req.body.userId);
  
      if (!user) {
        return res.status(404).send({ "msg": "User not found" });
      }
  
      // Update the online status to false
      user.online = false;
      await user.save();
  
      // Check if the token is already blacklisted
      const blacklisted = await blacklistModel.findOne({ token });
  
      if (blacklisted) {
        return res.status(200).send({ "msg": "Token already blacklisted" });
      } else {
        // Blacklist the token
        await blacklistModel.create({ token });
        res.status(200).send({ "msg": "Logged out successfully" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ "msg": "Internal Server Error" });
    }
  });


module.exports={
    authRoute
}