import { useState, useEffect } from 'react';
import Axios from "axios"
Axios.defaults.baseURL='http://localhost:1315/api'
export const getAllUsers=()=>{

Axios.get('/users').then(res => {
    console.log(res);
    console.log(res.data);
    dispatch(res)
  })


}