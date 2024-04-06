import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../pages/shared/Nav/LeftNav';
import RightNav from '../pages/shared/NavR/RightNav';
import { Outlet } from 'react-router-dom';
import Mainnav from './../pages/shared/Navigation/Mainnav';


const Main = () => {
    return (
        <div>
            <Header></Header>
          <Mainnav></Mainnav>

            <Container>
             
                <Row>
                    <Col lg={3}><RightNav></RightNav></Col>
                    <Col lg={6}><Outlet></Outlet></Col>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                </Row>
            </Container>




         
        </div>
    );
};

export default Main;