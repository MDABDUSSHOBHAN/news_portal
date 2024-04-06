import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { CgDanger } from "react-icons/cg";
const Trums = () => {
    return (
        <div className='container'>
            <h4 ><span className='bg-danger text-white'><CgDanger /></span> Accecept Trum & Condition</h4>
             <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>

    <p>Go back <Link to='/registation'>Registor</Link></p>
        </div>
    );
};

export default Trums;