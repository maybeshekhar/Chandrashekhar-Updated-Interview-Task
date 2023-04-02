import React from 'react'
import Button from 'react-bootstrap/Button';
import { FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <div className='container'>
    <div align='center' style={{paddingTop: '100px'}}>
        <h4> <b> Campus Ambassadors</b></h4>
        <br />
        <p>XLRI Online Learning presents to you the Batch Ambassadors for the 2 year Online Postgraduate Diploma (Business <br /> Management, Finance, Human Resource). PGD aspirants can get in touch with the batch ambassadors <br />
for any queries related to (XLRI Online Learning - 2 year Online Flagship program)</p>
<br />
<Button variant="outline-success"> <FaWhatsapp /> Join Our WhatsApp group</Button>{' '}
</div>

    </div>
  )
}

export default HeroSection