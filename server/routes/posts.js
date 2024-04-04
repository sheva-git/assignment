const express =require('express')
const router=express.Router()

const postsController= require("../controller/postsController")

router.get("/",postsController.getAllPosts)
router.get("/:_id",postsController.getPostById)
router.delete("/:_id",postsController.deletePost)
router.post("/",postsController.createNewPost)
router.put("/",postsController.updatePost)



module.exports=router
