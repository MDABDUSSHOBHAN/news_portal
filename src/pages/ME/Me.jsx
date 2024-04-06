import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from '../../assets/1.png';
import data1 from '../../assets/2.png';
import data3 from '../../assets/3.png';
const Me = () => {
    return (
        <div className='gap-4'>
            <Row xs={1} md={2} lg={1} className="g-4">

                <Col >
                    <Card>
                        <Card.Img variant="top" src={data} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <Row xs={1} md={2} lg={1} className="g-4">

                <Col >
                    <Card>
                        <Card.Img variant="top" src={data1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <Row xs={1} md={2} lg={1} className="g-4">

                <Col >
                    <Card>
                        <Card.Img variant="top" src={data3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Me;