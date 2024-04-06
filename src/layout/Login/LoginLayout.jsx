import React from 'react';
import Mainnav from '../../pages/shared/Navigation/Mainnav';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Mainnav></Mainnav>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;