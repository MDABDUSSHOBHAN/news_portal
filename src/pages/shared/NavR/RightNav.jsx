import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Me from '../../ME/Me';

const RightNav = () => {
    const [catagory, setCatagory] = useState([]);

    useEffect(() => {

        fetch('https://myapp-hhjqi4se0-mdabdusshobhans-projects.vercel.app/catagories')
            .then(res => res.json())
            .then(data => setCatagory(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>

      <div className='ps-4 '>
      {
                catagory.map(catagorys =>
                    <p key={catagorys.id}
                    >
                        <Link to={`/catagorys/${catagorys.id}`} className='text-decoration-none'>{catagorys.name}</Link>
                    </p>
                )
                
            }
           
      </div>
      <Me></Me>



        </div>
    );
};

export default RightNav;