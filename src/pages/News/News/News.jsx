import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Editor from '../Editor/Editor';
const News = () => {
    const news = useLoaderData();
    const { _id, title, details, img, image_url,category_id, author, total_view, rating, published_date, others_info } = news;
    console.log(_id);
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {details}
                    </Card.Text>
                  <Link to={`/catagorys/${category_id}`} ><Button variant="danger"><FaArrowAltCircleLeft /> All Category News</Button></Link>  
                </Card.Body>
            </Card>
            <Editor></Editor>
        </div>
    );
};

export default News;