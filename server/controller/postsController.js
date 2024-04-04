const Post=require('../models/Posts')
const getAllPosts= async (req,res)=>{
    const posts= await Post.find().lean()

    res.json (posts)
}

const getPostById=async (req,res)=>{
    const {_id}=req.params
    const post= await Post.findById(_id).lean()
    if(!post){
        return res.status(400).json({message:"No post was found"})
    }
    res.json(post)
}

const deletePost=async (req,res)=>{
    const {_id}=req.params
    const post= await Post.findById(_id).exec()
    if(!post){
        return res.status(400).json({message:"No post was found"})
    }
    const reasult=await post.deleteOne()
    const reply=`Post ${reasult.title} Deleted`
    res.json(reply)
}


const updatePost= async (req,res)=>{
    const {_id,body,title}=req.body
    if(!_id||!title){
        return res.status(400).json({message:"id and title are required"})
    }
    const post= await Post.findById(_id).exec()
     if(!post){
        return res.status(400).json({message:"No post was found"})

     }
     post.body=body
     post.title=title
    
     const updatedUser=await post.save()

     res.json(`${updatedUser.title} updated`)
    }

const createNewPost=async (req,res)=>{
    const {body,title}=req.body
    if(!title){
        return res.status(400).json({message:"title is required"}) 
    }
    const post= await Post.create({body,title})
    if(post){
        return res.status(201).json({message:"new post created"})
    }
    else
    return res.status(400).json({message:"invalid post"})

}






module.exports={getAllPosts,getPostById,deletePost,updatePost,createNewPost}