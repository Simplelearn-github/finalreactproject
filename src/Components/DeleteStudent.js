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
    axios.get(' http://localhost:3000/students')
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
    axios.delete(`http://localhost:3000/students/${stuid}`)
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
            <th>Name</th>
            <th>DIST</th>
            <th>BRANCH</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
data.map((stu)=>{
  return(
    <tr key={stu.id}>
      <td>{stu.id}</td>
      <td>{stu.Name}</td> 
      <td>{stu.Dist}</td>
      <td>{stu.Branch}</td>
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