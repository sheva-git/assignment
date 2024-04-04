import { NavLink } from "react-router-dom"

const Navigae=()=>{
return(
    <>
    <div className="nav">
    <NavLink to="/">Hone Page</NavLink> 
    <NavLink to="/tasks">Tasks List</NavLink>
    <NavLink to="/tasks/add"> Add New Task</NavLink>
    </div>
    </>
)
}

export default Navigae