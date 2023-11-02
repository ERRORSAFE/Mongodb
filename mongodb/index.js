//console.log('hello every one');
const express = require("express")
const mongoose = require("mongoose")
const app = express()

//DB connection 
mongoose
.connect("mongodb+srv://venuv6648:venu12345@cluster0.tvjohve.mongodb.net/mydb")
.then(()=>{
    console.log("Data base is succesfully")
})
.catch((err)=>{
    console.log(err,"Something is went wrong")
});


//test api
app.get("/test",(req,res)=>{
    res.send("hello everyone , this is test api");
});
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});