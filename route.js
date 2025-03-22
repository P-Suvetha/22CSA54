const express=require("express")

const Company=require("./company.js");



async function getCompany(req,res){
   
    const company =await Company.find()
    res.status(200).json({
        company
    })
}

exports.getregister= (req,res)=>{
    console.log(req.body);
    const company=Company.create(req.body);
    res.send(company);
}

exports.getauth = async (req, res)=>{
    try{
       
        const company = await Company.findByIdAndUpdate(req.params.id,
            req.body,
            {new:true, runValidators:true})
            res.status(201).json({
                company
            })
        }
    catch(err){
            console.log(err);    
    }
}



exports.deletecompany = async (req,res)=>{
    try{
        const company = await Company.findByIdAndDelete(req.params.id)
        res.status(202).json({
            status:"Success",
            msg : "Deleted"
            
        })
    }
        catch(err){
            console.log(err);    
    }
}


exports.savedetails=(req,res)=>{
    console.log(req.body);
    
    const company=Company.create(req.body);
    res.send(company);
}




exports.getCompany=getCompany;
