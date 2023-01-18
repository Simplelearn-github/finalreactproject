import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Icon } from 'semantic-ui-react'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'jquery/dist/jquery'
import $ from 'jquery'

function EditStudent() {
  const[data,setData]=useState([])
  const[id,setId]=useState('')
  const[Name,setName]=useState('')
  const[Dist,setDist]=useState('')
  const[Branch,setBranch]=useState('')
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
    
  function editHandler(stuid){
    axios.get('http://localhost:3000/students/'+stuid)
    .then(res=>{
      setId(res.data.id)
      setName(res.data.Name)
      setDist(res.data.Dist)
      setBranch(res.data.Branch)
    })
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:3000/students/'+id,{id,Name,Dist,Branch})
    .then(res=>{
      alert('data posted Successfully',res)
    })
    .catch(res=>{
      alert('Unable to post Data',res)
    })

  }

  return (
    <div> <center><form onSubmit={submitHandler}>
    <table>
     <tr>
       <th><label>ID:</label></th>
       <td><input type="number"name='id' value={id} onChange={(e)=>setId(e.target.value)} /></td>
     </tr><br/>
     <tr>
       <th><label>Name:</label></th>
       <td><input type="text" name='id' value={Name} onChange={(e)=>setName(e.target.value)}/></td>
     </tr><br/>
     <tr>
       <th><label>DIST:</label></th>
       <td><input type="text" name='id' value={Dist} onChange={(e)=>setDist(e.target.value)}/></td>
     </tr><br/>
     <tr>
       <th><label>Branch:</label></th>
       <td><input type="text" name='id' value={Branch} onChange={(e)=>setBranch(e.target.value)}/></td>
     </tr><br/>
     <tr>
       <th></th>
       <td style={{float:"right"}}><input type="submit" style={{backgroundColor:"green",color:"white"}}/></td>
     </tr>
    </table>

   </form></center>
   <table id="tables">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DIST</th>
            <th>BRANCH</th>
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
      <td><button onClick={()=>editHandler(stu.id)} style={{color:"red",border:"0px solid white"}}><Icon  name='edit'/></button></td>

    </tr>
  )
})
          }
        </tbody>
      </table>
   </div>
   
  )
}

export default EditStudent