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
import { RiUserAddFill } from "react-icons/ri";
export default function UserDialog() {

    const [name, setName] = React.useState("")
    const [userName, setUserName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [address, setAddress] = React.useState("")



    const [open, setOpen] = React.useState(false);
    const { addItem, getdata } = useFunction()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addFunction = async () => {

        await addItem("http://localhost:1325/api/users", { name, userName, phone, email, address })
        await getdata("http://localhost:1325/api/users")
    }

    return (
        <div>
            <div style={{textAlign:"center"}}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}><RiUserAddFill />
               add 
            </Button></div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        add a new user
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="name_"
                        type="string"
                        fullWidth
                        onChange={(e) => setName(e.target.value)}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="userName"
                        label="user_name"
                        type="string"
                        fullWidth
                        onChange={(e) => { setUserName(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="user_phone"
                        type="string"
                        fullWidth
                        onChange={(e) => { setPhone(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="user_email"
                        type="string"
                        fullWidth
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="user_address"
                        type="string"
                        fullWidth
                        onChange={(e) => { setAddress(e.target.value) }}
                    />



                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={!userName||!email} onClick={() => { addFunction(); handleClose() }} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}