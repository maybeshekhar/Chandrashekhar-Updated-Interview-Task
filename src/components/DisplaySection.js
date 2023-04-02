import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch  } from 'react-icons/fa';
import Xcards from './Xcards';
import {Link} from 'react-router-dom'

const DisplaySection = () => {
  return (
    <div>
    <div className='container'>

     <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{width:"25%"}}
            />
            <Button variant="outline-dark"><FaSearch  /></Button>
            <div  style={{ marginLeft: "auto" }}>
             <Link to={`/add`}>
                <Button  variant='outline-primary' >Add</Button>
             </Link>

                &nbsp;
                &nbsp;
                <Link to={`/edit`}>
                <Button  variant='outline-warning' >Edit</Button>
                </Link>

            </div>
          </Form>
    </div> 
    <Xcards />
    </div>
  )
}

export default DisplaySection