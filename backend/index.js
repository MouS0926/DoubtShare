const express=require("express")
const cors =require("cors")
const { connection } = require("./db")
const { authRoute } = require("./routes/authRouter")
const { doubtRoute } = require("./routes/doubtRouter")
const http=require("http")
const { Server } = require("socket.io");







const app=express()


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  

app.use(cors())
app.use(express.json())
app.use("/auth",authRoute)
app.use("/doubt",doubtRoute)



io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);
  
    // Listen for chat messages
    // socket.on("chatMessage", async ({ doubtId, userId, message }) => {
    //   // You may want to validate the user and doubtId before processing the message
    //   // Save the chat message to the database or handle it as needed
    //   // ...
  
    //   // Emit the message to the tutor and user
    //   io.to(userId).emit("message", { doubtId, userId, message });
    //   io.to(socket.id).emit("message", { doubtId, userId, message });
    // });
  
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
      });
    
      socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
      });
    

    // Handle disconnect
    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
     
    });


  });
  

 


//   server.listen(3001, () => {
//     console.log("SERVER RUNNING");
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