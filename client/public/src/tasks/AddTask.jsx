import Axios from "axios"
import {  useState } from "react"
import { useNavigate } from "react-router-dom"

  const AddTask=()=>{
    const [title,setTitle]=useState("")
    const [tags,setTags]=useState([])
    const [complete,setComplete]=useState(false)
    const navigate=useNavigate()
    const submitForm=async(e)=>{
    
      e.preventDefault()
      const {data}=await Axios.post("http://localhost:1315/api/todos",{title:title,tags:tags,complete:complete})
      setTitle("")
    
      setTags([])
      setComplete(false)
      navigate("/tasks")
    }

    return(   <>

      <form onSubmit={submitForm}>
          <input value={title} placeholder="please add title" 
          required={true} 
          onChange={(e)=>setTitle(e.target.value)}/>

          <input  value={tags} placeholder="please add tags" 
          onChange={(e)=>{setTags(e.target.value)}}/>

          <input  value={complete} placeholder="please add complete" 
          onChange={(e)=>{setComplete(e.target.value)}}/> 
      <button disabled={title===""} type='submit' >Send</button>
      </form>
     
        </>
    )
  } 

  export default AddTask