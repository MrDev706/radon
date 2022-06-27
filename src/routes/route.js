const express = require('express');
const router = express.Router();


const authorController= require("../controllers/authorController")
const blogController= require("../controllers/blogController")
const middle = require("../middlewares/middleware1")



router.post("/createAuthor", middle.fieldValidate, authorController.createAuthor)

router.post("/createBlog", middle.auth, blogController.createBlog)

router.get("/blogs", middle.auth,  blogController.allBlogs)

router.put("/updateBlog/:id", middle.auth2, blogController.updateBlog)

router.get("/blog/:id", middle.auth, blogController.blogDetails)

router.delete("/deletBlog/:id", middle.auth2, middle.verifyBlog, blogController.deletBlog)

router.get("/filterBlog", blogController.filterBlog)

router.post("/login", authorController.login)



module.exports = router;