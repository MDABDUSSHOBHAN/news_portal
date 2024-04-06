import React from 'react';
import image from '../../assets/n3.png'
import image1 from '../../assets/n4.png'
import image3 from '../../assets/n2.png'
import Stack from 'react-bootstrap/Stack';
const Mark = () => {
    
    return (
        <div direction="horizontal" className='h-100' gap={3}>
            <img src={image} alt="" />
            <img  src={image1} alt="" />
            <img src={image3} alt="" />
        </div>
    );
};

export default Mark;