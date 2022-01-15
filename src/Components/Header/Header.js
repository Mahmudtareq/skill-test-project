import React from 'react';
import './Header.css';
import {Navbar,Container} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
<Navbar className="title" variant="light">
  <Container fluid>
    <Navbar.Brand>
    <div className="mobile">
						<a href="#" className="icon"><i className="fas fa-mobile"></i><span>+8801XXX-XXXXXX</span></a>
					</div>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className=" justify-content-end">
      <Navbar.Text>
       <div className="social">
						<ul className=' d-flex'>
							<a href="#" className="icon"><li><i className="fab fa-facebook"></i></li></a>
							<a href="#" className="icon"><li><i className="fab fa-twitter-square"></i></li></a>
							<a href="#" className="icon"><li><i className="fab fa-instagram"></i></li></a>
						</ul>
					</div>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;