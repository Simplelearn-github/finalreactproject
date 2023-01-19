import axios from 'axios'
import React, { useState } from 'react'
import '../App.css'

function AddStudent() {
  const[id,setId]=useState('')
  const[title,setTitle]=useState('')
  const[body,setBody]=useState('')
 
  const submitHandler=(e)=>{
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts/',{id,title,body})
    .then(res=>{
      alert('data posted Successfully',res)
    })
    .catch(res=>{
      alert('Unable to post Data',res)
    })

  }
  return (
    <div className='addStudent'><center>
      <form onSubmit={submitHandler}>
       <table>
        <tr>
          <th><label>ID:</label></th>
          <td><input type="number"name='id' value={id} onChange={(e)=>setId(e.target.value)} /></td>
        </tr><br/>
        <tr>
          <th><label>Name:</label></th>
          <td><input type="text" name='id' value={title} onChange={(e)=>setTitle(e.target.value)}/></td>
        </tr><br/>
        <tr>
          <th><label>DIST:</label></th>
          <td><input type="text" name='id' value={body} onChange={(e)=>setBody(e.target.value)}/></td>
        </tr><br/>
        
        <tr>
          <th></th>
          <td style={{float:"right"}}><input type="submit" style={{backgroundColor:"green",color:"white"}}/></td>
        </tr>
       </table>

      </form></center>
    </div>
  )
}

export default AddStudent