const AuthorModel= require("../models/authorModel") 
const jwt = require('jsonwebtoken')

//Q1.
const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.status(201).send({data: authorCreated})
}


module.exports.createAuthor= createAuthor



const login = async function(req, res){
     
    
    console.log(req.body)
let email = req.body.email
let pass = req.body.password


 let data = await AuthorModel.findOne(
       {email: email, password: pass})
 
 console.log(email)

    let token = jwt.sign({
         _id: data._id.toString(),
         project: "blog"},
          "My-First-Blog")

     if(token) {
        res.setHeader("x-auth-token", token)
        res.send({status: true, msg: token})
     }
     else { res.send({status: false, msg: "not Token"}) }
    

}

module.exports.login = login;








