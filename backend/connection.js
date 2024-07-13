//import mongoose
var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ebyjk:atlas1@cluster0.wtupewv.mongodb.net/empapp2?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log(err)
})