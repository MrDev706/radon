const express = require('express');
const { json } = require('express/lib/response');
const ucontroller = require('../controller/controller')





const router = express.Router();

router.get('/getAllUser', ucontroller.allUser);

router.post('/create-user', ucontroller.createUser)

module.exports = router;
// adding this comment for no reason