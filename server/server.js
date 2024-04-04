require('dotenv').config()
const express=require("express")
const cors=require('cors')

const corsOptions=require('./config/corsOptions')
const connectDB=require('./config/dbConn')
const { default: mongoose } = require('mongoose')
const PORT=process.env.PORT||7963
const app=express()

connectDB()
console.log(process.env.NODE_ENV)

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/users",require('./routes/users'))
app.use("/api/todos",require('./routes/todos'))
app.use("/api/photos",require('./routes/photos'))
app.use("/api/posts",require('./routes/posts'))




mongoose.connection.once('open',()=>{
console.log("connected to mongodb")
app.listen(PORT,()=>
    console.log(`server running on port ${PORT}`))
})

mongoose.connection.on('error',err=>{
console.log(err)
})