import React from 'react'
import { Col,  Row } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import Path from './welcome.jpg'
import './LogHome.css'

import { NavLink, Outlet } from 'react-router-dom'


const LogHome = () => {
  return (
    <div>
      <Row className='Home'>
      <Col md='3'>
       <img height="150px" width="50%" src='https://rguktn.ac.in/assets_new/images/logo.png' alt='text/not loaded'/>
       <ul>
        <li>
            <NavLink to='AddStudent' ><Icon  name='add user' style={{color:'blue'}} /><b style={{color:"black"}}>AddStudents</b></NavLink>
        </li>
        <li>
            <NavLink to='DeleteStudent' > <Icon name="trash"  style={{color:'red'}}/><b style={{color:"black"}}>DeleteStudents</b></NavLink>
        </li>
        <li>
            <NavLink to='EditStudent' ><Icon name='edit' style={{color:'green'}}/><b style={{color:"black"}}>EditStudents</b></NavLink>
        </li>
       </ul>
      
      </Col>
      <Col md='9'>
        <div className="img">
            <img  height="100"   width="100%" src={Path} alt='text/not loaded'/>
            </div>
        <Row>
          <Col >
          
        <Outlet/>
          </Col>
          
        </Row>
      </Col>
    
    </Row>

      </div>
  )
}

export default LogHome