const mongoose = require('mongoose')

const userSchema = new mongoose.Schema( {   
		authorName:String,
		age: Number,
		address: String,
        rating: Number

}, { timestamps: true });


module.exports = mongoose.model('newAuthor', userSchema)