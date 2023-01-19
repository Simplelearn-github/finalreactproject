import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'jquery/dist/jquery'
import $ from 'jquery'

function GetAllStudents() {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/students')
    .then(res=>{
      setData(res.data)
    })
    .catch(res=>res)
    setInterval(()=>{
      $(document).ready( function () {
        $('#tabless').DataTable();
    } );
    },1000)
  })
  return (
    <div>
      <table id="tabless">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Dist</th>
            <th>Branch</th>
           
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
     
    </tr>
  )
})
          }
        </tbody>
      </table>
    </div>
  )
}

export default GetAllStudents