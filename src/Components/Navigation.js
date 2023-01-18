import React from 'react'
import { Col,  Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigation = () => {
  return (
<div className='navss'>
        <Row className='rows'>
          <Col sm={1}></Col>
        <Col sm={1} > <NavLink to='/'><h2>Home</h2></NavLink></Col>
        <Col sm={1}><NavLink to='/AboutUs' ><h2>AboutUs</h2></NavLink></Col>
        <Col sm={1}><NavLink to='/ContactUs' ><h2>ContactUs</h2></NavLink></Col>
        <Col sm={2}><NavLink to='/Research' ><h2>Research</h2></NavLink></Col>
        <Col sm={4}></Col>
        <Col sm={1}><NavLink to='/Login'  ><h2>Login</h2></NavLink></Col>
      </Row>
      </div>
  )
}

export default Navigation