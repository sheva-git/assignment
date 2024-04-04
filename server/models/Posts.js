const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
title:{
    type:String,
    required:true
},
body:{
    type:String,
    default:"chachacha"
}

},{
    timestamps:true
})

module.exports=mongoose.model('Post',postSchema)