const express = require('express');
const { json } = require('express/lib/response');
const ucontroller = require('../controller/controller')





const router = express.Router();

router.get('/test-me', function (req, res) {
  
    
    
    res.send(result)
});

router.post('/create-user', ucontroller.createUser)

module.exports = router;
// adding this comment for no reason