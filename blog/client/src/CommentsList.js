import axios from 'axios';
import React,{useState,useEffect} from 'react';

export default({postId})=>{ 
 const [comments,setComments]=useState([]);
 const fetchData=async()=>{
    const res=await axios.get('http://localhost:4001/posts/${postId}/comments');
    setComments(res.data);
 }
 useEffect(()=>{
    fetchData(); 
 },[]);
 const rendredComments=comments.map(comment=>{
    return(
       <li key={comment.id}>{comment.content}</li>
    );
 })
return(
    <>
    <ul>
        {rendredComments}
    </ul>
    </>
);
};