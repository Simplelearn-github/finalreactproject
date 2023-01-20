import axios from 'axios'
import React, { useEffect, useState } from 'react'



function FakeGetApi() {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get(' https://jsonplaceholder.typicode.com/photos')
    .then(res=>{
      setData(res.data)
    })
    .catch(res=>res)
    
  })
  return (
    <div class='container'>
        <div class='row'>

        {
            data.map((stu)=>(
             



                 <div className='col-md-3' style={{padding:'5px'}}> 
               
                <img src={stu.thumbnailUrl} className='card-img-top' alt='' />
               
               </div>
            ))
        }</div>
    </div>
    // <div>
      
    //       {
    //     data.map((stu)=>(
    // <div className='col-md-4'>
    //    <img src={stu.thumbnailUrl} className='card-img-top'/>
          
    // </div>

    
  )
 

   
//     <Grid container spacing={4}>
//     {data.map((stu) => (
//       <Grid item  key={stu.id}>
//         <CardContent image={stu.thumbnailUrl} />
//       </Grid>
//     ))}
//   </Grid>
    
//     <tr key={stu.id}>
//       <Card.Group itemsPerRow={4}>
//     <Card color='red' image={stu.thumbnailUrl} /> &rbrace;

//   </Card.Group>
//     </tr>

}

export default FakeGetApi