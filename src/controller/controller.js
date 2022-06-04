




const createUser =  async function (req, res) {
    let data = req.body
    
    

   res.send({msg: data})
};

module.exports.createUser = createUser