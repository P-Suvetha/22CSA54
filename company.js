const mongoose=require("mongoose");

const companySchema=new mongoose.Schema({
    company_name:{
        type:String,
        required:[true,"name Misssing"]
    },

    owner_name:{
        type:String,
        required:[true,"name missing"]
    },

    roll_no:{
        type:Number,
        required:[true,"number missing"]
    },
    
    ower_email:{
        type:String,
        require:[true,"email missing"]
    },

    access_Code:{
        type:Number,
        require:[true,"number missing"]
    }
    })

    module.exports = mongoose.model("Company", companySchema);

