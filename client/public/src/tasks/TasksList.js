import  Axios from 'axios';
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import TaskItem from './taskItem';
const TasksList=()=>{
    const [tasks,setTasks]=useState([])
    const fetchTasks=async ()=>{
        const {data}=await Axios.get("http://localhost:1315/api/todos")
        setTasks(data)
    }
    useEffect(()=>{
        fetchTasks()
    },[])
    if (tasks.length===0) return <h1>Loading</h1>
    return(
        <>
        <div className='tasks-list'>
            <Link to="/tasks/add">Add new task</Link>
         
       {tasks.map((task,index)=>{
        return<TaskItem task={task}/>
      
       })}
       </div>
        </>
    )
  } 

  export default TasksList