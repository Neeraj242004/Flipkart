import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Flipkart from '../Flipkart/Flipkart'
import Admin from '../AdminPanel/Admin'
import NotFound from '../Component/NotFound'


const RoutingArea = () => {
    const ways = createBrowserRouter([
        {path:"/",element:<App/>,children:[
          {path:"/",element:<Flipkart/>},
          {path:"/admin",element:<Admin/>},
        ]},
        {path:"/*",element:<NotFound/>},
      
    ])
  return (
    <RouterProvider router={ways}>

    </RouterProvider>
  )
}

export default RoutingArea;