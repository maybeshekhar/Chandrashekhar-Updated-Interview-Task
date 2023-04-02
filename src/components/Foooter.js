import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaRedoAlt } from 'react-icons/fa';


const Foooter = () => {
  return (
    <div> 
<div align='center'>

<Button variant="light"> <FaRedoAlt /> Load More</Button>{' '}
</div>
<br /> <br />

         <Card className="text-center">
     
      <Card.Body>
        <Card.Title>Quick Links</Card.Title>
        <br />
        <Card.Title> <b> About XLRI | All Programs | Key Benefits | Contact Us </b></Card.Title>
        <br /> 
        <h6>Terms & Conditions</h6>
        <br />
        <Card.Text>
          Follow Us On
        </Card.Text>
        <Card.Text>
        <a href="www.linkedin.com">
        <FaLinkedin />
        </a>
          | 
          <a href="www.instagram.com">
          <FaInstagram /> 
          </a>
         | 
         <a href="www.facebook.com">
         <FaFacebookSquare />
         </a>
         
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">© 2023 XLRI - Xavier School of Management. All rights reserved. 
</Card.Footer>
    </Card>
    </div>
  )
}

export default Foooter