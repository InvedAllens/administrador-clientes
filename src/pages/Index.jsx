import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Cliente from '../components/Cliente';
import { obtenerClientes } from '../data/clientes.js';


export async function loader(){
    const clientes = obtenerClientes()
    return clientes
}
const Index = () => {
    const clientes=useLoaderData()
    //console.log(clientes)
  return (
    <>
       <h1 className='font-bold text-3xl text-gray-700'>Clientes</h1> 
       <p className='mt-3 text-xl'>Adminstra tus clientes</p>
       {
        clientes.length>0 ? (
            <table className='w-full bg-white shadow mt-5 table-auto'>
                <thead className='bg-main text-clear'>
                    <tr>
                        <th className='p-2 text-xl'>Cliente</th>
                        <th className='p-2 text-xl'>Contacto</th>
                        <th className='p-2 text-xl'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map(cliente=>(
                            <Cliente
                                cliente={cliente}
                                key={cliente.id}
                             />
                        ))
                    }
                    
                </tbody>
            </table>
        ) :(<p>No hay clientes Aún</p>) 
       }
    </>
  )
}
export default Index