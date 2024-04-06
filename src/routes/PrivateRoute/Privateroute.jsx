import React, { useContext } from 'react';
import  { Authcontext } from '../../Provider/Authprovder';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Privateroute = ({children}) => {

    const {user,loading} = useContext(Authcontext);

    const location = useLocation();
    console.log(location);
    if(loading){

        return <div>

        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="danger" />

        </div> 
    }

    if(user) {

        return children;
    }
    return (
       <Navigate state={{from:location}} to="/login" replace ></Navigate>
    );
};

export default Privateroute;