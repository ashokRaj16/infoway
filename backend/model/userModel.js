const mongoose = require('mongoose');

//creating user schemas
const userSchema = mongoose.Schema({
    fname:
    {
        type: String
    },
    lname: 
    {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    password:{
        type: String
    },
    role:{
        type: String
    }
},{ timestamps: true })

//register userSchamas to model
const user =  mongoose.model('user', userSchema)
module.exports = {user}