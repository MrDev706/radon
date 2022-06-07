const express = require('express');
const { json } = require('express/lib/response');
const ucontroller = require('../controller/controller')

const BookController= require("../controller/bookContorller")








const router = express.Router();

router.get('/getAllUser', ucontroller.allUser);

router.post('/create-user', ucontroller.createUser)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)



router.get("/bookList", BookController.bookList)

router.get("/getBooksInYear/:year", BookController.getBooksInYear)

router.get("/getINRBooks/:price", BookController.getINRBooks)

module.exports = router;
// adding this comment for no reason