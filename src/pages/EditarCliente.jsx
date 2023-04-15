import React from 'react'
import { Form, useActionData, useLoaderData, useNavigate ,redirect} from 'react-router-dom'
import { actualizarCliente, obtenerCliente } from '../data/clientes'
import Formulario from '../components/Formulario'
import Error from '../components/Error'

export async function loader({params}){
    // console.log(params)
    const cliente=await obtenerCliente(params.idCliente)
     if(Object.keys(cliente).length===0){
         throw new Response('',{
            status:404,
            statusText:'No se enecontraron resultados'
         })

     }
    return cliente
}
export async function action({params,request}){
    // e.preventDefault()
    const datos=await request.formData()
    const datosForm=Object.fromEntries(datos)
    const errores=[]
    if(Object.values(datosForm).includes('')){
      errores.push('Todos los campos son obligatorios')
    }
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
    if(!regex.test(datosForm.email)){
      errores.push('El email no es valido')
    }
    if(Object.keys(errores).length){
      return errores
    }
    await actualizarCliente(params.idCliente,datosForm)
    return redirect('/')
    
  }

const EditarCliente = () => {
    const cliente=useLoaderData()
    const errores=useActionData()
    const navigate=useNavigate()
    // console.log(datosClientes)
  return (
    <>
    <h2 className='font-black text-3xl text-gray-700'>Edicion de Cliente</h2>
    <p className='mt-3 text-center font-medium text-lg'>Modifique el/los campos del cliente </p>
    <div>
      <button 
        className='bg-main text-clear px-3 py-1 font-bold uppercase mt-2 mb-2 hover:brightness-110'
        onClick={()=>navigate('/')}
      >
        Volver
      </button>
    </div>
    <div className='bg-white-alt shadow rounded-md md:w-2/3 mx-auto px-5 py-5'>
      {errores?.length && errores.map((error,i)=><Error key={i}>{error}</Error>)} 
      {/* {errores?.length && window.scrollTop} */}
      <Form 
        method='POST'
        noValidate
        >
        <Formulario
          cliente={cliente}
        />
        <input 
          type="submit" 
          className='mt-5 w-full bg-main p-3 uppercase font-bold text-clear text-lg hover:brightness-125 hover:cursor-pointer'
          value={'Guardar Cambios'}
        />
      </Form>

    </div>
    </>
  )
}

export default EditarCliente