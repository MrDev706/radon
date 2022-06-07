const BookModel= require("../models/bookModel")
const { json } = require('express/lib/response');



const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    //let allBooks= await BookModel.find()
    let allBooks= await BookModel.find({sales: {$eq: 10}}).skip(3 * page-1).limit(3)
    res.send({msg: allBooks})
}

const bookList = async function(req, res){
      let list = await BookModel.find().select({bookName: 1, authorName: 1})
      res.send(list)
}
const getBooksInYear = async function(req, res){
    let y = req.params.year
    let book = await BookModel.find({year: y})
    res.send(book)


}
const getINRBooks = async function(req, res){
      let price = req.params.price
      let list = await BookModel.find({prices: {indianPrice: price}})
      res.send(list)

}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getINRBooks = getINRBooks
module.exports.getBooksInYear = getBooksInYear
module.exports.bookList = bookList