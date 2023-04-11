import React from 'react'

const Error = ({children}) => {
  return (
    <div className='p-2 text-center text-white font-bold uppercase bg-red-p my-2'>{children}</div>
  )
}

export default Error