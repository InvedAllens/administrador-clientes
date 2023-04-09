import React from 'react'
import {Outlet,Link, useLocation} from 'react-router-dom'

const Layout = () => {
    const location=useLocation()
  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-500 px-5 py-10'>
            <h2 className='text-4xl font-bold text-center text-gray-100'>CRM-Clientes</h2>
            <nav className='mt-3' >
                <Link 
                    className={`${location.pathname=='/' ? 'text-gray-700 font-bold' : 'text-gray-100'} block text-gray-100 hover:text-gray-700 text-xl text-center mt-2`} 
                    to='/'>
                        Inicio
                </Link>
                <Link 
                    className={`${location.pathname=='/clientes/nuevo' ? 'text-gray-700 font-bold' : 'text-gray-100'} block text-gray-100 hover:text-gray-700 text-xl text-center mt-2`} 
                    to='/clientes/nuevo'>
                        Nuevo Cliente
                </Link>
            </nav>
        </aside>
        <main className='md:w-3/4 p-10 md:h-screen overflow-y-scroll'>
            <Outlet/>
        </main>
    </div> 
  )
}

export default Layout