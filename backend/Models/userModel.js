const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    fullName:{
    type: String,
    required :true
},
email:{
    type:String,
    required: true,
    unique:true
},
pwd:{
    type:String,
    required:true
},
date:{
    type:Date,
    default:Date.now,
}
});

module.exports =mongoose.model("User",userSchema)