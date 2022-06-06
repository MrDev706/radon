const UserModel= require("../models/model")




const createUser =  async function (req, res) {
    let data = req.body
    let newData = await UserModel.create(data)
   res.send({msg: newData})
};

const allUser = async function(req, res){
    let data =await UserModel.find()

    res.send(data)
}
module.exports.createUser = createUser
module.exports.allUser = allUser