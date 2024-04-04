import { AiFillDelete } from "react-icons/ai";
import useFunction from "../costumHooks/costumhook";
import UpdateDialog from "../todos/updateTodos";
import { useState } from "react";
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UpdateDialogUser from "./updateUser";
import { Button } from "@mui/material";



const User = ({ user }) => {

  const {deleteItem, getdata, updateItemById } = useFunction()
  return (<>
 
    <React.Fragment style={{textAline:"center"}}>
      <CardContent >
        <Typography sx={{ fontSize: 20}} color="ButtonText" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="body2">
       
          <br />
          {user.userName}
          <br />
          {user.email}   
          <br />
          {user.address}
          <br />
          {user.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={async () => { await deleteItem(`http://localhost:1325/api/users/${user._id}`, user._id);await getdata("http://localhost:1325/api/users") }} className="deletebot"><AiFillDelete /></Button>
      
       < UpdateDialogUser user={user}/>


      </CardActions>
    </React.Fragment>

  </>)
}
export default User