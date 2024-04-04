const express =require('express')
const router=express.Router()

const photosController= require("../controller/photosController")

router.get("/",photosController.getAllPhotos)
router.get("/:_id",photosController.getPhotoById)
router.delete("/:_id",photosController.deletePhoto)
router.post("/",photosController.createNewPhoto)
router.put("/",photosController.updatePhoto)



module.exports=router
