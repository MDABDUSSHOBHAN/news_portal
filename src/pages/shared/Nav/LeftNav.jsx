import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaBeer, FaGoogle, FaGithub,FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';
import Qzoon from '../Qzone/Qzoon';
const LeftNav = () => {
    return (
        <div>
            <div className=' mx-auto'>
                <h4>Login With</h4>
                <Button className='mb-2' variant="outline-primary"> <FaGithub /> Login with Github </Button>{' '}<br />
                <Button variant="outline-secondary"> <FaGoogle /> Login with Google </Button>{' '}

            </div>

            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter />Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
                    
                </ListGroup>
            </div>
            <div className='mt-4'>
                <Qzoon></Qzoon>
            </div>

        </div>
    );
};

export default LeftNav;