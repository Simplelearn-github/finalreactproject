import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import AddStudent from './AddStudent'
import DeleteStudent from './DeleteStudent'
import EditStudent from './EditStudent'
import Home from './Home'
import LogHome from './LogHome'
import LHome from './LHome'
import Login from './Login'

function Routings() {
  return (
    <div><Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/AboutUs' element={<AboutUs/>}/>
    
    <Route path="LogHome" element={<LogHome/>}>
    <Route path="" element={<LHome/>}/>
    <Route path="AddStudent" element={<AddStudent/>}/>
    <Route path="EditStudent" element={<EditStudent/>}/>
    <Route path="DeleteStudent" element={<DeleteStudent/>}/>
    </Route>
  
   
    

   
    
    
    </Routes></div>
  )
}

export default Routings