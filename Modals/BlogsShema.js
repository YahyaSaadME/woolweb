const mongoose = require('mongoose')

const BlogsSchema = new mongoose.Schema({
    title:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    }
})

const BlogsModal = mongoose.model('Blog',BlogsSchema)
module.exports = BlogsModal