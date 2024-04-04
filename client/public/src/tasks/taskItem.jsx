import { AiFillDelete } from "react-icons/ai";
import Axios from 'axios'
const TaskItem=({task})=>{
    const handleDelete=async (id)=>{
    const {data}=await Axios.delete(`http://localhost:1315/api/todos/${id}`)
 }
    return(<>
    <div>
        <h2>{task.title}</h2>
        <button onClick={() => handleDelete(task._id)} className="deletebot"><AiFillDelete />

</button>
    </div>
    </>)
}
export default TaskItem