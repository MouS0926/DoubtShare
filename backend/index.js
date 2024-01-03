const express=require("express")
const cors =require("cors")
const { connection } = require("./db")
const { authRoute } = require("./routes/authRouter")
const { doubtRoute } = require("./routes/doubtRouter")
const http=require("http")
const socketIo = require("socket.io");







const app=express()


const server = http.createServer(app);
const io = socketIo(server);

app.use(cors())
app.use(express.json())
app.use("/auth",authRoute)
app.use("/doubt",doubtRoute)



// io.on("connection", (socket) => {
//     console.log(`Socket connected: ${socket.id}`);
  
//     // Listen for chat messages
//     socket.on("chatMessage", async ({ doubtId, userId, message }) => {
//       // You may want to validate the user and doubtId before processing the message
//       // Save the chat message to the database or handle it as needed
//       // ...
  
//       // Emit the message to the tutor and user
//       io.to(userId).emit("message", { doubtId, userId, message });
//       io.to(socket.id).emit("message", { doubtId, userId, message });
//     });
  
//     // Handle disconnect
//     socket.on("disconnect", () => {
//       console.log(`Socket disconnected: ${socket.id}`);
//       // Additional cleanup logic if needed
//     });
//   });
  

 





app.listen(8080,async()=>{

    try {
         await connection
        console.log("db is connected");
        console.log("server is running");
    } catch (error) {
        console.log(error);
    }
    
})