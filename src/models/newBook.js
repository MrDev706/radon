

const mongoose = require('mongoose');
const object = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name:String,
    author: { type: object,
                ref: "newAuthor" },
    price: Number,
    ratings: Number,
    publisher: { type: object,
                  ref: "newPublisher" }

}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema) //users
