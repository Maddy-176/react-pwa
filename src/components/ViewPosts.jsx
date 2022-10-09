import React from 'react';
import Button from '../reusableComponents/Button';
import useFetch from '../customHooks/useFetch';
import { useNavigate } from 'react-router-dom';
import "../styles/display.css"

const ViewPosts=()=>{
  const {data,isOffline}=useFetch("posts")
  
  const navigate= useNavigate();


  return (
    <>
       
    <h2>Posts List</h2>
    <div style={{color:"red", visibility:isOffline?"block":"hidden" }}>You are viewing page in offline mode</div>
    <div className="navigate-btn-container">
    <Button className={"navigate-back-btn"} btnTxt={"Back"}  onClick={()=>navigate("/")}/>
    </div>
    <div>
    {data?<table className="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Descreption</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post,index)=>
        <tr key={index}>
          <td>{post.title}</td>
          <td >{post.body}</td>
        </tr>
        )}
      </tbody>

    </table>:"Loading..."}
    </div>
 
  


    </>

  )
}

export default ViewPosts