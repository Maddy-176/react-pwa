import React from 'react';
import Button from '../reusableComponents/Button';
import { useNavigate } from 'react-router-dom';
import useFetch from '../customHooks/useFetch';
import "../styles/display.css";

const ViewUsers=()=> {
  const [data]=useFetch("users")

  const navigate= useNavigate();


  return (
<>
    <h2>User Details</h2>
    <div claasName="navigate-btn-container">
    <Button className={"navigate-back-btn"} btnTxt={"Back"}  onClick={()=>navigate("/")}/>

    </div>
    <div>
    {data?<table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email Address</th>
          <th>Phone#</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user)=>
        <tr key={user.id}>
          <td>{user.name}</td>
          <td >{user.username}</td>
          <td >{user.email}</td>
          <td >{user.phone}</td>

        </tr>
        )}
      </tbody>

    </table>
:"Loading..."}
    </div>
    </>  )
}

export default ViewUsers