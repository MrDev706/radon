const authorModel = require("../models/authorModel")
const blogModel = require("../models/blogModel")
const jwt = require('jsonwebtoken')


const verifyBlog = async function(req, res, next){
      let id = req.params.id 
      let data = await blogModel.findById(id)
      if(!data){
         res.status(500).send({status: false, msg: "Not found Id"})
      }
      else{  next() }


}

////////////////////////////////////////////////////////////////

const checkString = function(arr){
       let narr = arr
       console.log(narr) 
      if(typeof(narr)!='string'){
        return false
      } else {return true}
   
}

const checkField = function(arr){
      let narr = arr
       if(narr.length === 0){
          return false
       }
       else { return true }


}


const fieldValidate = async function(req, res, next){
      let data = req.body
      let arr = ["email", "lname", "fnam"]

      
      try {  
            for (i of arr){ 
                console.log(data[i])
                 if(!checkField(data[i])) throw { msg: "PLEASE ENTER THIS " + i}
           
                 if(!checkString(data[i])) throw {status: false, msg: "PLEASE CHECK STRING " + i}
           }
                next() 
      } 
      catch(err){  res.send({status: false, err: err})   }

      }

module.exports.verifyBlog = verifyBlog
module.exports.fieldValidate = fieldValidate


///////////////////////////////////////////////////////////////////



let blogIdValidate = async function(req,res,next){
      try{
  let blogId=req.params.blogId
  let check=await blogModel.findById(blogId)
      if(!check){
          res.status(404).send({status:false, msg: ""})
      }
      
      next()
  }
  catch(err){
    res.status(500).send({error: err.message})
  }
  }
   module.exports.blogIdValidate=blogIdValidate

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const auth = async function(req, res, next){
    let token = req.headers["x-auth-token"];
    console.log(token)

      let decode = jwt.verify(token, "My-First-Blog")
      if(!decode) { res.send({status: false, msg: "not jwt token"})}
      else { 
             let data = await authorModel.findById(decode._id)
             if(data) {

                next()
             }
             else { res.send({ status: false, err: "false massage"}) }
      }

    
}

module.exports.auth = auth

///////////////////////////////////////////////////
//////////////////////////////////////////////////////

const auth2 = async function(req, res, next){
      let id = req.params.id
      let token = req.headers["x-auth-token"]
      let tokenId = jwt.verify(token, "My-First-Blog")._id
      let data = blogModel.findById(id).select('authorId')
      if(tokenId===data) { next() }
      else { res.send({status: false, msg: "Not allwed by this id"})}

}

module.exports.auth2 = auth2