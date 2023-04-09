import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Cliente from '../components/Cliente';


export function loader(){
    const clientes = [
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@juan.com",
            empresa: 'Codigo Con Juan'
        },
    ];
    return clientes
}
const Index = () => {
    const clientes=useLoaderData()
    console.log(clientes)
  return (
    <>
       <h1 className='font-bold text-2xl text-gray-700'>Clientes</h1> 
       <p className='mt-3 text-xl'>Adminstra tus clientes</p>
       {
        clientes.length>0 ? (
            <table className='w-full bg-white shadow mt-5 table-auto'>
                <thead className='bg-blue-500 text-gray-100'>
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