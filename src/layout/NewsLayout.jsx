import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../pages/shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftNav from '../pages/shared/Nav/LeftNav';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>

            <Container>

                <Row>
                    {/* <Col lg={3}><RightNav></RightNav></Col> */}
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                </Row>
            </Container>

        </div>
    );
};

export default NewsLayout;