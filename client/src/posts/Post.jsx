import { AiFillDelete } from "react-icons/ai";
import useFunction from "../costumHooks/costumhook";

import { useState } from "react";
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UpdateDialogPost from "./updatePost";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { Button } from "@mui/material";


const Post = ({ post }) => {

  const {deleteItem, getdata, updateItemById } = useFunction()
  const [likes,setLikes]=useState(0)
  const [dislike,setDislike]=useState(0)
  const [flaglike,setFlaglike]=useState(false)
  const [flagDislike,setFlagDislike]=useState(false)

function changel(){
    setLikes(likes+1)
}
function changed(){
    setDislike(dislike+1)
}

//  updateItemById((`http://localhost:1325/api/todos/${task._id}`))
//     getdata("http://localhost:1325/api/todos")

  
  return (<>
    <React.Fragment >
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="ButtonText" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2">
       
          <br />
          {post.body}
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={async () => { await deleteItem(`http://localhost:1325/api/posts/${post._id}`, post._id);await getdata("http://localhost:1325/api/posts") }} className="deletebot"><AiFillDelete /></Button>
       < UpdateDialogPost post={post}/>
        <Button  
     
        onClick={()=>{{changel()};setFlaglike(true)}}  className="deletebot"> <BiLike />{flaglike? <>{`  ${likes }`}</>:""} </Button>
        <Button 
      
         onClick={()=>{{changed()};setFlagDislike(true)}}  className="deletebot"><BiDislike />{flagDislike? <>{dislike}</>:""}</Button>
      </CardActions>
    </React.Fragment>

  </>)
}
export default Post