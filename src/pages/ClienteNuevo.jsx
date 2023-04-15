import React from 'react'
import { useNavigate, Form,useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'
import { registrarCliente } from '../data/clientes'


export async function action({request}){
  // e.preventDefault()
  const datos=await request.formData()
  const datosForm=Object.fromEntries(datos)
  const errores=[]
  if(Object.values(datosForm).includes('')){
    errores.push('Todos los campos son obligatorios')
  }
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  console.log(datosForm.email)
  if(!regex.test(datosForm.email)){
    errores.push('El email no es valido')
  }
  if(Object.keys(errores).length){
    return errores
  }
  await registrarCliente(datosForm)
  return redirect('/')
  
}
const ClienteNuevo = () => {
  const navigate =useNavigate()
  const errores=useActionData()
  const cliente ={}

  return (
    <>
      <h2 className='font-black text-3xl text-gray-700'>Nuevo Cliente</h2>
      <p className='mt-3 text-center font-medium text-lg'>Llene todos los campos para registrar un nuevo cliente </p>
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
        {errores?.length && window.scrollTop}
        <Form 
          method='post'
          noValidate
          >
          <Formulario
            cliente={cliente}
          />
          <input 
            type="submit" 
            className='mt-5 w-full bg-main p-3 uppercase font-bold text-clear text-lg hover:brightness-125 hover:cursor-pointer'
            value={'Registrar Cliente'}
          />
        </Form>

      </div>
    </>
  )
}
export default ClienteNuevo
