require("dotenv/config")
const express = require("express")
const app = express()
const cors = require("cors")
const userRouter = require("./src/routes/user.route")
const connectDb = require("./src/db/db")
const port = 3000

app.use(express.json())
app.use(cors({
        origin:"http://localhost:5173",
        credentials: true
    }))

connectDb()
app.use("/api/vi",userRouter)

app.listen(port,()=>{
    console.log("your server is running on the port no 3000")
})