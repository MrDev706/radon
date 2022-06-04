const UserModel= require("../models/model")




const createUser =  async function (req, res) {
    let data = req.body
    let newData = await UserModel.create(data)


    
    

   res.send({msg: newData})
};

module.exports.createUser = createUser