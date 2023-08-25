const mongoose=require("mongoose")
module.exports = mongoose.model('employees',{
    fullName: {type: String},
    position: {type: String},
    location: {type: String},
    salary: {type: Number},
});