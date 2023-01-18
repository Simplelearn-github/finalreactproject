import React, { Fragment } from 'react'
import { Col,  Row } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import './Top.css'

const Top = () => {
  return (
    <Fragment >
      <Row className='top'>
        <Col  sm={6}><img height='110px' width='100%' src='https://education.sakshi.com/sites/default/files/images/2022/09/07/admissions-images-rguktcet-1662552764.jpg' alt='text/notneeded'/></Col>
        <Col className='cols' sm={2}><button style={{backgroundColor:'red',color:'White'}}>ADMISSIONS <br/>
        2022-2023</button></Col>
        <Col className='cols' sm={2}>TS EAMCET/ECET/ICET:<br/>
<b style={{color:"red"}}>BIET</b><br/>
TS PGECET:<br/>
<b style={{color:"red"}}>BIET1</b></Col>
<Col className='cols'><Icon name='call'/>  8106069682<br/>
<Icon name='mail'/>b151516@rgukt.ac.in</Col>
      </Row>
     
    </Fragment>
  )
}

export default Top