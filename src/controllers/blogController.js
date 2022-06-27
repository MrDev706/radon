// const authorModel = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const jwt = require("jsonwebtoken");
const blogModel = require("../models/blogModel");

const createBlog=async function(req,res){
    let data=req.body;
    let saveData=await blogModel.create(data);
    res.status(201).send({msg:saveData})
}

const updateBlog = async function(req, res){
    let Udata = req.body
    let bId = req.params.id

    try {

        let Udata =  await blogModel.findByIdAndUpdate((bId), (Udata), {new: true})
        res.status(200).send({status: true, data: Udata})
    }
    catch(err){
        res.send({status: false, msg: err})
    }
}
const allBlogs = async function(req, res){
    //{isPublished: true, isDeleted: false}

      let udata = await blogModel.find({isDeleted: true})

      res.status(200).send({status: true, data: udata})

}

const deletBlog = async function(req, res){
      let id = req.params.id
      let data = blogModel.findByIdAndUpdate(id, {$set: {isDeleted: true, deletedAt: new Date()}}, {new: true})
      res.status(200).send({status: true, msg: data})
}
const blogDetails = async function(req, res){
    let id = req.paramas.id
    try {
          let udata = await blogModel.findById(id)
          if(!udata) throw "id does't matchs"
          res.status(201).send({status: true, data: udata})
    }
    catch(err){ res.send({status: false, msg: err})  }
}
const filterBlog = async function(req, res){
     let data = req.query
     let result = await blogModel.find({$and: 
        [{isDeleted: true,
         isPublished: false }, data]})

     res.status(201).send({status: true, data: result})

}



module.exports.filterBlog = filterBlog;
module.exports.blogDetails = blogDetails;

module.exports.createBlog= createBlog;
module.exports.updateBlog= updateBlog;
module.exports.deletBlog = deletBlog;
module.exports.allBlogs = allBlogs;

