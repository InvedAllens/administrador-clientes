import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import ClienteNuevo from './pages/ClienteNuevo'
import Index ,{loader as clienteLoader} from './pages/Index'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Index/>,
        loader:clienteLoader

      },
      {
        path:'/clientes/nuevo',
        element:<ClienteNuevo/>
      }
    ]

  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)