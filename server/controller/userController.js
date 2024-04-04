const User=require('../models/Users')
const getAllUsers= async (req,res)=>{
    const users= await User.find().lean()
    
    res.json(users)
}

const getUserById=async (req,res)=>{
    const {_id}=req.params
    const user= await User.findById(_id).lean()
    if(!user){
        return res.status(400).json({message:"No user was found"})
    }
    res.json(user)
}

const deleteUser=async (req,res)=>{
    const {_id}=req.params
    const user= await User.findById(_id).exec()
    if(!user){
        return res.status(400).json({message:"No user was found"})
    }
    const reasult=await user.deleteOne()
    const reply=`User ${reasult.name} Deleted`
    res.json(reply)
}


const updateUser= async (req,res)=>{
    const {_id,name,userName,email,address,phone}=req.body
    if(!_id||!userName){
        return res.status(400).json({message:"id and name are required"})
    }
    const user= await User.findById(_id).exec()
     if(!user){
        return res.status(400).json({message:"No user was found"})

     }
     user.name=name
     user.userName=userName
     user.email=email
     user.address=address
     user.phone=phone

     const updatedUser=await user.save()

     res.json(`${updatedUser.name} updated`)
    }

const createNewUser=async (req,res)=>{
    const {name,userName,email,address,phone}=req.body
    if(!userName){
        return res.status(400).json({message:"username is required"}) 
    }
    const user= await User.create({name,userName,email,address,phone})
    if(user){
        return res.status(201).json({message:"new user created"})
    }
    else
    return res.status(400).json({message:"invalid user"})

}






module.exports={getAllUsers,getUserById,deleteUser,updateUser,createNewUser}