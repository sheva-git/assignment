const express =require('express')
const router=express.Router()

const todoController= require("../controller/todosController")

router.get("/",todoController.getAllTodos)
router.get("/:_id",todoController.getTodoById)
router.delete("/:_id",todoController.deleteTodo)
router.post("/",todoController.createNewTodo)
router.put("/",todoController.updateTodo)
router.put("/:_id",todoController.updateCompleteTodo)


module.exports=router
