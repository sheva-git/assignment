import { AiFillDelete } from "react-icons/ai";
import useFunction from "../costumHooks/costumhook";
import UpdateDialog from "./updateTodos";
import { useState } from "react";
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";



const TaskItem = ({ task }) => {

  const {deleteItem, getdata, updateItemById } = useFunction()
  const [checked, setChecked] = useState(task.complete)

  const handleChange = async (event) => {
    setChecked(event.target.checked);
    await updateItemById((`http://localhost:1325/api/todos/${task._id}`))
    await getdata("http://localhost:1325/api/todos")


  };
  return (<>
    <React.Fragment >
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="ButtonText" gutterBottom>
          {task.title}
        </Typography>
        <Typography variant="body2">
          <br />
          {task.tags}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={async () => { await deleteItem(`http://localhost:1325/api/todos/${task._id}`, task._id); getdata("http://localhost:1325/api/todos") }} className="deletebot"><AiFillDelete /></Button>
        <UpdateDialog task={task} setChecked={setChecked} checked={checked}/>
        <Checkbox

          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }} />

      </CardActions>
    </React.Fragment>

  </>)
}
export default TaskItem