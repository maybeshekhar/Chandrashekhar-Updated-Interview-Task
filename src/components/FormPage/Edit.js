import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header';
import DragnDrop from './ImageDrag.js/DragnDrop';

const Edit = () => {
  return (
   
    <div>
   <Header />
    
    <div style={{paddingTop: '3rem'}} 
    className='container' align='center'>
    <h5>Edit Student Information</h5> <br /> <br />
        <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Edit Name" />
        <br />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="Edit Mobile No." />
      </Form.Group>
      <br />
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Edit Email" />
      </Form.Group>
      <br />
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Edit LinkedIn Url" />
      </Form.Group>
      <br />
      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="Edit Student ID No." />
      </Form.Group>
      <br />
      <Form.Group className="mb-3">
        <DragnDrop/>
      </Form.Group>
  <br /> <br />
      <Button variant="outline-success" type="submit">
        Done
      </Button>

      <br /> <br />
    </Form>
    </div>
    </div>
  )
}

export default Edit