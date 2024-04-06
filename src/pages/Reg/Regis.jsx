import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdAppRegistration } from "react-icons/md";
import { Authcontext } from '../../Provider/Authprovder';
const Regis = () => {

 const {createuser} = useContext(Authcontext);
 const [accept,setAccept] = useState(false);
    const Createuser = event =>{
    
        event.preventDefault();
       const  form = event.target;
       const name = form.name.value;
       const photo = form.photo.value;
       const email = form.email.value;
       const password = form.password.value;

       console.log( name,photo,email,password);
       createuser(email,password)
       .then(result =>{

        const createUser = result.user;
        console.log(createUser);
       })
       .catch(error => {
        console.log(error);
       })

      

       console.log(form);


    }
    const handelbtn = event =>{


        setAccept(event.target.checked);
     
    }


    return (
        <div>
            <h4 className='text-danger'>Welcome To Registration <MdAppRegistration /></h4>
            <Container className='w-25 mx-auto'>
                 
                 <Form onSubmit={Createuser}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Name</Form.Label>
                         <Form.Control type="name" name='name' required placeholder="Enter name" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Photo URL</Form.Label>
                         <Form.Control type="photo" name='photo' required placeholder="Enter URL" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" name='email' required placeholder="Enter email" />
                     </Form.Group>
 
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" name='password' required placeholder="Password" />
                     </Form.Group>
 
                     <Form.Group  className="mb-3" controlId="formBasicCheckbox">
                     
                         <Form.Check type="checkbox"
                         onClick={handelbtn}
                          label={<>Accecpt <Link to="/terms">trum and condition</Link></>} />
                     </Form.Group>
                     <Button variant="primary" disabled={!accept} type="submit">
                         Registor
                     </Button>
 <br/>
                     <Form.Text className="text-danger">
                            
                         </Form.Text>
 
                         <Form.Text className="text-success">
                             
                         </Form.Text>
                         <br/>
                        <small><p>Already have an account? <Link to="/login">Login</Link> </p></small> 
                 </Form>
 
                 </Container>
        </div>
    );
};

export default Regis;