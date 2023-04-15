import React from 'react'
import {Form, redirect, useActionData, useNavigate} from 'react-router-dom'
import { eliminarCliente } from '../data/clientes'


export async function action({params}){
    if(confirm('¿Desea Eliminar este cliente?')){
        await eliminarCliente(params.idCliente)
    }
    return redirect('/')
}

const Cliente = ({cliente}) => {
    const {nombre,email,empresa,telefono,id}=cliente
    const redirect=useNavigate()
  return (
    
    <tr className='border-b'>
        <td className='p-6 space-y-2'>
            <p className='text-xl text-gray-700 text-center'>{nombre}</p>
            <p className='text-center'>{empresa}</p>
        </td>
        <td>
            <p className='text-gray-700 text-center'><span className='font-medium '>Email: </span>{email}</p>
            <p className='text-gray-700 text-center'><span className='font-medium '>Tel: </span>{telefono}</p>
        </td>
        <td className='p-6 flex gap-3 justify-center'>
            <button 
                type='button'
                className='text-blue-700 hover:brightness-150 uppercase font-medium text-xs text-center hover:cursor-edit'
                onClick={()=>redirect(`/clientes/${id}/editar`)}
            >
                Editar
            </button>
            <Form
                method='DELETE'
                action={`/clientes/${id}/eliminar`}
            >
            <button
                type='submit'
                className='text-red-700 hover:brightness-125 uppercase font-medium text-xs text-center hover:cursor-trash'
             >
                Eliminar
            </button>
            </Form>
            
        </td>

    </tr>
  )
}

export default Cliente
