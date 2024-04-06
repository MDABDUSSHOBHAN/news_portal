import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Newscart from '../NewsCart/Newscart';


const Catagory = () => {
    const {id} =useParams();
    const catagoryNews = useLoaderData();
    return (
        <div>
            <h4>This  Catagory News Section {catagoryNews.length}</h4>

            {
                catagoryNews.map(news =><Newscart news={news} key={news._id} ></Newscart>)
            }

        </div>
    );
};

export default Catagory;