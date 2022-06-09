const author = require("../models/author");
const Author = require("../models/author");
const Books = require("../models/newBook");





const createAuthor =  async function (req, res) {
    let data = req.body
    let newData = await Author.create(data)
   res.send({msg: newData})
};

const allUser = async function(req, res){ 
    let data = await Author.find()

    res.send(data)
}

const createBook = async function(req, res){
     let data = req.body
     let author = Author.findOne({author_id: data.author_id})
     if(author){
        let savedData = await Books.create(data)
        res.send(savedData)

     }
    }
const getById = async function(req, res){
     let data = await Author.findOne({author_Name: "Chetan Bhagat"}).select({author_id: 0})
     let list = await Books.find({author_id: data}).select({name: 0})
     res.send(list)
}
const updatePrice = async function(req, res){
      let author = await Books.findOneAndUpdate({name: "Two states"}, {price: 1000})
      res.send(author)
}
const bookList = async function(req, res){
      let list = await Books.find()
      res.send(list)

}


const authorByAge = async function(req, res){
      let list = await author.find({age: {$gt: 30}})
      
      let ids = []
      list.forEach(ele => ids.push(ele.author_id))
      let data = await Books.findOne({ $and: [{rating: {$gt: 3}}, {author_id: 2}] })

    res.send(data.name + "  " + data.author_id)

}
module.exports.createAuthor = createAuthor
module.exports.allAuthor = allUser
module.exports.createBook = createBook
module.exports.getById = getById
module.exports.updatePrice = updatePrice
module.exports.bookList = bookList
module.exports.authorByAge = authorByAge