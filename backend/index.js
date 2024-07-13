//import express

var express=require("express")
require("./connection")
var empModel=require("./model/employee")
//initialize
var app=express()
//middleeware import
var cors=require("cors")

app.use(express.json());
app.use(cors());//cors is middle ware used to present the data to the website. the policy of postman doesnt allow to display data to all. will lead to axiosError


//api
//add employee  // async await is used for asynchronous operation of js
app.post("/add",async(req,res)=>{
    try{
        await empModel(req.body).save();
        res.send({message:"data added!!"});


    }
    catch(error){
        console.log(error)
    }
})
//api to view
app.get("/view",async(req,res)=>{
    try{
        var data=await empModel.find()
        res.send(data)
        
    }
    catch(error){
        console.log(error)
    }

})
//delete
app.delete('/remove/:a',async(req,res)=>{
    console.log(req.params.a)
    try{
        var id=req.params.a
        await empModel.findByIdAndDelete(id)
        res.send("data deleted!!")

    }
    catch(error){
        console.log(error)

    }


})
//update
app.put('/edit/:a',async(req,res)=>{
    console.log(req.params.a);
    try{
        var id=req.params.a
        var output =await empModel.findByIdAndUpdate(id,req.body)
        res.send({message:"updated",output})
    }
    catch(error){

        console.log(error)

    }

})




//port
app.listen(3005,()=>{
    console.log("port is up and running!!")
})