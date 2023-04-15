export async function obtenerClientes(){
    const respuesta=await fetch(import.meta.env.VITE_API_URL)
    const resultado=await respuesta.json()
    return resultado

}
export async function obtenerCliente(id){
    const respuesta=await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    
    const resultado=await respuesta.json()
    console.log(resultado)
    return resultado

}

export async function registrarCliente(data){
    try {
        const respuesta=await fetch(import.meta.env.VITE_API_URL,{
            method:'post',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
    
}
export async function actualizarCliente(id, data){
    try {
        console.log(id)
        const respuesta=await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
    
}
export async function eliminarCliente(id){
    try {
        console.log(id)
        const respuesta=await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method:'DELETE'
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
    
}