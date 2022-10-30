const URL = process.env.REACT_APP_API_CAFECITO;

export const consultarAPI = async()=>{
    //peticion get para obtener todos los productos
    try {
        console.log(URL)
        const respuesta = await fetch(URL);
        const listaProductos = await respuesta.json()
        console.log(listaProductos);
        return listaProductos;
    } catch (error) {
        console.log(error)
        return false;
    }
}
export const crearProductoAPI = async(producto)=>{
    //peticion post para crear un producto
    try {
        console.log(URL)
        const respuesta = await fetch(URL, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    } catch (error) {
        console.log(error)
        return false;
    }
}
export const borrarProductoAPI = async(id)=>{
    //peticion post para crear un producto
    try {
        const respuesta = await fetch(URL+'/'+id, {
            method: 'DELETE',
        });
        return respuesta;
    } catch (error) {
        console.log(error)
        return false;
    }}
    export const editarProductoAPI = async(id,producto)=>{
        //peticion get para obtener todos los productos
        try {
            const respuesta = await fetch(URL+'/'+id,{
                method: "PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(producto)
            });
            return respuesta;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
    export const obtenerProductoAPI = async(id)=>{
        //peticion get para obtener todos los productos
        try {
            const respuesta = await fetch(URL+'/'+id);
            const producto = {
                dato: await respuesta.json(),
                status: respuesta.status
            }
            return producto;
        } catch (error) {
            console.log(error)
            return false;
        }
    }