import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useFunction from '../costumHooks/costumhook';
import { VscEdit } from "react-icons/vsc";
import Checkbox from '@mui/material/Checkbox';

export default function UpdateDialog({task,setChecked,checked}) {

const [checked1, setChecked1] = React.useState(checked);
const [title,setTitle]=React.useState(task.title)
const [tags,setTags]=React.useState(task.tags)
const [complete,setComplete]=React.useState(false)

const [_id,setid]=React.useState(task._id)
 const [open, setOpen] = React.useState(false);
  const {updateItem,getdata,updateItemById}=useFunction()
  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };


  const handleClickOpen = () => {
    setChecked1(checked)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCancelClose = () => {
    setChecked1(checked)
    setOpen(false);
  };


  const UpdateFunction=async()=>{
    setChecked(checked1)
    await updateItem(`http://localhost:1325/api/todos`,{_id,title,tags,complete:checked1})
    await getdata("http://localhost:1325/api/todos")
    
  }

  return (
    <div>
      <Button  color="primary" onClick={handleClickOpen} className="deletebot" ><VscEdit />

      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
           update
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label={"title"}
            defaultValue={task.title}
            type="string"
            fullWidth
            onChange={(e)=>setTitle(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="tags"
            label={"tags"}
            defaultValue={task.tags}
            type="[string]"
            fullWidth
            onChange={(e)=>{setTags(e.target.value)}}
          />
      <Checkbox
      checked={checked1}
      onChange={e=>handleChange1(e)}
      inputProps={{ 'aria-label': 'controlled' }}/>

        </DialogContent>
        <DialogActions>
          <Button  onClick={handleCancelClose} color="primary">
            Cancel
          </Button>
          <Button disabled ={!title} onClick={()=>{ UpdateFunction() ;handleClose()}}  color="primary">
            update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}