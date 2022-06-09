const express = require('express');
const { json } = require('express/lib/response');
const ucontroller = require('../controller/controller')










const router = express.Router();

router.post('/createBook', ucontroller.createBook)

router.get("/allAuthor", ucontroller.allAuthor  )

router.post("/createAuthor", ucontroller.createAuthor)

router.get("/getById", ucontroller.getById)

router.get("/updatePrice", ucontroller.updatePrice)
router.get("/bookList", ucontroller.bookList)
router.get("/authorByAge", ucontroller.authorByAge)




module.exports = router;
// adding this comment for no reason