const mongoose = require("mongoose")

function DBConnect(){
    mongoose.connect("mongodb+srv://suvetha309:tQWZWQac6dZ9n5dW@cluster0.fjzy9.mongodb.net/22CSA54?retryWrites=true&w=majority&appName=Cluster0",{

    //mongoose.connect("mongodb://127.0.0.1:27017/studentDB",{
       // useNewUrlParser:true
    }).then((conn)=>{
        console.log("Connected to DB"); }
    ).catch((err)=>{
        console.log("Some error in DB connection" + err);
    })
}

module.exports=DBConnect;