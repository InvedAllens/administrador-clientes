import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error=useRouteError()
  return (
    <div className='space-y-5'>
        <h2 className='text-center text-xl text-main font-bold'>CRM-Cliente</h2>
        <p className='py-3 text-lg font-bold text-center text-red-p'> Succedio un Error</p>
        <p className='py-3 text-lg font-medium text-center'> {error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage