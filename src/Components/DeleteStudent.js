import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Icon } from 'semantic-ui-react'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'jquery/dist/jquery'
import $ from 'jquery'


function DeleteStudent() {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get(' https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setData(res.data)
      setInterval(()=>{
        $(document).ready( function () {
          $('#mass').DataTable();
      } );
      },1000)
    })
   
  })
  function deleteHandler(stuid){
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${stuid}`)
    .then(res=>{
      alert('deleted data successfully',res)
    })
    .catch(res=>{
      alert(' unable to delete data ',res)
    })
  }
  return (
    <div>
      <table id="mass">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
          
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
data.map((stu)=>{
  return(
    <tr key={stu.id}>
      <td>{stu.id}</td>
      <td>{stu.title}</td> 
      <td>{stu.body}</td>
    
      <td><button onClick={()=>deleteHandler(stu.id)} style={{color:"red",border:"0px solid white"}}><Icon  name='trash'/></button></td>
    </tr>
  )
})
          }
        </tbody>
      </table>
    </div>
  )
}

export default DeleteStudent