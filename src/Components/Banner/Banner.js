import React from 'react';
import './Banner.css'
import {Navbar,Container,FormControl,Form} from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
        //   className="me-2"
          aria-label="Search"
        />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> 
        </div>
    );
};

export default Banner;