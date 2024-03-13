const express = require('express')
const cors = require("cors");
const app = express()
const mongoose = require('mongoose')
const AppRouter = require("./routes/AppRoutes");

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/api",AppRouter)
app.use(cors());

const PORT=8080;

const MONGO_DB_URI='mongodb://localhost:27017/nodedemoapp'
mongoose.connect(MONGO_DB_URI).then(()=>{
    console.log("db connected successfully");
    app.listen(PORT,()=>{
        console.log('Server is running on port',PORT)
    })
}).catch((error)=>{
        console.log(error);

    });
