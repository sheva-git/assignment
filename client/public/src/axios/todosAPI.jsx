import { useDispatch, useSelector } from "react-redux"
import { updateTodos } from "../store/todosSlice"

Axios.defaults.baseURL='http://localhost:1315/api'
const GetAllTodos=()=>{
    const dispatch=useDispatch()
    const listTods=useSelector((myStore)=>myStore.todosSlice)
    const fetchTasks=async ()=>{
        const {data}=await Axios.get("/todos")
        dispatch(updateTodos({newArray:data}))
    }
    useEffect(()=>{
        fetchTasks()
    },[])
    if (listTods.length===0) return <h1>Loading</h1>
    return(
        <>
   <div className='Todos-list'>
            <Link to="/todos/add">Add new Todo</Link>
         
       {listTods.map((todo,index)=>{
        return<TaskItem task={todo}/>
      
       })}
       </div>

        </>
    )
}
export default GetAllTodos
