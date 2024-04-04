import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useFunction from '../costumHooks/costumhook';
import Checkbox from '@mui/material/Checkbox'
import { MdFormatListBulletedAdd } from "react-icons/md";
export default function FormDialog() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [title, setTitle] = React.useState("")
  const [tags, setTags] = React.useState([])
  const [complete, setComplete] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const { addItem, getdata } = useFunction()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addFunction = async () => {

    await addItem("http://localhost:1325/api/todos", { title: title, tags: tags, complete: checked })
    getdata("http://localhost:1325/api/todos")
  }

  return (
    <div >
      <div style={{textAlign:"center"}}>
      <Button  variant="outlined" color="primary" onClick={handleClickOpen}><MdFormatListBulletedAdd />
       add
      </Button></div>
      <br></br>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            add a new todo
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="title_todo"
            type="string"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="tags"
            label="tags_todo"
            type="[string]"
            fullWidth
            onChange={(e) => { setTags(e.target.value) }}
          />

          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }} />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button disabled ={!title}onClick={() => { addFunction(); handleClose() }} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}