const Todo=require('../models/Todos')

const getAllTodos= async (req,res)=>{
    const todos= await Todo.find().lean()
    // if(!todos?.length){
    //     return res.status(400).json({message:"No todos were found"})
    // }
    res.json(todos)
}

const getTodoById=async (req,res)=>{
    const {_id}=req.params
    const todo= await Todo.findById(_id).lean()
    if(!todo){
        return res.status(400).json({message:"No todo was found"})
    }
    res.json(todo)
}

const deleteTodo=async (req,res)=>{
    const {_id}=req.params
    const todo= await Todo.findById(_id).exec()
    if(!todo){
        return res.status(400).json({message:"No todo was found"})
    }
    const reasult=await todo.deleteOne()
    const reply=`todo ${reasult.title} Deleted`
    res.json(reply)
}


const updateTodo= async (req,res)=>{
    const {_id,title,tags,complete}=req.body
    if(!_id||!title){
        return res.status(400).json({message:"id and title are required"})
    }
    const todo= await Todo.findById(_id).exec()
     if(!todo){
        return res.status(400).json({message:"No todo was found"})

     }
     todo.title=title
     todo.tags=tags
     todo.complete=complete
    
     const updatedtodo=await todo.save()

     res.json(`${updatedtodo.title} updated`)
    }

 const updateCompleteTodo= async (req,res)=>{
    const {_id}=req.params
    const todo= await Todo.findById(_id).exec()
     if(!todo){
        return res.status(400).json({message:"No todo was found"})

     }

    todo.complete=!todo.complete
    const updatedtodo=await todo.save()
     res.json(`${updatedtodo.title} updated complete`)
}
const createNewTodo=async (req,res)=>{
    const {title,tags,complete}=req.body
    if(!title){
        return res.status(400).json({message:"title is required"}) 
    }
    const todo= await Todo.create({title,tags,complete})
    if(todo){
        return res.status(201).json({message:"new todo created"})
    }
    else
    return res.status(400).json({message:"invalid todo"})

}






module.exports={getAllTodos,getTodoById,deleteTodo,updateCompleteTodo,updateTodo,createNewTodo}