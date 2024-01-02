const express=require("express")
const cors =require("cors")
const { connection } = require("./db")
const { authRoute } = require("./routes/authRouter")
const { doubtRoute } = require("./routes/doubtRouter")








const app=express()
app.use(cors())
app.use(express.json())
app.use("/auth",authRoute)
app.use("/doubt",doubtRoute)





 





app.listen(8080,async()=>{

    try {
         await connection
        console.log("db is connected");
        console.log("server is running");
    } catch (error) {
        console.log(error);
    }
    
})