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

export default function UpdateDialogUser({user}) {

    const [name, setName] = React.useState(user.name)
    const [userName, setUserName] = React.useState(user.userName)
    const [email, setEmail] = React.useState(user.email)
    const [phone, setPhone] = React.useState(user.phone)
    const [address, setAddress] = React.useState(user.address)

    const [_id,setid]=React.useState(user._id)
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
    await updateItem(`http://localhost:1325/api/users`,{_id,name,userName,phone,email,address})
    await getdata("http://localhost:1325/api/users")
    
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
                        id="name"
                        label="name"
                        defaultValue={user.name}
                        type="string"
                        fullWidth
                        onChange={(e) => setName(e.target.value)}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="userName"
                        label="userName"
                        defaultValue={user.userName}
                        type="string"
                        fullWidth
                        onChange={(e) => { setUserName(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="phone"
                       defaultValue={user.phone}
                        type="string"
                        fullWidth
                        onChange={(e) => { setPhone(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="email"
                        defaultValue={user.email}
                        type="string"
                        fullWidth
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="adderss"
                        defaultValue={user.address}
                        type="string"
                        fullWidth
                        onChange={(e) => { setAddress(e.target.value) }}
                    />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelClose} color="primary">
            Cancel
          </Button>
          <Button  disabled={!userName||!email}onClick={()=>{ UpdateFunction() ;handleClose()}}  color="primary">
            update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}