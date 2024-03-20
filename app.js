const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')
const AppRouter = require("./routes/AppRoutes");
const figlet = require("figlet");

figlet("Labani" ,function(err,data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
})

const corsOptions ={
    origin:'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/api",AppRouter)



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
