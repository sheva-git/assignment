const Photo=require('../models/Photos')
const getAllPhotos= async (req,res)=>{
    const photos= await Photo.find().lean()
    if( photos?.length){
        return res.status(400).json({message:"No posts were found"})
    }
    res.json (photos)
}

const getPhotoById=async (req,res)=>{
    const {_id}=req.params
    const photo= await Photo.findById(_id).lean()
    if(!photo){
        return res.status(400).json({message:"No photo was found"})
    }
    res.json(photo)
}

const deletePhoto=async (req,res)=>{
    const {_id}=req.params
    const photo= await Photo.findById(_id).exec()
    if(!photo){
        return res.status(400).json({message:"No photo was found"})
    }
    const reasult=await photo.deleteOne()
    const reply=`Post ${reasult.title} Deleted`
    res.json(reply)
}


const updatePhoto= async (req,res)=>{
    const {_id,imageUrl,title}=req.body
    if(!_id||!title){
        return res.status(400).json({message:"id and title are required"})
    }
    const photo= await Photo.findById(_id).exec()
     if(!photo){
        return res.status(400).json({message:"No photo was found"})

     }
     photo.imageUrl=imageUrl
     photo.title=title
    
     const updatedUser=await photo.save()

     res.json(`${updatedUser.title} updated`)
    }

const createNewPhoto=async (req,res)=>{
    const {imageUrl,title}=req.body
    if(!title){
        return res.status(400).json({message:"title is required"}) 
    }
    const photo= await Photo.create({imageUrl,title})
    if(photo){
        return res.status(201).json({message:"new photo created"})
    }
    else
    return res.status(400).json({message:"invalid photo"})

}






module.exports={getAllPhotos,getPhotoById,deletePhoto,updatePhoto,createNewPhoto}