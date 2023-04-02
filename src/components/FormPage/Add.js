import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header';
import DragnDrop from './ImageDrag.js/DragnDrop';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Add = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin_profile, setLinkedin_profile] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked')
    axios.post('http://localhost:3006/students',{
      name:name,
      email:email,
      linkedin_profile:linkedin_profile,
    })
  }
  
  return (
   
    <div>
   <Header />
    
    <div style={{paddingTop: '3rem'}} 
    className='container' align='center'>
    <h5>Add Student information</h5> <br /> <br />
        <Form>
      <Form.Group className="mb-3">
        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
        <br />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="Enter Mobile No." />
      </Form.Group>
      <br />
      <Form.Group className="mb-3">
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
      </Form.Group>
      <br />
      <Form.Group className="mb-3">
        <Form.Control onChange={(e) => setLinkedin_profile(e.target.value)} type="text" placeholder="Enter LinkedIn Url" />
      </Form.Group>
      <br />
      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="Enter Student ID No." />
      </Form.Group>
      <br />
      <Form.Group className="mb-3">
        <DragnDrop/>
      </Form.Group>
  <br /> <br />
   <Link to={'/'}>
      <Button onClick={handleSubmit} variant="outline-success" type="submit">
        Done
      </Button>
   </Link>

      <br /> <br />
    </Form>
    </div>
    </div>
  );
}


export default Add