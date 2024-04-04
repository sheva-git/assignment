import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useFunction from '../costumHooks/costumhook';
import { MdPostAdd } from "react-icons/md";
export default function PostFormDialog() {

    const [title, setTitle] = React.useState("")
    const [body, setBody] = React.useState("")

    const [open, setOpen] = React.useState(false);
    const { addItem, getdata } = useFunction()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addFunction = async () => {

        await addItem("http://localhost:1325/api/posts", { title, body})
        await getdata("http://localhost:1325/api/posts")
    }

    return (
        <div>
            <div style={{textAlign:"center"}}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}><MdPostAdd />
                add 
            </Button></div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        add a new post
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="post_title"
                        type="string"
                        fullWidth
                        onChange={(e) => setTitle(e.target.value)}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="body"
                        label="post_body"
                        type="string"
                        fullWidth
                        onChange={(e) => { setBody(e.target.value) }}
                    />
                   


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel the button

                       
                    </Button>
                    <Button disabled ={!title} onClick={() => { addFunction(); handleClose() }} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
