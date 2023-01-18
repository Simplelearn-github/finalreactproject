import React, {  useState } from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Login() {
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const Navigate=useNavigate()
   const submitHandler=(e)=>{
    e.preventDefault()
    if(name==="Naveen" && password==="B789@")
      
            {
               Navigate('/LogHome')
            }
            else
           
                {
                    console.log("Fail");
                }
   }
  return (
    <form onSubmit={submitHandler}>
      <center>
    <Card className='card' style={{ width: '23rem' }}>
      <Card.Img src='https://static.vecteezy.com/system/resources/previews/010/925/778/original/colorful-welcome-design-template-free-vector.jpg'/>
      <Card.Body>
        
        <Card.Title>Login :</Card.Title>
        <Card.Text>
         <input type="text" name="name"  placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </Card.Text>
        <Card.Text>
         <input type="password" name="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
         </Card.Text>
        <button type='submit'>submit</button>
      </Card.Body>
      
    </Card>
    </center>
  
    </form>
  )
}

export default Login