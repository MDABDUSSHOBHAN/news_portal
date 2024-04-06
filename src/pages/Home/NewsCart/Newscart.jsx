import moment from 'moment';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaBeer, FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar, FaYahoo } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
const Newscart = ({ news }) => {
    const { _id, title, details, img, image_url, author, total_view, rating, published_date, others_info } = news;
    
    return (
        <div className='mb-3'>
            <Card >
                <Card.Header as="h5" className='d-flex align-items-center ' >
                    <Image style={{ height: '40px' }} src={author?.img} rounded />
                    <div className='ps-2 flex-grow-1'  style={{ fontSize: '10px' }}  >
                        <p className='mb-0'>{author?.name}</p>
                        <p><small>{moment(published_date).format('MMMM Do YYYY, h:mm:ss a')}</small></p>
                    </div>
                    <div>
                    <FaBookmark /><FaShareAlt/> 
                                           
                    </div>



                </Card.Header>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Image src={image_url} fluid />;
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>
                        }
                    </Card.Text>
                    <Card.Footer className='text-muted d-flex'>
                      <div className='flex-grow-1 align-items-center'>
                      <Rating
                      
                      placeholderRating={rating?.number}
                      
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                      fullSymbol={<FaStar ></FaStar>}
                      
                      
                      />
                          <span>  {rating?.number}</span>        
                      </div>
                      <div>
                           <FaEye></FaEye>{total_view}
                      </div>



                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Newscart;