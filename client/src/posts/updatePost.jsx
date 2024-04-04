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

export default function UpdateDialogPost({post}) {

    const [title, setTitle] = React.useState(post.title)
    const [body, setBody] = React.useState(post.body)

    const [_id,setid]=React.useState(post._id)
    const [open, setOpen] = React.useState(false);
     const {updateItem,getdata,updateItemById}=useFunction()
 



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCancelClose = () => {
    setOpen(false);
  };


  const UpdateFunction=async()=>{
    await updateItem(`http://localhost:1325/api/posts`,{_id,title,body})
    await getdata("http://localhost:1325/api/posts")
    
  }

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen} className="deletebot" ><VscEdit />

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
                        defaultValue={post.title}
                        type="string"
                        fullWidth
                        onChange={(e) => setTitle(e.target.value)}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="body"
                        label={"body"}
                        defaultValue={post.body}
                        type="string"
                        fullWidth
                        onChange={(e) => { setBody(e.target.value) }}
                    />
                   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelClose} color="primary">
            Cancel
          </Button>
          <Button disabled ={!title}onClick={()=>{ UpdateFunction() ;handleClose()}}  color="primary">
            update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}