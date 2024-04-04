const express =require('express')
const router=express.Router()

const userController= require("../controller/userController")

router.get("/",userController.getAllUsers)
router.get("/:_id",userController.getUserById)
router.delete("/:_id",userController.deleteUser)
router.post("/",userController.createNewUser)
router.put("/",userController.updateUser)


module.exports=router
