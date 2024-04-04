import * as React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import useFunction from "../costumHooks/costumhook"
import User from "./User"
import UserDialog from "./addUser"
import  sliceSlice from '../store/allSlice'
import { Card } from "@mui/material"
import Grid from '@mui/material/Grid';
const GetAllUsers = () => {
    const listUsers = useSelector(state => state.sliceSlice.users)
    const {getdata } = useFunction()
  
    const [spacing, setSpacing] = React.useState(2);
    useEffect(() => {
        getdata("http://localhost:1325/api/users")
    }, [])

    // if (listTodos.length===0) return <h1>Loading</h1>
    return (
        <>
        <div style={{textAlign:"center"}}><br/>
        <h1>Users</h1>
        <br/></div>
                <UserDialog />
                <br/>
                <Grid sx={{ flexGrow: 1 }} container spacing={4}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        {listUsers ? listUsers.map((user, index) => {  return  <Grid key={user} item>
                            <Card sx={{ width: 290,height:230}} variant="outlined"><User user={user} key={index} /></Card>
                       </Grid> }) : " "}
                        
                    </Grid>
                </Grid>
            </Grid>

               
    
        </>
    )
}
export default GetAllUsers

