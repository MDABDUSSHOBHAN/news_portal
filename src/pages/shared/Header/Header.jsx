
import Button from 'react-bootstrap/Button';
import image from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Mark from '../../../Marquee/Mark1/Mark';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import  { Authcontext } from '../../../Provider/Authprovder';
import { FaUserCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';





const Header = () => {


   
 
    return (
        <div>
            <h4 className='text-center'>This is Header Section</h4>
            <div className='text-center'>
                <img src={image} alt="" />
                <p><small className='text-secondary'>Journalism Without Fear or Favour</small></p>

                <p> {moment().format('MMMM Do YYYY, h:mm:ss a')} </p>
            </div>
            <div className='container d-flex '>
                <Button variant="danger">Latest</Button>{' '}

                <Marquee gradient='100' gradientWidth='10'><Mark></Mark></Marquee>
            </div>
            {/* nav */}
            {/* <div className='container'>
                <Navbar  expand="lg" className="bg-light mb-4">
                    <Container fluid>
                        <Navbar.Brand href="#" className='text-white'>Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav className='mx-auto' >

                                    <Link to="/">Home</Link>
                                    <Nav.Link href="#action2">About</Nav.Link>
                                    <Nav.Link href="#action2">Career</Nav.Link>
                                </Nav>

                            </Nav>
                          {
                            user &&  <Nav.Link href="#" >
                              <FaUserCheck style={{fontSize:'2rem'}} />
                              </Nav.Link>
                          }
                          {

                            user? <Button variant="secondary">Logout</Button>:
                            <Link to="/login">   <Button variant="secondary">Login</Button></Link>
                         
                          }
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div> */}






        </div>
    );
};

export default Header;