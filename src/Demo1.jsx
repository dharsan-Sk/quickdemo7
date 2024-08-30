import React from 'react';
import { Navbar, Nav,  Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function Demo1() {
  return (
    <div className='ofxy'>
      <div className="row ml100">
        <div className="col-12 col-sm-4 mfdr mw100">
          <Navbar expand="lg ">
            <Container>
              <Navbar.Brand href="#"><h3>MED</h3></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
              <Navbar.Collapse id="navbarNavAltMarkup">
                <Nav className="me-auto">
                  <Nav.Link href="#" className='ml10px'>About</Nav.Link>
                  <Nav.Link href="#"className='ml10px'>Service</Nav.Link>
                  <Nav.Link href="#"className='ml10px'>Doctor</Nav.Link>
                  <Nav.Link href="#"className='ml10px'>Blog</Nav.Link>
                  <Nav.Link href="#"className='ml10px'>Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="mh100"></div>
          <h6 className="cr">MEDICAL</h6>
          <p style={{ lineHeight: '1.5' }}></p>
          <p className="head">Healthcare  Solutions</p>
          <p style={{ lineHeight: '1.5' }}></p>
          <p>peep at some distance orb has power to 
            raise and purify our thoughts like a strain 
            of sacred music, or anobel picture</p>
          <button className="button1 w10 mt-4 p-1 mbm10 tb">Find doctors</button>
        </div>
        <div className="col-12 col-sm-8  mfdr  bgid">
           {/* <button className='abutton fl  brn bw120px p-1'>Appoinment</button> */}
          
        </div>
      </div>
      <div className="h100"></div>
    </div>
  );
}

export default Demo1;
