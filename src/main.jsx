import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import Authprovder from './Provider/Authprovder.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Authprovder>
 <RouterProvider router={router}></RouterProvider>
</Authprovder>
  


  
    
  </React.StrictMode>,
)
