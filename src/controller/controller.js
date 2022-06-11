const author = require("../models/author");

const Books = require("../models/newBook");

const Publisher = require("../models/newPublisher");





const createAuthor =  async function (req, res) {
    let data = req.body
    let newData = await author.create(data)
   res.send({msg: newData})
};
const createPublisher =  async function (req, res) {
    let data = req.body
    let newData = await Publisher.create(data)
   res.send({msg: newData})
};

const allUser = async function(req, res){ 
    let data = await author.find()

    res.send(data)
}

const createBook = async function(req, res){
    if(!req.body.publisher || !req.body.author){
       res.send("eror: pb and author")

    }else {
     let data = await Books.create(req.body)
     res.send(data)

    }
    }
  
     
    

const updatePrice = async function(req, res){
      let author = await Books.findOneAndUpdate({name: "Two states"}, {price: 1000})
      res.send(author)
}


const bookList = async function(req, res){
      let list = await Books.find().populate('author').populate('publisher').select({rating: 0})
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

module.exports.updatePrice = updatePrice
module.exports.bookList = bookList
module.exports.authorByAge = authorByAge
module.exports.createPublisher  = createPublisher