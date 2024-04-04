import { useDispatch, useSelector } from "react-redux"
import TaskItem from "./todosItem"
import { useEffect, useState } from "react"
import FormDialog from "./addDialogTodo"
import useFunction from "../costumHooks/costumhook"
import { Card } from "@mui/material"
import * as React from 'react';
import Grid from '@mui/material/Grid';


const GetAllTodos = () => {
    const listTodos = useSelector((state) => state.sliceSlice.todos)
    const [spacing, setSpacing] = React.useState(2);
    const {getdata } = useFunction()
    useEffect(() => {
        getdata("http://localhost:1325/api/todos")
    }, [])

    // if (listTodos.length===0) return <h1>Loading</h1>
    return (
        <>
            <div >
            <div style={{textAlign:"center"}}>
                <br/>
                <h1>Todos</h1>
                <br/>
              
                <FormDialog />
                </div>

                <Grid sx={{ flexGrow: 1 }} container spacing={4}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        {listTodos ? listTodos.map((todo, index) => {  return  <Grid key={todo} item>
                            <Card sx={{ width: 275,height:160}} variant="outlined"><TaskItem task={todo} key={index} /></Card>
                       </Grid> }) : " "}
                        
                    </Grid>
                </Grid>
            </Grid>
            
            </div>
        </>
    )
}
export default GetAllTodos

