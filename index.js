const express= require("express");
const app=express();
const cors=require("cors");
const DBConnect=require("./db");


app.use(express.json());
app.use(cors());
connectDB();
const rout=require("./route.js");
app.get("/",(req,res)=>{
    res.send("Hello world")
});



app.post("/test/register/", rout.getregister)


app.put("/test/auth/:id/",rout.getauth )


app.delete("/test/delete/:id/", rout.deletecompany)


app.get("/test/company/",rout.getCompany)

app.post("/students",rout.saveStudents);


app.listen(3000,()=>{
    console.log("the server is running in port number: 3000");
});