import express from "express";
const app = express();
import reminderRouter from "./routes/reminderRouter";


//middlewares
app.use(express.json())
app.use("/", reminderRouter)

//Routes
app.get('/',(req,res)=>{
    res.send("Here is the starting of the react and typescript intefration")
})
app.listen(8000,()=>console.log("The server is running on port 8000..."))