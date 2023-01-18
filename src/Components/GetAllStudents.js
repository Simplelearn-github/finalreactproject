import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'jquery/dist/jquery'
import $ from 'jquery'

function GetAllStudents() {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setData(res.data)
    })
    .catch(res=>res)
    setInterval(()=>{
      $(document).ready( function () {
        $('#tables').DataTable();
    } );
    },1000)
  })
  return (
    <div>
      <table id="tables">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
           
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