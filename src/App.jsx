/* eslint-disable no-unused-vars */
import React from 'react'
import Applayout from './layout/applayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/error';

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Country from "./pages/Country"

import './App.css'
import CountryDetails from './layout/CountryDetails';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Applayout/>,
    errorElement:<Error/>,
    children:[
        {path:'/',
          element:<Home/>
        },
        {path:'/about',
          element:<About/>
        },
        {path:'/country/',
          element:<Country/>
        },
        {path:'/country/:id',
          element:<CountryDetails/>
        },
        {path:'/contact',
          element:<Contact/>
        }
      ]
  },
])

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
