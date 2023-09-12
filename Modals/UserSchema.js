const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    age:{
        type:Number
    },
    prefession:{
        type:String
    },
    username:{
        type:String,
        unique:true
    },
    password:{type:String},
    cart:[
        {
            name:{type:String},
            image:{type:String},
            price:{type:Number},
            quantity:{type:Number}

        }
    ]
})

const UserModal = mongoose.model('User',UserSchema)
module.exports = UserModal