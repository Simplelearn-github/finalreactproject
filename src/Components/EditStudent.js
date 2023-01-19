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
  const[title,setTitle]=useState('')
  const[body,setBody]=useState('')
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
    
  function editHandler(stuid){
    axios.get('https://jsonplaceholder.typicode.com/posts/'+stuid)
    .then(res=>{
      setId(res.data.id)
      setTitle(res.data.title)
      setBody(res.data.body)
     
    })
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    axios.put('https://jsonplaceholder.typicode.com/posts/'+id,{id,title,body})
    .then(res=>{
      alert('post edited Successfully',res)
    })
    .catch(res=>{
      alert('Unable to edit Data',res)
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
       <th><label>Titl:</label></th>
       <td><input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/></td>
     </tr><br/>
     <tr>
       <th><label>Body:</label></th>
       <td><input type="text" name='body' value={body} onChange={(e)=>setBody(e.target.value)}/></td>
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