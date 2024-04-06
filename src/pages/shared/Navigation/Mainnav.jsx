import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Provider/Authprovder';
import { FaUserCheck } from 'react-icons/fa';

const Mainnav = () => {
    const {user,logOut} = useContext(Authcontext);
    const handlelogout = () =>{


        logOut()
        .then(()=>{})
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className='container'>
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

                            user? <Button onClick={handlelogout} variant="secondary">Logout</Button>:
                            <Link to="/login">   <Button variant="secondary">Login</Button></Link>
                         
                          }
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </div>
    );
};

export default Mainnav;