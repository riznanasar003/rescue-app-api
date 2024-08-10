const mongoose = require("mongoose")
const peopleSchema = mongoose.Schema(
    {
            name:{type:String,required:true},
            phno:{type:String,required:true},
            village:{type:String,required:true},
            place:{type:String,required:true},
            pincode:{type:String,required:true},
            houseno:{type:String,required:true},
            missingdate:{type:String,required:true},
            adhaarno:{type:String,required:true},
            gender:{type:String,required:true},
            age:{type:String,required:true}

    }
)
const peopleModel = mongoose.model("peoples",peopleSchema)
module.exports = peopleModel