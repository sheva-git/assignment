import { useDispatch, useSelector } from "react-redux"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react"

import useFunction from "../costumHooks/costumhook"
import PostFormDialog from "./addPost"
import Post from "./Post"
import { Card } from "@mui/material"
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { MdAutoFixHigh } from "react-icons/md";

const GetAllPosts = () => {
    const listPosts = useSelector((state) => state.sliceSlice.posts)
    const [spacing, setSpacing] = React.useState(2);
    const { getdata } = useFunction()
    useEffect(() => {
        getdata("http://localhost:1325/api/posts")
    }, [])
    return (
        <>
        <div style={{textAlign:"center"}}>
           <br/>
        <h1>Posts</h1>
<br/> </div>
            <PostFormDialog />
            <br/>
            <Grid sx={{ flexGrow: 1 }} container spacing={4}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        {listPosts ? listPosts.map((post, index) => {  return  <Grid key={post} item>
                            <Card sx={{ width: 275,height:160}} variant="outlined"><Post post={post} key={index} /></Card>
                       </Grid> }) : " "}
                        
                    </Grid>
                </Grid>
            </Grid>

            {/* {listPosts ? listPosts.map((post, index) => {
                    return <Card  sx={{ maxWidth: 275 }} variant="outlined"><Post post={post} key={index} /></Card>
                }) : " "}
            </div> */}
        </>
    )
}
export default GetAllPosts

