import { Carousel } from 'react-bootstrap'
import React, { Fragment } from 'react'
import Video from './Video'
import GetAllStudents from './GetAllStudents'
import FakeGetApi from './FakeGetApi'

function Home() {
  return (
   <React.Fragment>
    <div><Video/></div>
   
    <div>
      <GetAllStudents/>
    </div>
    <div>
    <Carousel>
      <Carousel.Item>
        <img height="500" width="100%"
         
          src="https://www.rgukt.in/images/10.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img height="500" width="100%"
         
          src="http://3.bp.blogspot.com/-tEnXS-6jhzY/Tk_ry8WC1UI/AAAAAAAAADw/cufIWVsnERg/w1200-h630-p-k-no-nu/rgukt%2Bclass%2Brooms.jpeg"
          alt="Second slide"
        />

     
      </Carousel.Item>
      <Carousel.Item>
        <img height="500" width="100%"
        
          src="https://images.tv9telugu.com/wp-content/uploads/2022/03/rgukt-basar.jpg"
          alt="Third slide"
        />

   
      </Carousel.Item>
    </Carousel>

    </div>
    <div><FakeGetApi/></div>
    
   </React.Fragment>
  )
}

export default Home