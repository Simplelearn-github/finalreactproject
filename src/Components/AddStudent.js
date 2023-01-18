import axios from 'axios'
import React, { useState } from 'react'
import '../App.css'

function AddStudent() {
  const[id,setId]=useState('')
  const[Name,setName]=useState('')
  const[Dist,setDist]=useState('')
  const[Branch,setBranch]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/students/',{id,Name,Dist,Branch})
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
    </div>
  )
}

export default AddStudent