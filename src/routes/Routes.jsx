import {Navigate, createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Catagory from "../pages/Home/Catogory/Catagory";
import News from "../pages/News/News/News";
import NewsLayout from './../layout/NewsLayout';
import LoginLayout from "../layout/Login/LoginLayout";
import Login from "../pages/Login/Login";
import Regis from "../pages/Reg/Regis";
import Privateroute from "./PrivateRoute/Privateroute";
import Trums from "../pages/shared/Trums/Trums";





const router = createBrowserRouter([



  {
    path: "/",
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to="catagorys/0"></Navigate>

      },
      {
          path:'/login',
          element:<Login></Login>
      },
      {
        path:'/registation',
       element:<Regis></Regis>
      },
      {
        path : 'terms',
        element:<Trums></Trums>
      }
   
    ]
  },
    {
      path: "/",
      element: <Main></Main>,
      children:[

        {
          path:'/',
          element:<Home></Home>

        },
        {
          path:'/catagorys/:id',
          element: <Catagory></Catagory> ,
          loader : ({params}) => fetch(`https://myapp-hhjqi4se0-mdabdusshobhans-projects.vercel.app/catagories/${params.id}`)
        }
      ]
    },
    // This is another path...
  {
  
    path: 'news',
    element:<NewsLayout></NewsLayout>,
    children:[
    {
      path:':id',
      element:<Privateroute><News></News></Privateroute>,
        loader: ({params}) => fetch(`https://myapp-hhjqi4se0-mdabdusshobhans-projects.vercel.app/news/${params.id}`)
    }

    ]
  }


  ]);
  export default router