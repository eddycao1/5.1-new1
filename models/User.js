
// const validator = require("validator")
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Country: {
        type: String,
        require: true,

    },
    FirstName: {
        type: String,
        require: true,
        minlength:1

    },
    LastName: {
        type: String,
        require: true,
        minlength:1
    },
    Email: {
        type: String,
        require: true,
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("Email is not valid")
        //     }
        // }
    },
    Password: {
        type: String,
        require: true,
        minlength:8
        
    },
    rePassword: {
        type: String,
        require: true,
        minlength: 8,
        // validate(value){
        //     if(!validator.equals(value, this.Password)){
        //         throw new Error("the re-typed is not match as password")
        //     }
        // }
    },
    Address: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    zip: {
        type: String,
        require: false
    },
    MobileNum: {
        type: Number,
        require: false
    }
})

module.exports = mongoose.model("User",userSchema)