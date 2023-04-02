import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { FaLinkedin } from 'react-icons/fa';
import './Xcards.css'

const Xcards = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3006/students')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='container'>
   <Row lg={3}>

    {data.map((d, i) => {
       return (
    

   <Col className="d-flex" >

    <Card className='flex-fill'  style={{ margin: '30px' }}>
      <Card.Img variant="top" src= {d.image}/>
      <Card.Body align='center'>
        <Card.Title>{d.name}</Card.Title>
        <Card.Text>
          {d.email}
        </Card.Text>
        <a href={d.linkedin_profile}><FaLinkedin /></a>
      </Card.Body>
    </Card>
    </Col>
       )
    })}

  {/*  <Col className="d-flex" >

    <Card className='flex-fill'  style={{ margin: '30px' }}>
      <Card.Img variant="top" src="https://www.pngfind.com/pngs/m/666-6668342_man-on-laptop-man-with-laptop-png-transparent.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
   </Col>

 */}

   
   </Row>
   </div>
  )
}

export default Xcards