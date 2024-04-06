import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoLogInSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  { Authcontext } from '../../Provider/Authprovder';
const Login = () => {

const {login} = useContext(Authcontext);
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || 'catagorys/0';
console.log('login page location', location);
    const handelLogin = event =>{

        event.preventDefault();
        const  form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);
        login(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            form.reset();
            navigate(from);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        }



    return (
        <div>
            <div >
                <h3 className='text-success '>Login Now! <IoLogInSharp /></h3>
                <Container className='w-25 mx-auto'>
                 
                <Form onSubmit={handelLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        login
                    </Button>
<br/>
                    <Form.Text className="text-danger">
                           
                        </Form.Text>

                        <Form.Text className="text-success">
                            
                        </Form.Text>
                        <br/>
                       <small><p>Don't have an account? <Link to="/registation">Registor</Link> </p></small> 
                </Form>

                </Container>
               
            </div>

        </div>
    );
};

export default Login;